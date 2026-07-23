const ORIGINAL_ACTIVITIES = [{"title":"真人CS","category":"运动","completed":false,"completedBy":null,"completedAt":null},{"title":"卡丁车","category":"运动","completed":false,"completedBy":null,"completedAt":null},{"title":"碰碰车","category":"运动","completed":false,"completedBy":null,"completedAt":null},{"title":"冰壶","category":"运动","completed":false,"completedBy":null,"completedAt":null},{"title":"高尔夫","category":"运动","completed":false,"completedBy":null,"completedAt":null},{"title":"台球","category":"运动","completed":false,"completedBy":null,"completedAt":null},{"title":"保龄球","category":"运动","completed":false,"completedBy":null,"completedAt":null},{"title":"剧本杀","category":"朋友局","completed":false,"completedBy":null,"completedAt":null},{"title":"密室逃脱","category":"朋友局","completed":false,"completedBy":null,"completedAt":null},{"title":"桌游","category":"朋友局","completed":false,"completedBy":null,"completedAt":null},{"title":"滑板","category":"运动","completed":false,"completedBy":null,"completedAt":null},{"title":"轰趴","category":"朋友局","completed":false,"completedBy":null,"completedAt":null},{"title":"搏击课","category":"运动","completed":false,"completedBy":null,"completedAt":null},{"title":"室内攀岩","category":"运动","completed":true,"completedBy":"WoT","completedAt":"2026-07-20T05:12:54.404Z"},{"title":"滑雪","category":"运动","completed":false,"completedBy":null,"completedAt":null},{"title":"电玩城","category":"朋友局","completed":true,"completedBy":"WoT","completedAt":"2026-07-20T05:12:42.876Z"},{"title":"射箭","category":"运动","completed":false,"completedBy":null,"completedAt":null},{"title":"撸猫","category":"放松","completed":true,"completedBy":"WoT","completedAt":"2026-07-20T05:12:39.896Z"},{"title":"撸狗","category":"放松","completed":true,"completedBy":"WoT","completedAt":"2026-07-20T05:12:41.156Z"},{"title":"钓鱼","category":"放松","completed":false,"completedBy":null,"completedAt":null},{"title":"健身","category":"运动","completed":false,"completedBy":null,"completedAt":null},{"title":"骑马","category":"运动","completed":false,"completedBy":null,"completedAt":null},{"title":"爬山","category":"户外","completed":false,"completedBy":null,"completedAt":null},{"title":"蹦极","category":"户外","completed":false,"completedBy":null,"completedAt":null},{"title":"漂流","category":"户外","completed":false,"completedBy":null,"completedAt":null},{"title":"KTV","category":"朋友局","completed":false,"completedBy":null,"completedAt":null},{"title":"跳蚤市场","category":"逛逛","completed":false,"completedBy":null,"completedAt":null},{"title":"开黑","category":"朋友局","completed":false,"completedBy":null,"completedAt":null},{"title":"换装体验馆","category":"朋友局","completed":false,"completedBy":null,"completedAt":null},{"title":"烘焙体验馆","category":"手作","completed":false,"completedBy":null,"completedAt":null},{"title":"VR体验馆","category":"朋友局","completed":false,"completedBy":null,"completedAt":null},{"title":"撸一宠","category":"放松","completed":true,"completedBy":"WoT","completedAt":"2026-07-20T05:11:37.234Z"},{"title":"DIY手工","category":"手作","completed":false,"completedBy":null,"completedAt":null},{"title":"夜市","category":"逛逛","completed":true,"completedBy":"WoT","completedAt":"2026-07-20T05:12:15.160Z"},{"title":"露营","category":"户外","completed":false,"completedBy":null,"completedAt":null},{"title":"野餐","category":"户外","completed":false,"completedBy":null,"completedAt":null},{"title":"水上乐园","category":"户外","completed":false,"completedBy":null,"completedAt":null},{"title":"骑行","category":"户外","completed":false,"completedBy":null,"completedAt":null},{"title":"徒步","category":"户外","completed":true,"completedBy":"WoT","completedAt":"2026-07-20T05:12:11.222Z"},{"title":"赶海","category":"户外","completed":false,"completedBy":null,"completedAt":null},{"title":"看电影","category":"放松","completed":true,"completedBy":"WoT","completedAt":"2026-07-20T05:12:09.520Z"},{"title":"看裸眼3D","category":"放松","completed":false,"completedBy":null,"completedAt":null},{"title":"看演出","category":"放松","completed":false,"completedBy":null,"completedAt":null},{"title":"逛漫展","category":"逛逛","completed":true,"completedBy":"WoT","completedAt":"2026-07-20T05:12:01.107Z"},{"title":"逛科技馆","category":"逛逛","completed":true,"completedBy":"WoT","completedAt":"2026-07-20T05:12:05.841Z"},{"title":"逛海洋馆","category":"逛逛","completed":false,"completedBy":null,"completedAt":null},{"title":"逛植物园","category":"逛逛","completed":true,"completedBy":"WoT","completedAt":"2026-07-20T05:11:56.909Z"},{"title":"逛动物园","category":"逛逛","completed":true,"completedBy":"WoT","completedAt":"2026-07-20T05:11:55.389Z"},{"title":"逛熊猫园","category":"逛逛","completed":false,"completedBy":null,"completedAt":null},{"title":"逛胖东来","category":"逛逛","completed":false,"completedBy":null,"completedAt":null},{"title":"吃海胆","category":"吃吃","completed":false,"completedBy":null,"completedAt":null}];

const STORAGE_KEY = "summer-duo-static-progress-v2";
const SOURCE_DONE = ORIGINAL_ACTIVITIES.filter((activity) => activity.completed).length;
const state = {
  filter: "全部",
  pickedTitle: null,
  activities: restoreActivities()
};

const elements = {
  filters: document.querySelector("#filters"),
  todoList: document.querySelector("#todoList"),
  doneList: document.querySelector("#doneList"),
  todoCount: document.querySelector("#todoCount"),
  doneCount: document.querySelector("#doneCount"),
  metricTotal: document.querySelector("#metricTotal"),
  metricSourceDone: document.querySelector("#metricSourceDone"),
  metricRemaining: document.querySelector("#metricRemaining"),
  progressText: document.querySelector("#progressText"),
  progressBar: document.querySelector("#progressBar"),
  progressTrack: document.querySelector(".progress-track"),
  momentStrip: document.querySelector("#momentStrip"),
  pickButton: document.querySelector("#pickButton"),
  resetButton: document.querySelector("#resetButton"),
  toast: document.querySelector("#toast")
};

function cloneOriginal() {
  return ORIGINAL_ACTIVITIES.map((activity) => ({ ...activity }));
}

function restoreActivities() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    if (!Array.isArray(saved) || saved.length !== ORIGINAL_ACTIVITIES.length) {
      return cloneOriginal();
    }
    return ORIGINAL_ACTIVITIES.map((activity, index) => {
      const stored = saved[index] || {};
      return {
        ...activity,
        completed: Boolean(stored.completed),
        completedBy: stored.completed ? (stored.completedBy || "本机") : null,
        completedAt: stored.completed ? (stored.completedAt || activity.completedAt || new Date().toISOString()) : null
      };
    });
  } catch {
    return cloneOriginal();
  }
}

function persist() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(state.activities.map(({ completed, completedBy, completedAt }) => ({ completed, completedBy, completedAt })))
  );
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatDate(value) {
  if (!value) {
    return "来源快照中未标记日期";
  }
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "已记录";
  }
  return new Intl.DateTimeFormat("zh-CN", { month: "numeric", day: "numeric" }).format(date);
}

function isSourceCompletion(activity) {
  return activity.completedBy === "WoT" || activity.completedBy === "来源快照";
}

function categories() {
  return ["全部", ...Array.from(new Set(state.activities.map((activity) => activity.category)))];
}

function filteredActivities(completed) {
  return state.activities.filter((activity) => {
    const matchesFilter = state.filter === "全部" || activity.category === state.filter;
    return matchesFilter && activity.completed === completed;
  });
}

function renderFilters() {
  elements.filters.innerHTML = categories()
    .map((category) => {
      const count = category === "全部"
        ? state.activities.length
        : state.activities.filter((activity) => activity.category === category).length;
      const activeClass = category === state.filter ? " is-active" : "";
      return `<button class="filter-button${activeClass}" type="button" data-filter="${escapeHtml(category)}">${escapeHtml(category)} · ${count}</button>`;
    })
    .join("");
}

function taskCard(activity) {
  const index = state.activities.indexOf(activity);
  const pickedClass = state.pickedTitle === activity.title ? " is-picked" : "";
  const checked = activity.completed ? " checked" : "";
  const sourceLabel = isSourceCompletion(activity) ? "来源快照 · " : "本机记录 · ";
  const meta = activity.completed ? `${sourceLabel}${formatDate(activity.completedAt)}` : "留给下一次见面";
  return `<article class="task-card${pickedClass}">
    <input type="checkbox" data-index="${index}"${checked} aria-label="标记 ${escapeHtml(activity.title)} 的完成状态" />
    <span><span class="task-title">${escapeHtml(activity.title)}</span><span class="task-meta">${escapeHtml(meta)}</span></span>
    <span class="task-chip">${escapeHtml(activity.category)}</span>
  </article>`;
}

function emptyState(message) {
  return `<p class="empty-state">${escapeHtml(message)}</p>`;
}

function renderTasks() {
  const todos = filteredActivities(false);
  const dones = filteredActivities(true).sort((a, b) => new Date(b.completedAt || 0) - new Date(a.completedAt || 0));
  elements.todoList.innerHTML = todos.length ? todos.map(taskCard).join("") : emptyState("这一类已经被温柔收进回忆。");
  elements.doneList.innerHTML = dones.length ? dones.map(taskCard).join("") : emptyState("点亮一项之后，它会轻轻来到这里。");
}

function renderProgress() {
  const total = state.activities.length;
  const done = state.activities.filter((activity) => activity.completed).length;
  const remaining = total - done;
  const percent = total ? Math.round((done / total) * 100) : 0;
  elements.metricTotal.textContent = String(total);
  elements.metricSourceDone.textContent = String(SOURCE_DONE);
  elements.metricRemaining.textContent = String(total - SOURCE_DONE);
  elements.todoCount.textContent = `${remaining} 项`;
  elements.doneCount.textContent = `${done} 项`;
  elements.progressText.textContent = `${done} / ${total}`;
  elements.progressBar.style.width = `${percent}%`;
  elements.progressTrack.setAttribute("aria-valuenow", String(percent));
}

function renderMoments() {
  const completed = state.activities
    .filter((activity) => activity.completed)
    .sort((a, b) => new Date(b.completedAt || 0) - new Date(a.completedAt || 0));
  elements.momentStrip.innerHTML = completed.length
    ? completed.map((activity) => `<article class="moment-card"><strong>${escapeHtml(activity.title)}</strong><span>${escapeHtml(activity.category)} · ${escapeHtml(isSourceCompletion(activity) ? "来源快照" : "本机记录")} · ${escapeHtml(formatDate(activity.completedAt))}</span></article>`).join("")
    : emptyState("还没有被点亮的时刻。");
}

function render() {
  renderFilters();
  renderProgress();
  renderTasks();
  renderMoments();
}

function toggleActivity(index, completed) {
  const activity = state.activities[index];
  if (!activity) {
    return;
  }
  activity.completed = completed;
  activity.completedBy = completed ? (ORIGINAL_ACTIVITIES[index].completed ? "来源快照" : "本机") : null;
  activity.completedAt = completed ? (ORIGINAL_ACTIVITIES[index].completedAt || new Date().toISOString()) : null;
  persist();
  render();
  showToast(completed ? `已点亮：${activity.title}` : `已放回清单：${activity.title}`);
}

function pickOne() {
  const candidates = state.activities.filter((activity) => !activity.completed);
  if (!candidates.length) {
    showToast("这份清单已经全部成为回忆。");
    return;
  }
  const choice = candidates[Math.floor(Math.random() * candidates.length)];
  state.filter = "全部";
  state.pickedTitle = choice.title;
  render();
  document.querySelector(".task-card.is-picked")?.scrollIntoView({ behavior: "smooth", block: "center" });
  showToast(`今天可以一起拆开：${choice.title}`);
  window.setTimeout(() => {
    state.pickedTitle = null;
    renderTasks();
  }, 3200);
}

function resetProgress() {
  state.activities = cloneOriginal();
  state.filter = "全部";
  state.pickedTitle = null;
  localStorage.removeItem(STORAGE_KEY);
  render();
  showToast("已恢复到来源快照。");
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => elements.toast.classList.remove("is-visible"), 2400);
}

elements.filters.addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (!button) {
    return;
  }
  state.filter = button.dataset.filter;
  render();
});

document.addEventListener("change", (event) => {
  const checkbox = event.target.closest("[data-index]");
  if (!checkbox) {
    return;
  }
  toggleActivity(Number(checkbox.dataset.index), checkbox.checked);
});

elements.pickButton.addEventListener("click", pickOne);
elements.resetButton.addEventListener("click", resetProgress);
render();
