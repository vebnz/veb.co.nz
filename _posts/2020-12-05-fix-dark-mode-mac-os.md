---
layout: post
title:  "How to fix dark mode not working properly on macOS"
date:   2020-12-05 21:10:34 +1300
categories: macOS apple chrome safari darkmode
author: "Mike Mackenzie"
---

# How to fix the bloody problem?!?!

It took me a while to realise that it wasn't working properly. It took me even longer to figure out what I could do about it. Everyone's simply wandering around the internet thinking that everything's fine. IT'S NOT!

Anyway. Open Terminal (Terminal.app) and run this;

```zsh
defaults write -g NSRequiresAquaSystemAppearance -bool No
```


This was the command that we used in Mojave to toggle dark mode on/off for individual apps. 

You'll have to log off and log back in for it to work as well.

If it doesn't work, then I don't have a damn clue - sorry.