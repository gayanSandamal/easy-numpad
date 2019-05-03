let _outputID = "";

function show_easy_numpad(thisElement)
{
    let easy_numpad = document.createElement("div");
    easy_numpad.id = "easy-numpad-frame";
    easy_numpad.className = "easy-numpad-frame";
    easy_numpad.innerHTML = `
    <div class="easy-numpad-container">
        <div class="easy-numpad-output-container">
            <p class="easy-numpad-output" id="easy-numpad-output"></p>
        </div>
        <div class="easy-numpad-number-container">
            <table>
                <tr>
                    <td><a href="7" onclick="easynum(this)">7</a></td>
                    <td><a href="8" onclick="easynum(this)">8</a></td>
                    <td><a href="9" onclick="easynum(this)">9</a></td>
                    <td><a href="Del" class="del" id="del" onclick="easy_numpad_del()">Del</a></td>
                </tr>
                <tr>
                    <td><a href="4" onclick="easynum(this)">4</a></td>
                    <td><a href="5" onclick="easynum(this)">5</a></td>
                    <td><a href="6" onclick="easynum(this)">6</a></td>
                    <td><a href="Clear" class="clear" id="clear" onclick="easy_numpad_clear()">Clear</a></td>
                </tr>
                <tr>
                    <td><a href="1" onclick="easynum(this)">1</a></td>
                    <td><a href="2" onclick="easynum(this)">2</a></td>
                    <td><a href="3" onclick="easynum(this)">3</a></td>
                    <td><a href="Cancel" class="cancel" id="cancel" onclick="easy_numpad_cancel()">Cancel</a></td>
                </tr>
                <tr>
                    <td><a href="±" onclick="easynum(this)">±</a></td>
					<td ><a href="0"onclick="easynum(this)">0</a></td>
                    <td><a href="." onclick="easynum(this)">.</a></td>
                    <td><a href="Done" class="done" id="done" onclick="easy_numpad_done()">Done</a></td>
                </tr>
            </table>
        </div>
    </div>
    `;

    document.getElementsByTagName('body')[0].appendChild(easy_numpad);
    _outputID = thisElement.id;
    document.getElementById("easy-numpad-output").innerText = thisElement.value;
}

function easy_numpad_close()
{
    let elementToRemove = document.querySelectorAll("div.easy-numpad-frame")[0];
    elementToRemove.parentNode.removeChild(elementToRemove);
}

function easynum(thisElement)
{
    event.preventDefault();
    let buttonValue = "";

    switch(thisElement.innerText)
    {
        case "±":
            let currentValue = document.getElementById("easy-numpad-output").innerText;
            if(currentValue.startsWith("-"))
            {
                document.getElementById("easy-numpad-output").innerText = currentValue.substring(1,currentValue.length);
            }
            else
            {
                document.getElementById("easy-numpad-output").innerText = "-" + currentValue;
            }
        break;

        default:
            document.getElementById("easy-numpad-output").innerText += thisElement.innerText;
        break;
    }
}

function easy_numpad_del()
{
    event.preventDefault();
    let easy_numpad_output_val = document.getElementById("easy-numpad-output").innerText;
    var easy_numpad_output_val_deleted = easy_numpad_output_val.slice(0, -1);
    document.getElementById("easy-numpad-output").innerText = easy_numpad_output_val_deleted;
}

function easy_numpad_clear()
{
    event.preventDefault();
    document.getElementById("easy-numpad-output").innerText="";
}

function easy_numpad_cancel()
{
    event.preventDefault();
    easy_numpad_close();
}

function easy_numpad_done() 
{
    event.preventDefault();
    let easy_numpad_output_val = document.getElementById("easy-numpad-output").innerText;
    document.getElementById(_outputID).value=easy_numpad_output_val;
    easy_numpad_close();
}