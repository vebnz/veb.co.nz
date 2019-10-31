---
layout: post
title:  "Fastlane not working on macOS Catalina?"
date:   2019-10-23 07:59:34 +1300
categories: fastlane react-native
---

## Easy fix.

Whenever I tried to run the `fastlane` command, I was greeted with:

```bash
Traceback (most recent call last):
	8: from /Users/mike/gems/bin/fastlane:23:in `<main>'
	7: from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems.rb:303:in `activate_bin_path'
	6: from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems.rb:303:in `synchronize'
	5: from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems.rb:304:in `block in activate_bin_path'
	4: from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems/specification.rb:1420:in `activate'
	3: from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems/specification.rb:1438:in `activate_dependencies'
	2: from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems/specification.rb:1438:in `each'
	1: from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems/specification.rb:1449:in `block in activate_dependencies'
/System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems/dependency.rb:311:in `to_specs': Could not find 'slack-notifier' (>= 2.0.0, < 3.0.0) among 146 total gem(s) (Gem::MissingSpecError)
Checked in 'GEM_PATH=/Users/mike/.gem/ruby/2.6.0:/Library/Ruby/Gems/2.6.0:/Users/mike/gems:/System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/gems/2.6.0', execute `gem env` for more information
```





An easy fix to this is simply to reinstall/upgrade `fastlane` by running `sudo gem install fastlane -NV`

Thar she blows! It's always a panicky situation when you're trying to push something out the door and you're greeted with such an error, it sucks but that's our job!

Hope this helps someone.