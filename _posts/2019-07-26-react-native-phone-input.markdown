---
layout: post
title:  "React Native Phone Input with formatting and Hooks!"
date:   2019-07-26 09:12:23 +1300
categories: code react
---
I recently  decided to move away from `react-native-phone-input` ([Github link](https://github.com/thegamenicorus/react-native-phone-input)) because I just found it too annoying and it seemed like such an easy thing to remake with some Hooks. It was!  :sweat_smile:

Although I don't have the same features as the aforementioned library, it works well enough for me, and over time I can improve on it according to my needs.

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


This was written for my app, that will be New Zealand based (when it's launched) that's why I added the NZ flag and hard coded the `+64` country code.

I am also using `formatNumber` from `libphonenumber-js` library ([Github link](https://github.com/catamphetamine/libphonenumber-js )) to format the number AFTER the user enters their phone number.

Here's a small gif of it working:

![A gif of my code](https://i.imgur.com/zWXDjyu.gif)


If you put the above in your *components* directory, you can include it:

```react
import PhoneInput from 'app/components/PhoneInput';
```


Then within the screen that you want to display your phone input:

```react
<PhoneInput
  placeholder='Mobile Number'
  onChange={this.onChangePhoneInput} />
```


My `onChangePgoneInput` is as simple as you thought:

```react
onChangePhoneInput = (value) => {
  this.setState({
    phoneInput: value,
  })
}
```



Of course, to do what I've done (for confirming your mobile number), you just add another `PhoneInput` component, but with a different `onChange`.

There are quite a few things that is missing from this code, but the idea of me posting it was so you could have a "skeleton" so that you can then add your neccessary functionality to. An example here, would be to show a checkmark :heavy_check_mark: after entering the first one (if it's a correct number from `formatNumber`) and then if they enter the wrong number in the second input, you would show an :x:.

I do find quite often it's far easier to make your own components rather than trying to hack existing ones to work how you want them to, and with [React Hooks](https://reactjs.org/docs/hooks-intro.html)… it's becoming far easier to take a bloated library from npm or GitHub and convert it into something tiny. 

Have fun. :smile:

