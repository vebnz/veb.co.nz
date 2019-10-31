---
layout: post
title:  "Pod install not working on macOS Catalina?"
date:   2019-10-20 19:17:23 +1300
categories: iphone error react-native ruby Xcode catalina macOS code
---

## Pod problems… again.

**Just remember, USE the workspace version of xcode**

*See the end for my conclusion first, before going through my horrible process that aged me 5 billion years.*

If you run into this error: 

```
Error:  System/Library/Frameworks/Ruby.framework/Versions/2.3/usr/bin/ruby:

  bad interpreter: No such file or directory

```

All you need to do is run:
`sudo gem install -n /usr/local/bin cocoapods `

If that doesn't help then continue reading...

The issue that arose as I was having to build from Xcode to my iPhone was:
`Library not found for -lBase64`

Okay. Maybe it's got something to do with my Xcode not being the latest version… perhaps I need `Xcode 11.1`

So I went into the Apple Appstore and updated Xcode… which wouldn't update.

They thoughtfully gave me this instead of updating Xcode for me: 

![alt text](https://i.imgur.com/goRNjjU.png "FFS Apple- why can't you just WORK?!")



So then I angrily deleted Xcode and then went to try download it via appstore, and it just kept telling me to login.

Fortunately, you can download it directly from Apple, [Apple Download](https://developer.apple.com/download/more/)

![alt text](https://i.imgur.com/iN9Fka6.png "Downloading xcode from Apple")


After the download is finished, it will take approximately 5 million years to verify, then it'll take 160 million years to expand the `Xcode.app`. Once done, move into your `Applications` directory. 

Open and it'll ask you to install some additional components, but that only took 2 years, so that was good.

Go back to your project, and run again (I'm trying to get the React-Native app on my iPhone)

Guess what? That didn't work either. Keeps crying about:

```
Directory not found for option '-L/Users/mike/Library/Developer/Xcode/DerivedData/blah-dhvqffposgnfddauwtuhbxzbhlpr/Build/Products/Debug-iphonesimulator/Base64'
```




Sigh. So I threw the computer out the window. But not really. 

At the bottom of the "bunch of errors", the last one was a 'FileBrowser' - so I removed it from my build targets, and it ran without errors.

![alt text](https://i.imgur.com/4XomjJV.png "Freaking ERRRRRRRORS EVERYWHEREEEEEE")

Then I clicked `Automatic Signing` because that's for dev after all (I use FastLane for pushing to appstore/testflight).

It finally worked, and loaded on my phone. So… now I have to figure out what was using the package that I removed from my targets. Eh, easier than this bloody process!

Hope this helps any internet strangers who had the same issue(s). My conclusion is you probably don't have to update Xcode, but find the target/package that's being a bum.

Have fun folks!



