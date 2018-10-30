# Usage
First create an account in the [Nuance Developers](https://developer.nuance.com/public/index.php?task=register) site. Then open your account and find the **URL** and **APP_KEY** for your account. Add those to ```config.xml``` and ```package.json```

Run on a device to test.

# Quirks
## IOS
When running TTS on IOS device, when Voice is null, then Languages default voice is used. When Voice is not null, **the Language field is ignored and Voice default language is used instead!** 
