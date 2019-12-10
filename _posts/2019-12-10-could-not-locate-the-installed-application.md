---
layout: post
title:  "Could not locate installed application"
date:   2019-12-10 20:10:34 +1300
categories: fastlane react-native code production
---

## Another… easy fix.

(for me at least)

![COuld not locate installed application in xcode](https://i.imgur.com/LLbP5l9.png)

Whenever I receieved this frustrating error when trying to debug my app on a live device, it kept frustrating the heck out of me… until I realised that I'd forgotten to turn back on Automatic Signing in XCode.

I usually leave it off for Fastlane, which does all my certificates n such for me, but yeah this wasn't exactly the most… forthcoming error to have.

Hope it helps someone. 