---
layout: post
title: "How to watch Freevee without ads"
date: 2023-01-27 15:40:12 +1300
categories: tutorials
tags: talks tutorials freevee television amazon primevideo bookmarklet extension
author: "Mike Mackenzie"
---

### Using Javascript inside a bookmarklet to skip ads on Freevee

# ... how to block ads on Freevee

If you have watched things on Freevee before, you would've noticed it has quite a few long ads throughout.

Thankfully it's easy enough to skip over them in any Chromium browser (I use Brave). Probably the same for Firefox. 

Simply add a new bookmark, and put whatever as the title like `Skip Freevee Ads` 

<img width="554" alt="image" src="https://user-images.githubusercontent.com/376245/214998698-54b94f0c-ae47-43ee-8f3f-2ee30d231259.png">

For the URL enter the following:

<sup>note this code is long (not wrapped), so make sure you select all then copy</sup>

```js
javascript:setInterval((()=>{var e=document.querySelectorAll('div[class*=%22atvwebplayersdk-adtimeindicator-text%22]');if(e[0]&&e[0].innerText.length>2){var t=e[0].innerText;t=t.match(/\d* sec/g)[0].replace(%22sec%22,%22%22).trim(),document.getElementsByTagName(%22video%22)[1].currentTime=document.getElementsByTagName(%22video%22)[1].currentTime+parseInt(t)+1}}),2e3);
```

When you have whatever you're watching open simply click the bookmarklet button and it'll skip every ad break, and the bookmarklet only needs to be clicked once. 🙈 

<img width="496" alt="image" src="https://user-images.githubusercontent.com/376245/215000387-dcd93a33-1113-432e-b6d0-042ad35520c5.png">


Enjoy! 🎉
