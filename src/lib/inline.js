/* 行内格式化：把章节数据里的轻量标记转成 HTML。
   支持 **粗体**、`代码`、[文字](链接)、{{cmd:add:warn:del:文字}}。
   只在构建期运行，产物是纯静态 HTML，不依赖任何前端框架。 */

const ESC = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
export const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ESC[c]);

export function inline(input) {
  let t = esc(input);
  t = t.replace(/`([^`]+)`/g, '<code>$1</code>');
  t = t.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  t = t.replace(
    /\[([^\]]+)\]\((https?:[^)\s]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
  );
  t = t.replace(/\{\{(cmd|add|warn|del):([^}]+)\}\}/g, '<span class="c-$1">$2</span>');
  return t;
}

/* 把富文本里的换行变成段落，供 lab 步骤等场合使用 */
export function paras(items) {
  return items.map((s) => inline(s));
}
