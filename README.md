# Summer Duo

一个独立的静态情侣网站，发布仓库为 `yiteng-xu/summer-duo-romantic-site`。它不会覆盖 `yiteng-xu.github.io` 的个人主页。

## 内容来源

页面中的 51 项活动、12 项来源完成记录和房间标识来自用户提供的 `summer-duo-20260720.zip` 中的 `data/rooms.json`，房间为 `summer-ef980926`。页面不添加原始文件之外的统计指标；本机新勾选状态只保存在浏览器 `localStorage`，可以用“恢复来源快照”清除。

## 视觉方向

这一版采用公开浪漫/婚礼邀请网站常见的编辑感留白、衬线标题、时间线式记录和纸张色调，参考了以下公开项目的结构与审美方向，但页面代码和封面图为本仓库独立实现：

- [Invitation Template](https://rainier-ps.github.io/Invitation-Template/)
- [Wedding Website](https://rampatra-wedding-website.mintlify.app/)
- [wedding-invitation-website](https://github.com/archakNath/wedding-invitation-website)
- [Forever & Always](https://colorlib.com/wp/template/forever-always/)

## 本地预览

在仓库目录运行：

```powershell
python -m http.server 8080
```

然后访问 `http://localhost:8080`。

## 发布

仓库根目录包含 `index.html`、`styles.css`、`app.js`、`cover.svg` 和 `.nojekyll`，可由 GitHub Pages 从 `main` 分支根目录发布。发布前请确认 GitHub Pages 仍指向这个独立仓库，不要把它复制到 `yiteng-xu.github.io` 根目录。
