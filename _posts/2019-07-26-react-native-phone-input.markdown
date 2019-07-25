---
layout: post
title:  "React Native Phone Input with formatting and Hooks!"
date:   2019-07-26 09:12:23 +1300
categories: code
---
The other week I decided to move away from `react-native-phone-input` ([Github link](https://github.com/thegamenicorus/react-native-phone-input)) because I just found it too annoying, and it seemed like such an easy thing to do. It was! 

Although I don't have the same features as the forementioned library, it works well enough for me, and over time I can improve on it according to my needs.

I thought it might be a good idea to post it here in case anyone else would like to use it.

```js
import React, { useState, useEffect } from 'react'
import { formatNumber } from "libphonenumber-js";
import { Image, View, TextInput } from 'react-native';

const App = ({ placeholder, onChange, confirm }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    let tempPhone = phoneNumber.replace(/\+/g, '');
    let removeSpaces = tempPhone.replace(/ /g, '');

    onChange(removeSpaces)
  }, [phoneNumber, onChange])

  const onBlur = () => {
    const formattedNumber = formatNumber(`+64${phoneNumber.replace(/^\+64/, "")}`, "International")
    setPhoneNumber(formattedNumber);
  };

  return (
    <View row>
      <Image
        source={require('app/images/flags/nz.png')}
        style={{ height: 20, width: 30, borderRadius: 2, borderWidth: 0.5, marginRight: 4 }}
      />
      <TextInput
        onBlur={onBlur}
        onChangeText={setPhoneNumber}
        placeholder={placeholder}
        hideUnderline
        value={phoneNumber}
        keyboardType={'phone-pad'} />
    </View>
  )


}

export default App;
```


This was written for my app, that will be New Zealand based (for now) that's why I added the NZ flag and hard coded the `+64` country code.

I am also using `libformat` library ([Github link](https://github.com/catamphetamine/libphonenumber-js )) to format the number AFTER the user enters their phone number.

Here's a small gif of it working:

![A gif of my code](https://i.imgur.com/zWXDjyu.gif)

If you've noticed `react-native-ui-lib` you don't need to use that, just grab the `View`, `Image`, and `TextInput` from `React` instead. I just love `react-native-ui-lib` :)

Have fun!
