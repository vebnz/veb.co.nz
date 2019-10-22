---
layout: post
title:  "Can't insert emojis on macOS Catalina?"
date:   2019-10-23 07:59:34 +1300
categories: macOS catalina
---

## Can't insert emojis on macOS Catalina?

I had an issue where pressing option + ctrl + spacebar would bring up the emoji menu. However it would not let me insert it into whatever text I wanted (I like putting emojis everywhere in my code when debugging).

In `Terminal.app`

```bash
rm -rf ~/Library/Preferences/com.apple.CharacterPaletteIM.plist
rm -rf ~/Library/Preferences/com.apple.CharacterPicker.plist
```



You could probably move them (as a backup if you so wished):

```bash
mv ~/Library/Preferences/com.apple.CharacterPaletteIM.plist_backup
mv ~/Library/Preferences/com.apple.CharacterPicker.plist_backup
```



Now reboot.

And have fun emoji spamming everyone. 😇