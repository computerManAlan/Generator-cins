# generator-cins

基于react+redux+antd的脚手架（使用于腾讯前端工作流工具:[feflow](https://github.com/feflow/feflow "feflow")）

配合使用: builder-cins （cins的webpack构建器:[builder-cins](https://github.com/aSmallAlan/Builder-cins "builder-cins")）
# 快速开始

``` bash
## 安装
$ npm install feflow-cli -g
$ npm install yo -g
$ feflow install generator-cins 
## 启动cins
$ yo cins
## 安装依赖
$ npm install
## 本地开发
$ feflow dev
## 打包文件
$ feflow build
```

# generator-cins依赖

由于本项目package.json文件中包版本可能低，在`npm start`时可能会出现错误：

```
Module not found: *****
```

如果出现这种情况，可以采用如下操作进行修复：

```bash
* 删除node_moudules中的包
$ npm install <最新的包>
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

# 附:
* 内置封装函数
