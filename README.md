## 公司官网模板
公司官网模板，使用响应式框架bootstrap构建，[查看](http://1.jq2.com:8082/)

### 使用框架 frontend framework
+ bootstrap 3.3.7
+ unify-v1.9.7

### 如何使用 usage
before you install if,your local machine need to install git ,gulp(install global),node,or yarn
+ clone repository git clone `https://github.com/gansutianqi/gansutianqi-site.git`
+ install dependencies with npm npm install
+ install dependencies with yarn yarn
+ after the install complete, type gulp
+ then the script will automatically open you default browser at localhost:3001 and enjoy it .

### 文件结构 file structure
 + dist folder is the output directory , it could not add to the git repository
 + src directory , all of your work is after this directory
    + ajax-loadmore is dynamic html content load from other pages
    + images ,all you images put there
    + no-npm-plugins,the dependencies you need whitch not found in public repository can put this directory,something like private plugins you can put it here.
    + plugins ,the dependecies you need from public repository can put this folder. this directory always is maintnced by the script like gulp script. for some special purpose ,i retain it.you can delete it.
    + psd,the source of you psd file
    + scss,the scss code of you style.
    + styles,the output css file ,this is a copy of dist/styles,for some special purpose ,i retain it.

### TODO
    + more