/**
 * MagmaLink edit mode: ?edit=1 makes copy elements contenteditable.
 * Save: stores in localStorage and downloads copy-edits.json to apply via scripts/apply-copy-edits.js
 */
(function () {
  const params = new URLSearchParams(window.location.search);
  if (params.get('edit') !== '1') return;

  const COPY = window.__COPY__;
  if (!COPY) return;

  const STORAGE_KEY = 'magmalink-copy-edits';

  function getNested(obj, path) {
    const parts = path.split('.');
    let v = obj;
    for (const p of parts) {
      if (v == null) return undefined;
      const num = Number(p);
      v = Number.isNaN(num) ? v[p] : v[num];
    }
    return v;
  }

  function setNested(obj, path, value) {
    const parts = path.split('.');
    let current = obj;
    for (let i = 0; i < parts.length - 1; i++) {
      const p = parts[i];
      const num = Number(p);
      const key = Number.isNaN(num) ? p : num;
      const nextKey = parts[i + 1];
      const nextNum = Number(nextKey);
      const isArray = !Number.isNaN(nextNum);
      if (current[key] == null) current[key] = isArray ? [] : {};
      current = current[key];
    }
    const last = parts[parts.length - 1];
    const lastNum = Number(last);
    current[Number.isNaN(lastNum) ? last : lastNum] = value;
  }

  function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') return obj;
    if (Array.isArray(obj)) return obj.map(deepClone);
    const out = {};
    for (const k of Object.keys(obj)) out[k] = deepClone(obj[k]);
    return out;
  }

  function collectEdits() {
    const out = deepClone(COPY);
    document.querySelectorAll('[data-copy-key]').forEach((el) => {
      const key = el.getAttribute('data-copy-key');
      if (!key) return;
      const val = el.textContent.trim();
      setNested(out, key, val);
    });
    return out;
  }

  function applyToPage(copyData) {
    document.querySelectorAll('[data-copy-key]').forEach((el) => {
      const key = el.getAttribute('data-copy-key');
      if (!key) return;
      const val = getNested(copyData, key);
      if (val == null) return;
      el.textContent = Array.isArray(val) ? val.join(', ') : String(val);
    });
  }

  // Load saved edits from localStorage and apply so page shows latest
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      applyToPage(parsed);
    }
  } catch (_) {}

  const btn = document.createElement('button');

  function doSave() {
    const edited = collectEdits();
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(edited, null, 2));
    } catch (_) {}
    const blob = new Blob([JSON.stringify(edited, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'copy-edits.json';
    a.click();
    URL.revokeObjectURL(a.href);
    btn.textContent = 'Saved ✓';
    setTimeout(function () { btn.textContent = 'Save copy'; }, 2000);
  }

  // Make copy elements editable; Enter saves
  btn.type = 'button';
  btn.textContent = 'Save copy';
  btn.id = 'edit-mode-save-btn';
  btn.style.cssText = [
    'position:fixed',
    'bottom:24px',
    'right:24px',
    'z-index:9999',
    'padding:12px 20px',
    'background:#2563EB',
    'color:white',
    'border:none',
    'border-radius:8px',
    'font-weight:600',
    'cursor:pointer',
    'box-shadow:0 4px 14px rgba(37,99,235,0.4)',
    'font-size:14px',
  ].join(';');
  btn.addEventListener('click', doSave);

  document.querySelectorAll('[data-copy-key]').forEach((el) => {
    el.setAttribute('contenteditable', 'true');
    el.setAttribute('spellcheck', 'false');
    el.style.outline = '1px dashed rgba(59, 130, 246, 0.5)';
    el.style.outlineOffset = '2px';
    el.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        el.blur();
        doSave();
      }
    });
  });

  document.body.appendChild(btn);
})();
