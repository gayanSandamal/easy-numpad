# Easy Numpad
Easy Numpad is a pure HTML+JS+CSS control to implement a Numeric Pad in your HTML page, to be associated in a very simple way with any text field.

![easy-numpad](https://repository-images.githubusercontent.com/184239909/d8d16880-6dc8-11e9-8290-366ce2f82d03)

Based on a Fork from an original project by [Gayan Sandamal](https://github.com/gayanSandamal/easy-numpad).

I'm modifying the code to use only Javascript without external frameworks (_no JQuery required_), in order to improve compatibility with all browsers and improve performance.

# Try it

You can see a live example of use [in this page](https://bobboteck.github.io/easy-numpad/index.html).

# How to use in your page
Simple add this code where you need, every time you need in your HTML page:
```
<input id="yourElementId" type="number" readonly="true" onclick="show_easy_numpad(this);" />
```
you need only to replace "yourElementId" with the specific ID of your control.

If you need to set a default value, just value the "value" property of the element, as shown in the following example where 125 is the default value:
```
<input id="yourElementId" type="number" value="125" readonly="true" onclick="show_easy_numpad(this);" />
```

# Added a new feature
A list of new features implemented respect to the original:

- When selecting an input field already valued, the value is also shown in the easy-numpad that opens
- Added a "±" button to type negative numbers, and now only a "-" sign can be inserted in the head of number
- Enter the "0" automatically if the "." is pressed first
- Enter the "." automatically if the "0" is pressed first
- ~~Validation of the number entered~~ implicit validation with the controls made on the insertion

# Next feature
List of planned new features (more info at [Project page](https://github.com/bobboteck/easy-numpad/projects/1)):

- Manage the insertion of an excessive number of characters
- ...

## Request feature o bug fixing
If you need an unexpected functionality or if you want to report a bug, open an [Issue](https://github.com/bobboteck/easy-numpad/issues) indicating your request.
