import { Stack } from './Stack.js';

document.onkeydown = function(event) {
    if (event.ctrlKey || event.metaKey) {
        event.preventDefault();
    }
};



onload = function () {
    // Get reference to elements
    const textbox = document.getElementById('comment');
    const undo = document.getElementById('undo');
    const clear = document.getElementById('clear');
    const temptext1 = document.getElementById('temptext1');
    const temptext2 = document.getElementById('temptext2');
    const increase = document.getElementById('increase');
    const decrease = document.getElementById('decrease');
    const colour = document.getElementById('color');

    textbox.value = "";
    let text = "";
    let stack = new Stack();

    textbox.onclick = function () {
        textbox.selectionStart = textbox.selectionEnd = textbox.value.length;
    };

    clear.onclick = function () {
        stack.clear();
        text = "";
        textbox.value = "";
        temptext1.innerHTML = "Sequence of stack 0";
        temptext2.innerHTML = "Sequence of stack 1";
    };

    textbox.oninput = function(event){
        // console.log(event);
        switch(event.inputType){
            case "insertText":
                stack.push(0, event.data);
                temptext1.innerHTML = "On stack "+stack.top()+"<br>"+temptext1.innerHTML;
                break;
            case "deleteContentBackward":
                stack.push(1, text[text.length-1]);
                temptext2.innerHTML = "On stack "+stack.top()+"<br>"+temptext2.innerHTML;
                break;
        }

        text = textbox.value;
    };


    undo.onclick = function () {
        let operation = stack.pop();
        if(operation[0]!==-1){
            // temptext1.innerHTML = "Performing undo operation<br>"+temptext1.innerHTML;
            if(operation[0] === 0){
                let len = operation[1].length;
                textbox.value = textbox.value.substring(0,textbox.value.length-len);
            } else{
                textbox.value += operation[1];
            }
            text = textbox.value;
        }
    };

    //------------font size------------

    // Get the text box element
var textBox = document.getElementById("comment");

// Define the initial font size
var fontSize = 16;

// Function to increase the font size
increase.onclick = function () {
  fontSize += 2;
  textBox.style.fontSize = fontSize + "px";
}

// Function to decrease the font size
decrease.onclick = function () {
  fontSize -= 2;
  textBox.style.fontSize = fontSize + "px";
}




//------------color------------

// Define the rainbow colors as an array
var rainbowColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "white", "black"];

// Define the initial color index
var colorIndex = 0;

// Function to change the text box color to the next rainbow color
colour.onclick = function () {
  colorIndex = (colorIndex + 1) % rainbowColors.length;
  textBox.style.color = rainbowColors[colorIndex];
  colour.style.backgroundColor = rainbowColors[colorIndex]
  colour.style.color = rainbowColors[colorIndex-1]
}




};


  
