# 公司官网(gansutianqi-site-v2)
公司官网模板，基于bootstrap构建 [查看](http://1.jq2.com:8082/)

## 基于(Based on)
+ bootstrap 3.3.7
+ unify-v1.9.7

## 使用(Usage)
before you install if,your local machine need to install git ,gulp(install global),node,or yarn
+ clone repository git clone `https://github.com/gansutianqi/gansutianqi-site.git`
+ install dependencies with npm npm install
+ install dependencies with yarn yarn
+ after the install complete, type `gulp` or type `npm run build`
+ then the script will automatically open you default browser at localhost:3001 and enjoy it .

## 结构(File structor)
 + dist folder is the output directory , it could not add to the git repository
 + src directory , all of your work is after this directory
    + ajax-loadmore is dynamic html content load from other pages
    + images ,all you images put there
    + no-npm-plugins,the dependencies you need whitch not found in public repository can put this directory,something like private plugins you can put it here.
    + plugins ,the dependecies you need from public repository can put this folder. this directory always is maintnced by the script like gulp script. for some special purpose ,i retain it.you can delete it.
    + psd,the source of you psd file
    + scss,the scss code of you style.
    + styles,the output css file ,this is a copy of dist/styles,for some special purpose ,i retain it.

## 待办事项(Todo list)
+ 再把电商运营这方面的业务也推出来
+ 电商学院

## 更新记录(Change)

#### 2017-03-07
+ 首页解决方案样式调整,增加左右navigator
+ 首页幻灯片(banner)现在有两种样式可供选择
+ 增加电商运营解决方案,移除o2o门店管理解决方案,参考案例[电商运营](http://www.irelint.com/ebusiness)



#### 2017-03-06
+ 栏目字体取消加粗，栏目名称间距增大5-10个像素
+ 首页图片放置为通屏大图，图片下方设置点选按钮可供选择，若不选择的情况下进行自动播放。提高图片亮度。
+ 首页幻灯片去掉,换上了新的banner(旧的幻灯片改成默认宽度显示一张,暂时取消显示)
+ 网站logo更换
+ 完善o2o营销解决方案`index-o2o.pug`

+ 优化了gulp构建脚本,脚本CLI命令合并进package.json,现在调用的方式是`npm run watch`,`npm run build`
+ 新添加了脚本构建插件**cross-env**`npm install -dev cross-env`,或者`yarn add -D cross-env`更新你的node_modules
+ 更新了gulpfile.babel.js

#### 2017-02-09
+ `index-farm.pug` 用flowchart重画了流程图
+ `index-o2o.pug` 用flowchart重画了流程图

#### 2017-02-08
+ 添加favicon(普通pc为32x32,苹果移动设备为152x152,微软移动设备为144x144,)
+ Android 5 Chrome Color设置为`#FE6441`
+ msapplication-TileColor 设置为`#FFFFFF`
+ 更换logo,采用更加简洁的新logo
+ 修复首页`owl2-carousel-v0`黄灯片在屏幕分辨率介于992px-768px之间显示item的数量为`1`
+ 主题色从`#f7b70b`调整成为`#fe6441`
+ 更换comming-soon页面背景图片
+ 字体优先级切换为`Microsoft Yahei`,`Hiragino Sans GB`(苹果丽黑字体),`SimSun`
+ 更新了企业信息化解决方案,将原来用ps画的流程图用flowchart.js替换,现在更具有扩展性,代码更加干净
+ 部分图片用css来实现
