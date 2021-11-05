# 标准产品有更新，如何给项目二开团队代码增量

如果你理解了二开设计的原理，对于如何给增量其实很简单。我们把二开【src/custom】的代码和标准主线【src/applications】产品是通过目录分隔的，也就是说两边开发互不影响。也就是说标准产品更新的东西只会在applications下更新，这种情况对于二开来说，我们应该提供全量的代码，也就是整个项目代码，让项目二开去直接把applications文件夹覆盖自己本地的applications文件夹。这样做是没有风险的，可以大胆去做。当然你可能会说，标准产品更新不一定只会更新applications目录，外面的比如config,theme,assets,package.json等也有可能会更新，那这样的话也简单，因为这些都是类似配置文件和静态资源文件，最简单的方式是通过直接观察哪些文件不一样直接修改或追加新内容。因为这块内容更新的频率很低，所以可以直接通过观察来去做。


## 直接覆盖applications会有什么影响

分两种情况：

<text-yellow txt="① 某个组件有被项目二开过"></text-yellow>

  - 这种情况下即便标准产品有更新，在实际打包的时候项目方打包后的代码是不包含标准产品更新的部分，如果有需要，则需要项目二开人员把标准产品的组件手动合并到自己二开的组件。

<text-yellow txt="② 某个组件没有被项目二开过"></text-yellow>

  -  这种情况下直接覆盖applications目录，项目上再进行打包的时候是能看到最新标准产品更新的内容

## diff工具来跑文件修改记录

正如上面说的，我们给全量代码项目上是可以直接手动覆盖applications目录，但有时候除了applications以外的代码有更新如果靠人工对比效率确实比较低，而且容易出错。或者说项目上的人对某个组件二开了，但是当这个组件有标准产品更新时候项目上还是想知道，那怎么办？所以这时候除了给到项目上全量代码以外，还是得给一份代码修改记录清单，产品方告诉项目二开，这个时间点内我们修改了哪些文件，供项目上二开的同事参考。
  
### diff工具地址
[diff](https://github.com/yny-fe/diff)

### 如何使用

首先从[代码仓库](https://github.com/yny-fe/diff)下载工具，下载完后进入跟目录执行：
```js
// 下载安装依赖
npm install
```
然后再执行
```js
npm run start
```

### 参数如何修改

首先看项目启动文件
```js{19,20,21}
async function main(commit2, commit1, projectNo) {
  const c1 = await exec(commit1, projectNo);
  const c2 = await exec(commit2, projectNo);
  let t1 = moment(c1.created_at).toISOString();
  let t2 = moment(c2.created_at).toISOString();
  if (moment(t1).isAfter(moment(t2))) {
    t1 = moment(c2.created_at).toISOString();
    t2 = moment(c1.created_at).toISOString();
  }
  const r = await loopListCommit(t1, t2, 1, []);
 
  const c = await processingFiles(r);
  let result = "";
  c.forEach(list => {
    result += (list.file + `\   ${list.records.pop()} \n`);
  });
  fs.writeFileSync("./detected.txt", result);
}
const commit1 = "87de3bf3abcb2a6c3305214980b90ce319432d34";
const commit2 = "631620036436c2be34e6ba088dab7fcfb0cc35db";
const projectNo = 745;
main(commit2, commit1, projectNo);
```

上面这段代码是执行脚本的启动文件，里面有个main方法，main方法接收三个参数，前两个参数是master分支任意两个commit记录的哈希值，第三个参数是项目编号，把这几个参数填好以后再执行上面命令则可以在跟目录下输出文件修改记录，这时候你可以在跟目录下找到一个名为 <text-yellow txt="detected.txt"></text-yellow>的文件，里面的内容就是在两个commit记录之间所有文件修改记录

### access-token

:::warning
需要注意的是，因为拉取git记录是需要权限的，所以在执行代码之前需要你手动配置一下你自己的gitlab账号的access-token，把你生成的access-token【不知道怎么生成access-token自行百度】复制到工具跟目录下<text-yellow txt=".access-token"></text-yellow>这个文件内即可【看清楚文件名是"."开头的，确保你的计算机没有隐藏.文件】
:::

### 必须是master分支上的commit记录吗

这个不一定，但是必须是同一个分支上的两个commit记录，默认代码是写死的master分支，如果你要更换其他分支需要去改源码~~