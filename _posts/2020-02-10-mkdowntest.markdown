---
layout: post
title:  "Markdown test"
date:   2020-02-10 20:10:34 +1300
categories: fastlane react-native code production
---

{% highlight react %}
document.write("JavaScript is a simple language for javatpoint learners");

import React, { Component } from "react";
import { GLSL, Node, Shaders } from "gl-react";
import { Camera } from "expo-camera";
import "webgltexture-loader-expo-camera";
import { AppState } from "react-native";

const shaders = Shaders.create({
  YFlip: {
    // NB we need to YFlip the stream
    frag: GLSL`
precision highp float;
varying vec2 uv;
uniform sampler2D t;
void main(){
  gl_FragColor=texture2D(t, vec2(1.0-uv.x, 1.0 - uv.y));
}`
  }
});

{% endhighlight %}