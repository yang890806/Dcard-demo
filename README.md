# Dcard-demo
## 如何執行程式?
1. 安裝npm modules
    * 在Terminal執行`npm install`
2. 在`package.json`檔案中修改電腦的IP位址
    * 請找到這行 &rarr; `"dev": "NODE_ENV=development webpack serve --open --host 192.168.100.6"`
    * 將`192.168.100.6`更改為自己電腦的IP位址
```json=
{
  "name": "dcard_demo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "watch": "NODE_ENV=development webpack --watch",
    "start": "NODE_ENV=development webpack",
    "deploy": "NODE_ENV=production webpack",
    "dev": "NODE_ENV=development webpack serve --open --host 192.168.100.6"
  }
}
```
3. 在Terminal中執行`npm run dev`即可
## 網站架構
