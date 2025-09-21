---
layout: post
title: "How to Cancel Ubisoft+ When They Hide the Cancel Button (NZ Guide)"
date: 2025-09-20 14:30:00 +1300
categories: consumer-rights tutorials
tags: ubisoft-plus cancel-subscription consumer-rights tutorials new-zealand dark-patterns
author: "Mike Mackenzie"
description: "Ubisoft makes it nearly impossible to cancel subscriptions by hiding the cancel button. Here's how to force cancellation using browser dev tools."
---

### Ubisoft's dodgy cancellation tricks (and how to beat them)

I wanted to cancel my Ubisoft+ subscription because I haven't touched it in ages, and of course they've made it as painful as possible.

The cancellation form exists - I can see it right there in the HTML:
```html
<form action="https://store.ubisoft.com/anz/subscription-cancellation?lang=en_NZ" method="post">
```
<img width="2344" height="1376" alt="Screenshot 2025-09-22 at 6 21 52 AM" src="https://github.com/user-attachments/assets/0aec3be3-4111-45cf-9d92-06b5d59b402e" />

But instead of a "Cancel" button, they only show "Manage my payment method". Absolute cowboys.

There's a wee trick though. Open your browser console (devtools, F12) and chuck this in:
```javascript
document.querySelector('form[name="dwfrm_subscriptioncancellation"]').submit();
```

You may have to write `allow pasting`

I actually did something like:
```javascript
const form = document.querySelector('form[name="dwfrm_subscriptioncancellation"]');
if (form) {
    form.submit();
}
```

That'll force the form to submit even though they've hidden the cancel button.

This kind of crap is probably illegal under the Fair Trading Act in NZ, so you could always file another complaint with the Commerce Commission if you're feeling motivated.

Pretty ridiculous that we have to resort to browser hacks just to stop paying for something we don't want.
