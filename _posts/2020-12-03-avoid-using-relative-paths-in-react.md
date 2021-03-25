---
layout: post
title:  "How to avoid using relative path imports in create-react-app"
date:   2020-12-05 18:10:34 +1300
categories: react create-react-app code tip vscode
author: "Mike Mackenzie"
---

# How to avoid using relative path imports

### Like (/../../../public/assets/SVG/bob.svg)

This project I'm doing at the moment was created with `create-react-app` and uses `nextjs` and I use Visual Studio Code (vscode).

It's pretty simple. Say your directory list looks like this (you may not yet have a `.env ` file)

![image of my directory structure](https://i.imgur.com/agcU257.png)

Here's the problem:

```react
import ShrubLogo from "../../../public/assets/SVG/shrbgrasslesslogo.svg";
```

It looks crappy and It's harder to read. Instead why don't we create an `.env` file (as seen in my screenshot above), and put in:

```bash
PUBLIC_PATH=public
```


From now on when you want to reference something from the public directory all you need to do is:

```react
import ShrubLogo from "public/assets/SVG/shrbgrasslesslogo.svg";
```

Makes it much easier to read and to code.



The other option, and the option that may have superseded in the above (**but make sure you have vscode**) by making sure you have a:

`jsconfig.json` file and making sure it has:

```react
{
  "compilerOptions": {
    "baseUrl": "."
  }
}
```

If you choose this option, then everything will have root level import.


Another trick is that if you want to get fancy is by doing this:

```react
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@components/*": [
        "src/components/*"
      ]
    }
  }
}
```

Then you can do:

```react
import { Layout } from "@components/layout";
```

instead of

```react
import { Layout } from "src/components/layout";
```



There's so many options and tricks to use out there for this sort of thing, but for the last half of this small post, you can read more about what you can do with `jsconfig.json` at [https://code.visualstudio.com/docs/languages/jsconfig](https://code.visualstudio.com/docs/languages/jsconfig)
