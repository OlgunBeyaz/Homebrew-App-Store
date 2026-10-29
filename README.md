# Homebrew App Store

**A desktop interface for discovering, installing, and removing Homebrew Cask applications on macOS.**

This project provides an app-store-style interface for [Homebrew](https://brew.sh/) Casks, with app search, icons, descriptions, and one-click install/uninstall controls.

> **Platform:** macOS · **Built with:** Electron, Node.js · **Project repository:** https://github.com/OlgunBeyaz/Homebrew-App-Store

Eine Electron-basierte App-Store-ähnliche GUI für Homebrew Casks auf macOS.

## Features
- Listet alle verfügbaren Homebrew Casks (Apps) auf
- Suche nach Apps per Name oder Beschreibung
- Installieren und Deinstallieren von Apps per Klick
- Zeigt App-Icons und Beschreibungen an

## Voraussetzungen
- [Node.js](https://nodejs.org/) (empfohlen: aktuelle LTS-Version)
- [Homebrew](https://brew.sh/) auf macOS

## Installation
1. Repository klonen:
   ```sh
   git clone https://github.com/OlgunBeyaz/Homebrew-App-Store.git
   cd Homebrew-App-Store
   ```
2. Abhängigkeiten installieren:
   ```sh
   npm install
   ```

## Entwicklung starten
```sh
npm start
```

## Build (DMG für macOS erzeugen)
```sh
npm run dist
```

> Das App-Icon (homebrew.png) muss mindestens 512x512 Pixel groß sein!

## Projektstruktur
- `main.js` – Electron Main Process
- `renderer.js` – Renderer (Frontend-Logik)
- `preload.js` – Preload-Skripte für sichere Kommunikation
- `index.html` – UI
- `homebrew.png` – App-Icon
- `electron-builder.json` – Build-Konfiguration

## Lizenz
MIT

## Feedback and contributions

Found a bug or have an idea? [Open an issue](https://github.com/OlgunBeyaz/Homebrew-App-Store/issues) with your macOS version, reproduction steps, and any relevant logs. Contributions are welcome through pull requests.
