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

复制 [lib/less/](/lib/less/) 下的文件		
添加 [lib/less/settings.less](/lib/less/settings.less) 部分或者其他代码。配置 `color`。		
在 [lib/less/themes.less](/lib/less/themes.less) 文件中添加自定义主题 例:`/* xxx  (start) */` **`demo code`** `/* xxx  (end) */`		

````code
{
    title: '多次封装',
    desc: '此处另加了prefixClassName属性 是在示例中防止与组件自带样式重复覆盖',
    html: '<div id="themes-demo" ></div>',
    js: './themes.demo.js',
    source: './Themes.js',
    horiz: true,
    open: false
}
````


## prefixClassName

复制 [lib/index.less](./lib/index.less) 和 [lib/less/](./lib/less) 下的文件，修改 `border-radius` 部分或者其他代码。配置 `prefixClassName`。
[参考上面例子](#themes)

