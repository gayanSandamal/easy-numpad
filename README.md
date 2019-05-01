# easy-numpad
A Fork form an original project by [Gayan Sandamal](https://github.com/gayanSandamal/easy-numpad).

I'm modifying the code to use only Javascript without external frameworks (_no JQuery required_), in order to improve compatibility with all browsers and improve performance.

**Added a new feature**, when selecting an input field already valued, the value is also shown in the easy-numpad that opens.

# How to use
Simple add this code where you need, every time you need in your HTML page:
```
<input id="yourElementId" type="number" readonly="true" onclick="show_easy_numpad(this);" />
```
you need only to replace "yourElementId" with the specific ID of your control.

If you need to set a default value, just value the "value" property of the element, as shown in the following example where 125 is the default value:
```
<input id="yourElementId" type="number" value="125" readonly="true" onclick="show_easy_numpad(this);" />
```

# Try it

[Live example of use it](https://bobboteck.github.io/easy-numpad/index.html)

# Next steps
Now, after use this control, I think to add same other feature:

- Validation of the number entered
- Enter the 0 automatically if the point is pressed first

For every suggestion you can contact me.