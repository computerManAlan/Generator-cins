# generator-cins

基于react+redux+antd的脚手架

# 快速开始

``` bash
## 安装依赖
$ npm install
## 本地开发(未安装feflow)
$ npm start
## 本地开发(安装feflow)
$ npm install generator-cins  
$ feflow dev
## 打包文件（未安装feflow）
$ npm build
## 打包文件 （安装feflow）
$ feflow build
## eslint检查
$ npm eslint
```

# generator-cins配置文件修改

## 未安装feflow：
```
直接修改配置文件
```
## 安装feflow：
```
* feflow安装目录node_modules里的builder-cins修改配置
* 或自行写一个feflow构建器
```

# 项目规范

## 目录结构

本项目采用单页面、共模块的目录结构。可以利用到React/Redux的开发效率及可读性.
介绍一个页面中的目录结构：

```
└── src
    ├── Actions // 存放action
    ├── components // 页面公用组件
    ├── Contants // 存储常量
    ├── Container // 智能组件
    ├── Fetch // 封装的ajax请求
    ├── Reducer //存放reducer
    ├── RouterMap // 存放routerMap
    ├── Static // 存放图片等静态资源
    ├── Store // 存放store
    ├── Util // 存放js函数,例如localstoreage
    └── index // 启动的入口文件
   
```

# 关于改进:
* QQ：1805737030
* github for generator-cins：https://github.com/aSmallAlan/Generator-cins
* github for builder-cins  : https://github.com/aSmallAlan/Builder-cins