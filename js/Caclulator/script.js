console.log("we are working");


// var displayDiv = document.querySelector("#display");
// var pressedNum = "";
// pressNum += document.querySelector(".btn-calc");;
 
// function press(element) {
//     displayDiv.innerText = pressedNum;
//     console.log(displayDiv)
//    var containsElements = "" + element;
// //    console.log((displayDiv.innerHTML)*10 + element);
//     displayDiv.innerText = containsElements;
//     var current = "" + displayDiv.innerHTML;
//     var temp = current*10 +element;
//     current = temp;
//     // console.log(temp);
//     console.log(current);
// }
// displayDiv.innerText = current;
// console.log(current);
// function press(element) {
//     if (displayDiv === '0') {
//         displayDiv.innerText = pressedNum; 
//         console.log(displayDiv)
//     }
//     else {
//         console.log("not working")
//     }
// }



var displayDiv = document.querySelector('#display');
var equals = document.querySelector('#equals');
var pressedNum = document.querySelector(".btn-calc").value;
var total = 0; 

function press(element) {
    var pressedNum = document.querySelector(".btn-calc").value += element;
    displayDiv.innerHTML = pressedNum;
    console.log(pressedNum);
    
}        

function calculate() {
    let x = displayDiv.innerHTML;
    let y = eval(x);
    document.querySelector('#display').value = y;
    console.log(y);
    displayDiv.innerHTML = y;
}    

function clr() {
    let pressedNum = displayDiv.innerHTML;
    let clear = pressedNum;
    console.log(clear);
    displayDiv.innerHTML = " ";
}
