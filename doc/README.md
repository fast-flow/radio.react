# 文档

## basic

````code
{
    title: '基础使用',
    desc: '**markdown**',
    html: '<div id="basic-demo" ></div>',
    js: './basic.demo.js',
    source: './Basic.js',
    horiz: true,
    open: false
}
````

## before

````code
{
    title: '基础使用',
    desc: '**markdown**',
    html: '<div id="before-demo" ></div>',
    js: './before.demo.js',
    source: './Before.js',
    horiz: true,
    open: false
}
````

## size

````code
{
    title: '基础使用',
    desc: '**通过改变包裹的div的`font-size`来自适应大小。<br/>建议font-size不要小于默认尺寸，因为浏览器对于含小数值px(像素)解析有差异。**',
    html: '<div id="size-demo" ></div>',
    js: './size.demo.js',
    source: './Size.js',
    horiz: true,
    open: false
}
````

## themes

1. 可以参考`themes.demo.less`仅加部分代码修改 

````code
{
    title: 'themes.demo.less',
    source:'./themes.demo.less',
}
````	
````code
{
    title: '多次封装',
    desc: '',
    html: '<div id="themes-demo" ></div>',
    js: './themes.demo.js',
    source: './Themes.js',
    horiz: true,
    open: false
}
````
2. 也可以全部复制样式文件后做修改 [参考下面例子 prefixClassName](#prefixClassName)      
复制 [lib/less/](/lib/less/) 下的文件     
添加 [lib/less/settings.less](/lib/less/settings.less) 部分或者其他代码。配置 `color`。       
在 [lib/less/themes.less](/lib/less/themes.less) 文件中添加自定义主题 例:`/* xxx  (start) */` **`demo code`** `/* xxx  (end) */`    
<br/><br/><br/><br/><br/><br/>


## prefixClassName

复制 [lib/index.less](./lib/index.less) 和 [lib/less/](./lib/less) 下的文件，修改 `border-radius` 部分或者其他代码。
配置 `prefixClassName`。

````code
{
    title: '多次封装',
    desc: '',
    html: '<div id="pcls-demo" ></div>',
    js: './pcls.demo.js',
    source: './Pcls.js',
    horiz: true,
    open: false
}
````

