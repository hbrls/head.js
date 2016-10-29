HOWTO
==

head.load.async: 下载远端 js，css 文件，异步执行，适用于对执行顺序不重要的 js 文件

    head.load.async(['xxxx.css', 'yyyy.js']);

head.load: 下载远端 js，css 文件，同步执行，适用于对执行顺序有要求的 js 文件

    head.load(['xxxx.css', 'yyyy.js', 'zzzz.js']);

支持回调函数，在资源下载完以后，会执行回调函数

    head.load(['xxxx.css', 'yyyy.js', 'zzzz.js'], function () {
         console.log('finish downloading');
    });

forked from [Tiny-Loader.js](https://github.com/youzan/tiny-loader.js)
==
A small loader that load CSS/JS in best way for page performance


## 特点
已经有那么多加载器了，为什么还要再写一个？Tiny-Loader有如下特性：

* 代码短小，不算注释和空行，源码一共118行，所以我们推荐将压缩版inline到html里直接使用
* 同时支持css、js的加载，并自动判断文件类型，用正确的方式加载文件
* 支持异步加载同步执行

## 概述
在前端性能优化中，我们会压缩静态文件，懒加载图片，合并请求，来加快页面打开速度。当这些都做完以后，前端性能优化仿佛进入了一个瓶颈，所有的资源都已经最合理化加载了。其实，仔细观察静态资源文件，会发现许多文件我们并不需要在页面一开始就下载它们。这时候，如果有个组件，帮助我根据优先级的不同，在特定的时间下载特定的资源，同时会有需要保证脚本的执行顺序，就能完美的解决这个问题。这个就是 Tiny-Loader 的起源。它与一般资源加载器不同的是，他可以保证资源下载以后的执行顺序，可以动态的进行资源加载。

关于浏览器渲染机制，特别是js对首屏时间的影响，可以移步我的小伙伴@德来在SegmentFault上的专栏文章[《JS 一定要放在 Body 的最底部么？聊聊浏览器的渲染机制》](http://segmentfault.com/a/1190000004292479)

## 为什么使用 Tiny-Loader
在上古时代，我们讲究的是把所有css都放在页面头部，把所有js放在页面底部。这样可以让页面迅速展示出来，而js的阻塞执行不会影响到body内部元素的渲染。其实，大部分的js加载可以放到load事件后再加载，这样可以释放出许多网络资源，让页面更快的展现在用户面前。

同时，在前端性能优化过程中，发现许多js，css并不是页面一开始就需要的，而是在用户某个操作以后，才需要执行/渲染出来的。将那些js、css"缓加载"，可以大大减小页面加载出首屏，页面出"load"事件的负担，减少页面的加载时间。

## 使用 Tiny-Loader

具体使用说明和高阶使用技巧请看我们的[博客文章](http://tech.youzan.com/tiny-loader/)

注意：

1. 普通的js，可以委托给Tiny-Loader进行下载。Tiny-Loader会在页面load以后才开始js的加载，让其余资源先行加载，保证Dom树更早的生成完毕。
2. 对于js的执行顺序问题，Tiny-Loader里面的Loader.sync能够保证js下载后的执行顺序，这样就能保证js同时下载，顺序执行。
3. css加载都默认走async方式
4. 会自动判断文件类型，用正确的方式加载文件

[Demo](https://raw.githubusercontent.com/youzan/tiny-loader.js/master/example.html)

## 疑问或问题
有任何疑问或者问题，可以在[issue](https://github.com/youzan/tiny-loader.js/issues)中向我们提出来，我们会第一时间解决。
