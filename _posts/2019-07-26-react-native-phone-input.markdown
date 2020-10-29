---
title: React Native Phone Input with formatting and Hooks!
layout: post
date: '2019-07-26 09:12:23 +1300'
categories: code react
---

I recently  decided to move away from `react-native-phone-input` ([Github link](https://github.com/thegamenicorus/react-native-phone-input "react-native-phone-input link to GitHub for looking at the library")) because I just found it too annoying and it seemed like such an easy thing to remake with some Hooks. It was!  :sweat_smile:

Although I don't have the same features as the aforementioned library, it works well enough for me, and over time I can improve on it according to my needs.

I thought it might be a good idea to post it here in case anyone else would like to use it.

{% highlight react %}
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
{% endhighlight %}


This was written for my app, that will be New Zealand based (when it's launched) that's why I added the NZ flag and hard coded the `+64` country code.

I am also using `formatNumber` from `libphonenumber-js` library ([Github link](https://github.com/catamphetamine/libphonenumber-js "GitHub link to formatNumber function from libphonenumber-js library")) to format the number AFTER the user enters their phone number.

Here's a small gif of it working:

![A gif showing a user entering a phone number and showing it format after they leave the textfield](https://i.imgur.com/zWXDjyu.gif "A gif showing a user entering a phone number and showing it format after they leave the textfield")


If you put the above in your *components* directory, you can include it:

{% highlight react %}
  <PhoneInput
    placeholder='Mobile Number'
    onChange={this.onChangePhoneInput} />
{% endhighlight %}


Then within the screen that you want to display your phone input:

{% highlight react %}
  <PhoneInput
    placeholder='Mobile Number'
    onChange={this.onChangePhoneInput} />
{% endhighlight %}


My `onChangePgoneInput` is as simple as you thought:

{% highlight react %}
  onChangePhoneInput = (value) => {
    this.setState({
      phoneInput: value,
    })
  }
{% endhighlight %}

Of course, to do what I've done (for confirming your mobile number), you just add another `PhoneInput` component, but with a different `onChange`.

There are quite a few things that is missing from this code, but the idea of me posting it was so you could have a "skeleton" so that you can then add your neccessary functionality to. An example here, would be to show a checkmark :heavy_check_mark: after entering the first one (if it's a correct number from `formatNumber`) and then if they enter the wrong number in the second input, you would show an :x:

I do find quite often it's far easier to make your own components rather than trying to hack existing ones to work how you want them to, and with [React Hooks](https://reactjs.org/docs/hooks-intro.html "Introduction to React Hooks")… it's becoming far easier to take a bloated library from npm or GitHub and convert it into something tiny. 

Have fun. :smile: