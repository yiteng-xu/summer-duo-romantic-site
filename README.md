# Summer Duo｜独立情侣浪漫站

这是基于 summer-duo-20260720.zip 重做的 GitHub Pages 静态站点，不依赖 Node 服务或数据库，也不修改 yiteng-xu.github.io 主站根首页。

## 发布方案

- 仓库：yiteng-xu/summer-duo-romantic-site
- Pages 来源：main 分支根目录
- 文件结构：所有可发布文件位于仓库根目录，包含 index.html、styles.css、app.js、cover.svg、.nojekyll
- 数据来源：zip 内 data/rooms.json 的最新房间 summer-ef980926

## 设计方向

- 深色高端科技公司官网风格：高对比排版、玻璃质感、Bento 卡片、低饱和霓虹渐变
- 中文内容克制浪漫，围绕“夏日双人系统”和真实 51 项清单展开
- 不使用传统婚礼模板，不放土味爱心背景

## 功能

- 响应式 landing page
- 51 项活动清单、7 个分类筛选
- 原始完成度：12 / 51
- 本地勾选状态保存到浏览器 localStorage
- 随机抽取一个未完成活动
- cover.svg 作为优化后的矢量封面图，避免大体积照片资源

## 本地预览

直接打开 index.html，或在该目录运行任意静态服务器：

~~~powershell
python -m http.server 8080
~~~

然后访问 http://localhost:8080。
