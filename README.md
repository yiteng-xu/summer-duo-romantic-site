# Summer Duo

一个独立的静态情侣网站，发布仓库为 `yiteng-xu/summer-duo-romantic-site`。它不依赖、也不应该覆盖 `C:\\Users\\32492\\yiteng-xu.github.io` 或 `yiteng-xu.github.io` 的个人主页。

## 内容来源

当前页面使用仓库内 `app.js` 固化的 `summer-ef980926` 房间静态快照：清单总数、来源已完成数和剩余数都由这份内嵌清单实时计算。

本次检查 `D:\\Customized_Storybook` 时，没有发现 `summer-duo-20260720.zip`。因此页面文案不再宣称当前目录存在该 zip，只保留“内嵌房间快照”的来源说明。后续如果需要重新从原始导出文件生成页面，请先把 `summer-duo-20260720.zip` 放回该目录并重新核对数据。

本机新勾选状态只保存在浏览器 `localStorage`，可以用“恢复来源快照”清除；这些本机记录会与来源快照分开标注，不会冒充原始记录。

## 视觉方向

这一版避免科技产品/数据看板风格，改为公开高级浪漫与婚礼邀请模板常见的审美语言：象牙纸背景、温暖金色框线、衬线标题、细花枝线稿、克制留白和柔和玫瑰色点缀。页面代码与封面 SVG 均为本仓库独立实现，没有复制公开模板代码或素材。

## 本地预览

在仓库目录运行：

```powershell
python -m http.server 8080
```

然后访问 `http://localhost:8080`。

## 发布

仓库根目录包含 `index.html`、`styles.css`、`app.js`、`cover.svg` 和 `.nojekyll`，可由 GitHub Pages 从 `main` 分支根目录发布。发布前请确认 GitHub Pages 指向这个独立仓库，不要把它复制到 `yiteng-xu.github.io` 根目录。
