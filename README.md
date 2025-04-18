# 🦔 Otto-Matic – Chrome Extension
![Otto the Hedgehog](otto-matic-hedgehog-2in.jpg)

Otto-Matic is a customizable Chrome extension that adds a right-click menu to launch your favorite team tools. Collect your SPYDRs, Arkose, VirusTotal, SensAI, SpamCons, edu tools, etc all in one place. If it has a URL Otto can hang on to it for you!

 It’s lightweight, fast, and spiky with hedgehog energy.

## 🚀 Features
- Add custom tool links from the options menu
- Store and sync tools across browsers using `chrome.storage.sync`
- Launch tools directly from the right-click context menu
- Cute hedgehog icon for extra charm

## 🔧 How to Install
1. Download or clone this repo
2. Go to `chrome://extensions` in your Chrome browser
3. Enable **Developer mode**
4. Click **Load unpacked** and select the `otto-matic` folder

## 🛠 Tech Used
- Manifest V3
- JavaScript / HTML / CSS
- Chrome Extensions API
- `chrome.storage.sync` for saving tools

## 📦 To Build for Release
Just zip the folder and upload to the Chrome Web Store.

```bash
zip -r otto-matic.zip . -x "*.DS_Store" "*.git*"
