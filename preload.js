const { contextBridge } = require('electron');
const { exec } = require('child_process');

contextBridge.exposeInMainWorld('electronAPI', {
  installBrewApp: (app) => {
    exec(`brew install --cask ${app}`);
  },
  uninstallBrewApp: (app) => {
    exec(`brew uninstall --cask ${app}`);
  }
});
