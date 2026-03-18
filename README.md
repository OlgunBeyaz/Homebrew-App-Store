# Homebrew App Store

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
   git clone https://github.com/DEIN_GITHUB_USERNAME/homebrew-appstore.git
   cd homebrew-appstore
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
