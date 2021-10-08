<demo-pc location="https://ui.dullar.xyz/mercury/#/tree"></demo-pc>
# tree


## default
```vue
<yn-tree :data="data" @pick="handlePicked"></yn-tree>
<script>
export default {
  data() {
    return {
      data: [{
        label: 'Level one 1',
        children: [{
          label: 'Level two 1-1',
          children: [{
            label: 'Level three 1-1-1'
          }]
        }]
      }, {
        label: 'Level one 2',
        children: [{
          label: 'Level two 2-1',
          children: [{
            label: 'Level three 2-1-1'
          }]
        }, {
          label: 'Level two 2-2',
          children: [{
            label: 'Level three 2-2-1'
          }]
        }]
      }, {
        label: 'Level one 3',
        children: [{
          label: 'Level two 3-1',
          children: [{
            label: 'Level three 3-1-1'
          }]
        }, {
          label: 'Level two 3-2',
          children: [{
            label: 'Level three 3-2-1'
          }]
        }]
      }]
    }
  },
  methods: {
    handlePicked(selected) {
      console.log("已选择的是", selected);
    }
  }
}
</script>
```

## checkbox

```vue
<yn-tree :data="data2" showCheckbox @pick="handlePicked"></yn-tree>

<script>
export default {
  data() {
    return {
      data2: [{
        label: 'Level one 1',
        children: [{
          label: 'Level two 1-1',
          children: [{
            label: 'Level three 1-1-1'
          }]
        }]
      }, {
        label: 'Level one 2',
        children: [{
          label: 'Level two 2-1',
          children: [{
            label: 'Level three 2-1-1'
          }]
        }, {
          label: 'Level two 2-2',
          children: [{
            label: 'Level three 2-2-1'
          }]
        }]
      }, {
        label: 'Level one 3',
        children: [{
          label: 'Level two 3-1',
          children: [{
            label: 'Level three 3-1-1'
          }]
        }, {
          label: 'Level two 3-2',
          children: [{
            label: 'Level three 3-2-1'
          }]
        }]
      }]
    }
  },
  methods: {
    handlePicked(selected) {
      console.log("已选择的是", selected);
    }
  }
}
</script>
```

## lazy

```vue
<yn-tree
  :data="data3"
  :load="load()"
  lazy
  showCheckbox
  @pick="handlePicked">
</yn-tree>

<script>
export default {
  data() {
    return {
      data3: [{
        label: 'Level one 1'
      }, {
        label: 'Level one 2'
      }, {
        label: 'Level one 3'
      }]
    }
  },
  methods: {
    handlePicked(selected) {
      console.log("已选择的是", selected);
    },
    requestLoad(args) {
      const { node } = args;
      console.log("接收到的参数", node);
      return new Promise((resolve, reject) => {
        console.log(reject);
        const result = [];
        [1, 2, 3, 4, 5].forEach(i => {
          result.push({ label: `Level ${node.id}-${i}` });
        });
        setTimeout(() => {
          resolve(result);
        }, 1000);
      }).catch(err => {
        console.log("失败", err);
      });
    },
    load() {
      return {
        params: { a: 1, b: 2, c: 3 },
        action: this.requestLoad
      }
    }
  }
}
</script>
```
