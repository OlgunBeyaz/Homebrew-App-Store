window.addEventListener('DOMContentLoaded', () => {
  const appList = document.getElementById('app-list');
  const searchInput = document.getElementById('search');
  appList.innerHTML = '<div>Homebrew Apps werden geladen ...</div>';

  let allCasks = [];

  function renderApps(casks) {
    appList.innerHTML = '';
    if (!casks.length) {
      appList.innerHTML = '<div>Keine Homebrew Apps gefunden.</div>';
      return;
    }
    casks.forEach(cask => {
      const div = document.createElement('div');
      div.className = 'app-item';
      let homepage = cask.homepage || '';
      let favicon = homepage
        ? `https://www.google.com/s2/favicons?sz=64&domain_url=${encodeURIComponent(homepage)}`
        : 'homebrew.png';
      div.innerHTML = `
        <img class="app-icon" src="${favicon}" alt="icon" onerror="this.src='homebrew.png'" />
        <div class="app-title">${cask.name ? cask.name.join(', ') : cask.token}</div>
        <div class="app-desc">${cask.desc || ''}</div>
        <div class="app-actions">
          <button onclick="window.electronAPI.installBrewApp('${cask.token}')">Installieren</button>
          <button onclick="window.electronAPI.uninstallBrewApp('${cask.token}')">Deinstallieren</button>
        </div>
      `;
      appList.appendChild(div);
    });
  }

  fetch('https://formulae.brew.sh/api/cask.json')
    .then(res => res.json())
    .then(casks => {
      allCasks = casks;
      renderApps(allCasks);
    })
    .catch(() => {
      appList.innerHTML = '<div>Fehler beim Laden der Homebrew Apps.</div>';
    });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.trim().toLowerCase();
      if (!q) {
        renderApps(allCasks);
        return;
      }
      const filtered = allCasks.filter(cask =>
        (cask.name && cask.name.join(' ').toLowerCase().includes(q)) ||
        (cask.token && cask.token.toLowerCase().includes(q)) ||
        (cask.desc && cask.desc.toLowerCase().includes(q))
      );
      renderApps(filtered);
    });
  }
});
