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
var operatorPressed = document.querySelector(".operator");
var equals = document.querySelector('#equals');
var clear = document.querySelector('#clear');
var pressedNum = document.querySelector(".btn-calc").value;

function press(element) {
    var pressedNum = document.querySelector(".btn-calc").value += element;
    displayDiv.innerHTML = pressedNum;
    console.log(pressedNum);
}
