# Dcard-demo
## 如何執行程式?
1. 下載此資料夾至電腦
2. 打開Terminal並執行`cd [Your path]/Dcard-demo`到此資料夾內
3. 安裝npm modules
    * 在Terminal執行`npm install`
4. 在`package.json`檔案中修改電腦的IP位址
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
5. 在Terminal中執行`npm run dev`即可
## 網站架構
![圖片 1](https://user-images.githubusercontent.com/52899009/113510528-ed5aa480-958d-11eb-9066-7362d3e2afb2.png)
## 目錄結構 (dist檔案夾)
```
.  
├── image  
│   ├── gotop.png  
│   ├── gotop2.png  
│   ├── location.png  
│   └── logo.png  
├── index.css  
├── index.html  
└── js  
    ├── index.js  
    └── index.js.LICENSE.txt  
```
    
    
