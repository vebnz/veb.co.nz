---
layout: post
title:  "Automatically take screenshots every few seconds from video"
date:   2012-09-17 13:12:23 +1300
categories: code social
---
A simple trick I’ve used for Facebook and other bits of social media is to take a whole bunch of still images and upload them for people to admire. (it generally works really well)

Make sure you’ve got [mplayer](https://web.archive.org/web/20150327082835/http://www.mplayerhq.hu/design7/news.html) installed and you’ll be on your way in no time.

```
mplayer -vo jpeg -sstep 5 some_file.avi
```

This simple command when run in CLI will create an image every 5 seconds, however because there’s no end specified it will keep taking pictures of the last frame.

To fix this we find the length of the video minus two. For example, our video is 144 seconds long, and subtracting 2 seconds will give us 142 seconds which we then use to inform mplayer when to stop taking shots.

```
mplayer -vo jpeg -sstep 5 -endpos 142 some_file.avi
```



Once this has finished, you will have a directory full of still shots taken every 5 seconds.

Mess around, and play with mplayer as it’s not in abundance of fun tricks!

You can see a demonstration on [Dirk Gently Facebook](https://web.archive.org/web/20150327082835/http://www.facebook.com/DirkGentlyBBC/photos_stream).

f you want to try this trick with MKV files, I found that changing jpeg to png works!