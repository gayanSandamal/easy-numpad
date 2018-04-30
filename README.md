# easy-numpad
jQuery based soft number pad which is developed use and customize easily

<h3><a href="http://plugins.nayague.com/easy-numpad/" target="_blank">Live example<a/></h3>

* Single element usage.

1. Add "easy-get" class name where you click to get soft number pad.
    example - <div class="easy-get"></div>

2. Add "easy-put" class name where you want to show result.
    example - <input type="text" class="easy-put"/>

* * Mulitple element usage.

1. Call below function in any function with any parameter you want.
    show_easy_numpad();

    example -  

    function quantity(x, y, z) {
        show_easy_numpad(x);
    }