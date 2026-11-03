const $ = id => document.getElementById(id);
const steps = window.lessonSteps;
let current = 0, timer = null;
const promptText = $('promptText').textContent;
$('inlinePromptText').textContent = promptText;
steps.forEach((step, i) => {
  const button = document.createElement('button');
  button.innerHTML = `<span class="num">${String(i + 1).padStart(2, '0')}</span><span>${step.chapter}</span>`;
  button.onclick = () => { stop(); show(i); };
  $('chapters').appendChild(button);
});
function show(n) {
  current = Math.max(0, Math.min(steps.length - 1, n));
  const s = steps[current];
  $('title').textContent = s.title;
  $('description').textContent = s.description;
  $('stepCount').textContent = `${s.optional ? '选读' : 'STEP'} ${String(current + 1).padStart(2, '0')} / ${String(steps.length).padStart(2, '0')}`;
  $('appName').textContent = s.app;
  $('shot').src = 'assets/' + s.image;
  $('shot').alt = `第 ${current + 1} 步：${s.title}，${s.app}`;
  $('shot').classList.toggle('dialog-shot', !!s.dialog);
  $('imageWrap').classList.toggle('prompt-scene', !!s.prompt);
  $('inlinePrompt').hidden = !s.prompt;
  $('action').textContent = s.action;
  $('expected').textContent = s.expected;
  $('extra').innerHTML = s.extra || '';
  $('progressText').textContent = `${current + 1} / ${steps.length}`;
  $('progress').style.width = ((current + 1) / steps.length * 100) + '%';
  $('prev').disabled = current === 0;
  $('next').disabled = current === steps.length - 1;
  $('done').textContent = current === steps.length - 1 ? '本课已完成 ✓' : s.prompt ? '已粘贴并发送，查看结果 →' : steps[current + 1]?.optional ? '验证完成 · 查看选读 →' : '我已完成，下一步 →';
  [...$('chapters').children].forEach((b, i) => {
    b.classList.toggle('active', i === current);
    b.setAttribute('aria-current', i === current ? 'step' : 'false');
  });
  history.replaceState(null, '', '#step-' + (current + 1));
  $('hotspot').hidden = !s.hotspot;
  if (s.pause || current === steps.length - 1) stop();
  requestAnimationFrame(positionOverlays);
  window.scrollTo({top: 0, behavior: "instant"});
}
function next() { if (current < steps.length - 1) show(current + 1); }
function stop() {
  clearInterval(timer); timer = null;
  $('play').textContent = '▷ 自动演示';
  $('modeLabel').textContent = steps[current]?.prompt ? '提示词出现 · 已暂停' : '点击跟做';
}
function play() {
  if (timer) { stop(); return; }
  if (steps[current].prompt) { $('copyInline').focus(); return; }
  if (current === steps.length - 1) show(0);
  $('play').textContent = 'Ⅱ 暂停演示';
  $('modeLabel').textContent = '自动演示 · 8 秒 / 步';
  timer = setInterval(next, 8000);
}
function imageRect() {
  const img = $('shot'), r = img.getBoundingClientRect(), wr = $('imageWrap').getBoundingClientRect();
  if (!img.naturalWidth) return null;
  const scale = Math.min(r.width / img.naturalWidth, r.height / img.naturalHeight);
  const width = img.naturalWidth * scale, height = img.naturalHeight * scale;
  return { left: r.left - wr.left + (r.width - width) / 2, top: r.top - wr.top + (r.height - height) / 2, width, height };
}
function place(el, area, rect) {
  const [x, y, w, h] = area;
  Object.assign(el.style, { left: (rect.left + x * rect.width / 100) + 'px', top: (rect.top + y * rect.height / 100) + 'px', width: (w * rect.width / 100) + 'px', height: h ? (h * rect.height / 100) + 'px' : 'auto' });
}
function positionOverlays() {
  const rect = imageRect(), step = steps[current];
  if (!rect) return;
  if (step.hotspot) place($('hotspot'), step.hotspot, rect);
  if (step.prompt && !matchMedia('(max-width:720px)').matches) {
    place($('inlinePrompt'), [28.5, 23, 67, 0], rect);
    $('inlinePrompt').style.setProperty('--prompt-font', Math.max(15, Math.min(20, rect.width / 42)) + 'px');
  }
}
async function copyPrompt(button) {
  stop();
  try {
    await navigator.clipboard.writeText(promptText);
    button.textContent = '✓ 已复制';
    $('copyStatus').textContent = '已复制。请到千问办公的新任务中粘贴并发送，再继续看结果。';
  } catch {
    $('copyStatus').textContent = '请长按或选中上方完整提示词，手动复制。';
    const selection = window.getSelection(), range = document.createRange();
    range.selectNodeContents($('inlinePromptText')); selection.removeAllRanges(); selection.addRange(range);
    button.textContent = '请复制已选中的文字';
  }
}
$('prev').onclick = () => { stop(); show(current - 1); };
$('next').onclick = () => { stop(); next(); };
$('play').onclick = play;
$('hotspot').onclick = () => { stop(); next(); };
$('done').onclick = () => { stop(); next(); };
$('continuePrompt').onclick = () => { stop(); next(); };
$('copyInline').onclick = () => copyPrompt($('copyInline'));
$('copyPrompt').onclick = () => copyPrompt($('copyPrompt'));
$('zoom').onclick = () => { $('largeShot').src = $('shot').src; $('lightbox').showModal(); };
$('closeZoom').onclick = () => $('lightbox').close();
$('openPrompts').onclick = () => { stop(); $('prompts').showModal(); };
$('closePrompts').onclick = () => $('prompts').close();
$('fullscreen').onclick = () => { if (document.fullscreenElement) document.exitFullscreen(); else document.documentElement.requestFullscreen().catch(() => {}); };
$('shot').addEventListener('load', positionOverlays);
window.addEventListener('resize', positionOverlays);
document.addEventListener('keydown', e => {
  if (document.querySelector('dialog[open]')) return;
  if (e.key === 'ArrowRight') { stop(); next(); }
  if (e.key === 'ArrowLeft') { stop(); show(current - 1); }
  if (e.code === 'Space' && e.target === document.body) { e.preventDefault(); play(); }
  if (e.key.toLowerCase() === 'f') $('fullscreen').click();
});
show((parseInt(location.hash.replace('#step-', '')) || 1) - 1);
