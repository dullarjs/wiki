<demo-mobile location="https://ui.dullar.xyz/earth/#/magic-layer"></demo-mobile>
# magic-layer

建议手机上扫码访问体验

<qr-code name="magic-layer"></qr-code>


::: warning

注意cancelBubbles这个props，是个数组类型，里面传的参数是元素类的集合，比如案例中[".cancel-bubble-event"]，由于yn-magic-layer组件把页面整体分为两层结构，上面和下面；所有在下面块元素里面的内容如果有任何事件，都会通过冒泡事件触发yn-magic-layer自身的下拉滑动或者上滑。所以为了阻止某些元素滑动，你只需要给这些元素加一个唯一的class（必须要求每个class都唯一找到一个dom节点并且节点与节点之间无包含关系），设置好以后，指定class的元素在进行自身的事件操作的时候就不会通过冒泡传递给yn-magic-layer了

:::

```js
<template>
  <div class="container">
    <yn-magic-layer :cancelBubbles="cancelBubbles" ref="magicLayer" @dragstart="handleDragstart" @dragging="handleDragging" @stoped="handleStpped" @transitionend="handleTransitionend">
      <div class="inner" :class="animated ? 'animated' : ''" ref="inner" slot="inner">
        <div class="filter-background" ref="filter"></div>
        <div :class="(this.dragstart || this.opened) ? 'swipe-view-box' : ''">
          <yn-swipe :indicatorTopPosition="200" :indicatorFixed="indicatorFixed" class="swipe-view" @click="handleClick" @ticking="handleTicking" ref="swipex" indicatorType="number">
            <yn-swipe-item v-for="(item, index) in images" :key="index" :resource="item">
              <div>
                <img :src="item" />
              </div>
            </yn-swipe-item>
          </yn-swipe>
        </div>
      </div>
      <div slot="outside" class="outside">
        <p @click="giveItATry">尝试点击一下吧，看还能否触发</p>
        <p @click="handleDatePick">弹出日历来看看</p>
        <yn-calendar
          class="cancel-bubble-event"
          mode="single"
          :before="10"
          :after="10"
          v-model="calendar1"
          noticeText="温馨提示：为配合各地政府落实疫情防控常态化措施，避免重复退票带来的不便，铁路车票预售期调整为15天"
        ></yn-calendar>
      </div>
    </yn-magic-layer>
    <yn-popup class="background" @beforeEnter="beforeEnter" @afterLeave="afterLeave" @afterEnter="afterEnter" v-model="popup" position="middle">
      <template v-if="entered">
        <yn-swipe ref="swipey" @ticking="handleTicking2" indicatorType="number" :autoPlay="false">
          <yn-swipe-item v-for="(item, index) in images" :key="index" :resource="item">
            <div>
              <img :src="item" />
            </div>
          </yn-swipe-item>
        </yn-swipe>
      </template>
    </yn-popup>
  </div>
</template>
<script type="text/javascript">
  export default {
    name: "YnMagicLayerPage",
    data() {
      return {
        cancelBubbles: [".cancel-bubble-event"],
        calendar1: false,
        dragstart: false,
        dragging: false,
        indicatorFixed: true,
        opened: false,
        modalDom: null,
        popup: false,
        entered: false,
        currentIndex: -1,
        animated: false,
        images: [
          "https://pavo.elongstatic.com/i/Hotel350_350/JcPRJpObzW.jpg",
          "https://img.huazhu.com/cos/mdm/HN02000710/a9104687-333c-4930-92ec-930c95936876/2021-09-10-16-56-26-529.jpg",
          "http://pavo.elongstatic.com/i/Hotel350_350/0004XDSx.jpg",
          "https://pavo.elongstatic.com/i/Hotel350_350/LQECeEzOkU.jpg",
          "http://pavo.elongstatic.com/i/Hotel350_350/000ciKER.jpg"
        ]
      }
    },
    methods: {
      handleDatePick() {
        this.calendar1 = true;
      },
      giveItATry() {
        this.Toast("点击触发了~~哈哈");
      },
      handleDragstart() {
        // this.dragstart = true;
      },
      handleTransitionend(e) {
        this.opened = e.opened;
        if (e.opened) {
          this.indicatorFixed = false;
        } else {
          this.indicatorFixed = true;
          this.dragstart = false;
        }
      },
      handleTicking(e) {
        if (!this.opened) {
          this.dragstart = false;
          // this.$refs.magicLayer.fold();
        }
        this.$refs.filter.style.backgroundImage = `url(${this.images[e.activeIndex - 1]})`;
      },
      handleTicking2(e) {
        this.modalDom.style.backgroundImage = `url(${this.images[e.activeIndex - 1]})`;
        this.modalDom.style.filter = "blur(20px)";
        this.modalDom.style.backgroundSize = "cover";
      },
      handleDragging(e) {
        this.dragstart = true;
        this.dragging = true;
        this.animated = false;
        this.$refs.inner.style.height = `${e.height}px`;
      },
      handleStpped(e) {
        this.opened = e.opened;
        this.dragging = false;
        this.animated = true;
        this.$refs.inner.style.height = `${e.height}px`;
      },
      handleClick(index) {
        if (!this.opened) {
          console.log("当前是第几个", index);
          this.popup = true;
          this.currentIndex = index;
        }
      },
      beforeEnter(e) {
        console.log("beforeEnter", e);
        this.modalDom = e.modal;
        this.$refs.swipex.stop();
      },
      afterEnter() {
        this.entered = true;
      },
      afterLeave() {
        this.$refs.swipex.play();
      }
    }
  };
</script>
<style type="text/css" scoped="scoped">
  .container {
    height: 100%;
  }
  .inner {
    height: 240px;
    overflow: hidden;
    position: relative;
  }
  .inner.animated {
    transition: height 0.5s ease;
  }
  .filter-background {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    filter: blur(20px);
    background-size: cover;
  }
  .outside {
    background: yellow;
  }
  .swipe-view-box {
    position: absolute;
    top: 50%;
    transform: translate3d(0, -50%, 0);
    width: 100%;
    height: auto;
  }
  .background {
    background:  rgba(0, 0, 0, 0) !important;
    /* filter: blur(20px); */
    /* width: 50% !important; */
  }
</style>

</style>


```