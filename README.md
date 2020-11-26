### 理念
将关联的模块包集合在一个仓库中统一管理，monorepos。


### 优势
- 公共依赖外层package.json统一管理，避免重复
- 内部模块依赖方便，lerna add
- 发布方便，固定版本和独立版本可以选择


### 关键流程
- 打包逻辑处理，外层统一进行打包配置，借助lerna run的能力，单个package中配置好scripts
- 发布管理，结合gitlab project services或者CI/CD 做到自动部署 npm deploy


[资料](https://juejin.cn/post/6844903860331347975)

