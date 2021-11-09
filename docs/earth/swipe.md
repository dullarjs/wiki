<demo-mobile location="https://ui.dullar.xyz/earth/#/swipe"></demo-mobile>
# swipe

## 左右滑动
```vue
<template>
  <div>
    <yn-swipe ref="swipe1" indicatorType="number">
      <yn-swipe-item>
        <div>
          <img src="./images/apple-1.jpg" />
        </div>
      </yn-swipe-item>
      <yn-swipe-item>
        <img src="./images/apple-2.jpg" />
      </yn-swipe-item>
      <yn-swipe-item>
        <img src="./images/apple-3.jpg" />
      </yn-swipe-item>
      <yn-swipe-item>
        <img src="./images/apple-4.jpg" />
      </yn-swipe-item>
    </yn-swipe>
    <div class="api">
      <span>对外接口</span>
      <yn-button @click="prev('swipe1')">prev</yn-button>
      <yn-button @click="next('swipe1')">next</yn-button>
      <yn-button @click="open('swipe1')">open</yn-button>
      <yn-button @click="open('swipe1')">close</yn-button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    prev(ref) {
      console.log(ref);
      this.$refs[ref].prev();
    },
    next(ref) {
      this.$refs[ref].next();
    },
    open(ref) {
      this.$refs[ref].openImageViewer();
    },
    close(ref) {
      this.$refs[ref].closeImageViewer();
    }
  }
}
</script>
```
## 上下滑动
```vue
<template>
  <div>
    <yn-swipe ref="swipe2" vertical>
      <yn-swipe-item>
        <div>
          <img src="./images/apple-1.jpg" />
        </div>
      </yn-swipe-item>
      <yn-swipe-item>
        <img src="./images/apple-2.jpg" />
      </yn-swipe-item>
      <yn-swipe-item>
        <img src="./images/apple-3.jpg" />
      </yn-swipe-item>
      <yn-swipe-item>
        <img src="./images/apple-4.jpg" />
      </yn-swipe-item>
    </yn-swipe>
    <div class="api">
      <span>对外接口</span>
      <yn-button @click="prev('swipe2')">prev</yn-button>
      <yn-button @click="next('swipe3')">next</yn-button>
      <yn-button @click="open('swipe2')">open</yn-button>
      <yn-button @click="open('swipe3')">close</yn-button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    prev(ref) {
      console.log(ref);
      this.$refs[ref].prev();
    },
    next(ref) {
      this.$refs[ref].next();
    },
    open(ref) {
      this.$refs[ref].openImageViewer();
    },
    close(ref) {
      this.$refs[ref].closeImageViewer();
    }
  }
}
</script>
```

## 酒店轮播图
```vue
<template>
  <div>
    <div class="box">
      <h3>酒店轮播图</h3>
      <yn-swipe indicatorType="number">
        <yn-swipe-item resource="https://pavo.elongstatic.com/i/Hotel350_350/LQECeEzOkU.jpg">
          <div>
            <img src="https://pavo.elongstatic.com/i/Hotel350_350/LQECeEzOkU.jpg" />
          </div>
        </yn-swipe-item>
        <yn-swipe-item resource="http://pavo.elongstatic.com/i/Hotel350_350/000ciKER.jpg">
          <img src="http://pavo.elongstatic.com/i/Hotel350_350/000ciKER.jpg" />
        </yn-swipe-item>
        <yn-swipe-item resource="http://pavo.elongstatic.com/i/Hotel350_350/000cfX2X.jpg">
          <img src="http://pavo.elongstatic.com/i/Hotel350_350/000cfX2X.jpg" />
        </yn-swipe-item>
        <yn-swipe-item resource="http://pavo.elongstatic.com/i/Hotel350_350/L4sfKCVY64.jpg">
          <img src="http://pavo.elongstatic.com/i/Hotel350_350/L4sfKCVY64.jpg" />
        </yn-swipe-item>
        <yn-swipe-item resource="http://pavo.elongstatic.com/i/Hotel350_350/L4sfz6LKVO.jpg">
          <img src="http://pavo.elongstatic.com/i/Hotel350_350/L4sfz6LKVO.jpg" />
        </yn-swipe-item>
      </yn-swipe>
    </div>
  </div>
</template>
```