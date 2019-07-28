---
title: Face Detection in images using OpenCV and Python
layout: post
date: '2011-09-11 09:12:23 +1300'
categories: code python
---

> **This is a very old article I wrote for my last blog Spottedsun.com** I hope to write another, more up-to-date one soon.

I hacked together this basic script to detect faces in images using OpenCV, Python, Web.py and ImageMagick. It’s a fun wee learning experience.

At the moment it tries to replace a face with an image. Some more tweaking, and it should be good to go. 

To run it:

{% gist 8b5112746feafdb0c3a1121bc5033183 %}

There are quite a few things you'll need to change to get it working as well, such as the paths etc.

There are some problems – it doesn’t like bitmap (*.BMP) nor cartoon type images. Here are some examples of images that worked:

![John Key](https://i.imgur.com/g2SpDS1.png)



![John Key Derp](https://i.imgur.com/pdwr7zI.png)