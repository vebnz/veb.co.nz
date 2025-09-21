---
layout: post
title: "How to Cancel Ubisoft+ When They Hide the Cancel Button"
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
<img width="800" height="332" alt="Ubisoft subscription page showing hidden cancel button" src="https://github.com/user-attachments/assets/bc093f42-6683-4aaf-beed-721ef07ea3a5" style="max-width: 100%; height: auto;" />

<a href="https://github.com/user-attachments/assets/0aec3be3-4111-45cf-9d92-06b5d59b402e">View full size screenshot</a>

But instead of a "Cancel" button, they only show "Manage my payment method". Absolute cowboys:

<img width="800" height="332" alt="Ubisoft subscription page showing hidden cancel button" src="https://github.com/user-attachments/assets/b8bed0f8-d374-4b98-898d-77b15eb007aa" style="max-width: 100%; height: auto;" />

There's a wee trick though. Open your browser console (devtools, F12) and chuck this in:
```javascript
document.querySelector('form[name="dwfrm_subscriptioncancellation"]').submit();
```

You may have to write `allow pasting` for Chromium browsers (I used Brave).

I actually did something like:
```javascript
const form = document.querySelector('form[name="dwfrm_subscriptioncancellation"]');
if (form) {
    form.submit();
}
```

That'll force the form to submit even though they've hidden the cancel button. This will work if you have other buttons, no buttons - whatever they try, this should work.

This kind of crap is probably illegal under the Fair Trading Act in NZ, so you could always file another complaint with the Commerce Commission if you're feeling motivated.

Pretty ridiculous that we have to resort to browser hacks just to stop paying for something we don't want.
