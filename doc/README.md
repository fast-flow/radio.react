# 文档

## basic

````code
{
    title: '基础使用',
    desc: '',
    html: '<div id="basic-demo" ></div>',
    source: './basic.demo.js',
    open: false,
    side: false,
}
````

## size

````code
{
    title: '基础使用',
    desc: '**通过改变包裹的div的`font-size`来自适应大小。<br/>建议font-size不要小于默认尺寸，因为浏览器对于含小数值px(像素)解析有差异。**',
    html: '<div id="size-demo" ></div>',
    source: './size.demo.js',
    open: false,
    side: false,
}
````

## themes

1. 可以参考`themes.demo.less`仅加部分代码修改 

````code
{
    title: 'themes.demo.less',
    desc: '',
    source: 'themes.demo.less',
    false: true,
    run:false
}
````        
````code
{
    title: '多次封装',
    desc: '',
    html: '<div id="themes-demo" ></div>',
    source: './themes.demo.js',
    open: false,
    side: false,
}
````

2. 也可以全部复制样式文件后做修改 [参考下面例子 prefixClassName](#prefixClassName)      
复制 [lib/less/](/lib/less/) 下的文件     
添加 [lib/less/settings.less](/lib/less/settings.less) 部分或者其他代码。配置 `color`。       
在 [lib/less/themes.less](/lib/less/themes.less) 文件中添加自定义主题 例:`/* themes green (start) */` **`demo code`** `/* themes green (end) */`    
<br/><br/><br/><br/><br/><br/>


## prefixClassName

复制 [lib/index.less](./lib/index.less) 和 [lib/less/](./lib/less) 下的文件，修改部分样式或者其他代码。
配置 `prefixClassName`。

````code
{
    title: '多次封装',
    desc: '',
    html: '<div id="pcls-demo" ></div>',
    source: './pcls.demo.js',
    open: false,
    side: false,
}
````
