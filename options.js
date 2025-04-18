document.addEventListener('DOMContentLoaded', () => {
  const nameInput = document.getElementById('toolName');
  const urlInput = document.getElementById('toolURL');
  const addButton = document.getElementById('addTool');
  const list = document.getElementById('toolList');

  function renderTools(tools) {
    list.innerHTML = '';
    for (const [name, url] of Object.entries(tools)) {
      const li = document.createElement('li');
      li.innerHTML = \`\${name} <span class="tool-url">\${url}</span>
        <span class="remove-btn" data-name="\${name}">[Remove]</span>\`;
      list.appendChild(li);
    }

    document.querySelectorAll('.remove-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const name = btn.getAttribute('data-name');
        chrome.storage.sync.get(['tools'], data => {
          const tools = data.tools || {};
          delete tools[name];
          chrome.storage.sync.set({ tools }, () => renderTools(tools));
        });
      });
    });
  }

  addButton.addEventListener('click', () => {
    const name = nameInput.value.trim();
    const url = urlInput.value.trim();
    if (!name || !url) return;
    chrome.storage.sync.get(['tools'], data => {
      const tools = data.tools || {};
      tools[name] = url;
      chrome.storage.sync.set({ tools }, () => {
        renderTools(tools);
        nameInput.value = '';
        urlInput.value = '';
      });
    });
  });

  chrome.storage.sync.get(['tools'], data => renderTools(data.tools || {}));
});