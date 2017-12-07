# 公司官网(gansutianqi-site-v2)
公司官网模板，基于bootstrap构建 [查看](http://1.jq2.com:8082/)

## 基于(Based on)
+ bootstrap 3.3.7
+ unify-v1.9.7

## 使用(Usage)
before you install if,your local machine need to install git ,gulp(install global),node,or yarn
+ clone repository git clone `https://github.com/gansutianqi/gansutianqi-site.git`
+ install dependencies with `npm install`
+ after the install completed, type `npm run build` t project root directory.
+ then the script will automatically open you default browser at localhost:3001 and enjoy it .

## 部署(deploy)
+ clone repository git clone `https://github.com/gansutianqi/gansutianqi-site.git`
+ install dependencies with `npm install`
+ after the install completed, type `npm run build` at project root directory.
+ for each commit of your updates, type `git pull origin master` pull latest updates and re run `npm run build`

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
+ ~~再把电商运营这方面的业务也推出来~~
+ ~~电商学院~~
+ ~~电商运营解决方案~~
+ ~~游戏资讯解决方案~~
+ ~~修改logo,太小了,放大~~
+ 首页幻灯片3张图片都更换
+ ~~增加电商学院解决方案(链接到电商学院)~~
+ ~~增加淘宝店铺装修解决方案~~
+ ~~增加新栏目(行业动态),参考[网站](http://www.chinaz.com/biz/)~~
+ ~~首页新闻中指向最新的新闻,可以是一些行业动态之类的新闻~~
+ ~~电商资讯改成行业动态~~
+ ~~学院改成培训学院~~
+ 行业动态里面的列表页，就按我发的那个页面改，右边是图片新闻、推荐新闻、热门新闻
+ ~~把天奇网络和那个图标再大点。感觉还是比较小~~

## 更新记录(Change)

#### 2017-03-16
+ 优化了公司官网的所有图片

#### 2017-03-15
+ 将各首页的banner图更换为jpg格式的，因为ie浏览器并不支持webp格式的图片

#### 2017-03-14
+ 压缩电商运营的图片
+ 将首页的电子商务图片更换为webp格式。

#### 2017-03-13
+ 栏目名称变更
+ 行业动态栏目结构调整
+ logo调整
+ 手动添加十篇文章

#### 2017-03-12
+ 修改logo
+ 增加电商学院解决方案
+ 增加淘宝店铺装修解决方案
+ 增加新栏目**电商资讯**
+ 增加`index-tbdp`
+ 增加`index-article.html`
+ 增加`article*.html`
+ 完善首页

#### 2017-03-10
+ index-dsyy.html中的头部图片的修改
+ index-dsyy.html中解决方案的图片修改
+ index-dsyy.html中头部图片的更换
+ index.html中给电商学院更换链接地址

#### 2017-03-09
+ 完善电商运营解决方案的网页`index-dsyy.html`
+ 完善主页的解决方案的`更多`改为`查看详情`
+ index-xxh.html页面中的`页脚`和`联系我们`重复，择一删除。
+ 更换index-dsyy.html页面中的`联系我们`的为外部调用。

#### 2017-03-08
+ 增加游戏娱乐资讯解决方案`index-yxyl.html`
+ 完善首页`index.html`
+ 完成电商运营解决方案的网页`index-dsyy.html`

#### 2017-03-07
+ 首页解决方案样式调整,增加左右navigator
+ 首页幻灯片(banner)现在有两种样式可供选择
+ 增加电商运营解决方案,移除o2o门店管理解决方案,参考案例[电商运营](http://www.irelint.com/ebusiness)
+ 添加游戏资讯解决方案(TODO
+ yanjf 调整首页解决方案栏目的边框阴影,图片的边框距。
+ O2O营销服务解决方案页面的趋势栏目的颜色

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
