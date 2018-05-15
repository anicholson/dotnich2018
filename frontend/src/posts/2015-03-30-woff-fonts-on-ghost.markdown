---
layout: post
title: "Fixing broken Web Fonts on Ghost"
date: 2015-03-30 16:55:58 +1100
comments: true
categories: 
  - Ghost
  - webfonts
  - troubleshooting
---
# Troubleshooting Webfonts on Ghost

While getting the [Cogent Blog](http://blog.cogent.co/) up and running recently, I ran into a strange issue with the [Ghost](http://ghost.io/) blogging platform and WebFonts - hopefully this will save you some pain.

We use a couple custom fonts on the blog, defining them using the CSS<wbr>[`@font-face directives`](https://developer.mozilla.org/en/docs/Web/CSS/@font-face). One font was worked fine, but the other consistently failed to show up.

# What the WOFF?
For the font that didn't work, the browser received a 303 redirect to the same URI, but with a trailing slash. The font that worked was served just fine.

It turned out the "broken" font was in WOFF format, and the one that worked was in WOFF2 format. This wouldn't normally make any difference, but something was definitely odd. Our blog is hosted on [Ghost.io](http://ghost.io/) too, so troubleshooting options were limited.

# Tricksy MIME Types

The <s>solution</s> workaround turned out to be really simple:

> Rename the broken font's extension from **`.woff`** to **`.woff2`**, and fix the paths in the CSS.

I'm not sure exactly why this works. Maybe it's to do with Ghost's routing rules – or maybe it's the fault of Ghost's CDN. Either way, hopefully this solves you some head-scratching if your fonts aren't working as you expect.