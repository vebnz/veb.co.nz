---
layout: post
title: "How to join a guest/free wifi on Mac"
date: 2023-02-16 9:40:12 +1300
categories: tutorials
tags: talks tutorials
author: "Mike Mackenzie"
---

### How to join a guest/free wifi on Mac

If you need to join the Dunedin Hospital free WiFi (Southern DHB) you may get a bit annoyed when trying with a Mac because the "acceptance screen" doesn't show up.

There's a wee trick to this however. Once you've selected the WiFi network, wait a couple of minutes then direct your browser to: [http://captive.apple.com/](http://captive.apple.com)

If this does not bring up the "Yes pls I accept your terms" screen (aka "acceptance screen"), go to System Preferences, Network, find your wireless connection.

Click the advanced button.

Choose the DNS tab.

<img width="780" alt="image" src="https://user-images.githubusercontent.com/376245/219148335-34921082-b167-4e25-b915-1c52092d889d.png">

You want to remove it:

<img width="323" alt="image" src="https://user-images.githubusercontent.com/376245/219148397-63a077c7-89ba-4bc4-8388-7bb5db2f688f.png">

Click OK. Go back to the captive.apple.com page and refresh. Voilà!
