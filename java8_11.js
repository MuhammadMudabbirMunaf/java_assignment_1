var firstName = prompt("Please enter your name");
if (firstName === "mudabbir") {
  alert("Hi, Mudabbir ! How are you..");
} 

var mulTable = prompt("Enter a number to print its multiplication table");
if (mulTable === "6") {
    document.write("Multiplication Table of 6 <br/> 6 x 1 = 6 <br/> 6 x 2 = 12 <br/> 6 x 3 = 18 <br/> 6 x 4 = 24 <br/> 6 x 5 = 30 <br/> 6 x 6 = 36 <br/> 6 x 7 = 42 <br/> 6 x 8 = 48 <br/> 6 x 9 = 54 <br/> 6 x 10 = 60 <br/><br/>");
}

var city = prompt("Please enter your city");
if (city === "islamabad") {
    alert("Welcome to Capital of Pakistan..");
}

var gender = prompt("Please enter your gender");
if (gender === "male") {
    alert("Good Morning! Sir");
}
if (gender === "female") {
    alert("Good Morning! Ma'am");
}

var signalColor = prompt("Enter one color of signal");
if (signalColor === "red") {
    alert("vehicles must stop");
}
if (signalColor === "yellow") {
    alert("vehicles should get ready to move");
}
if (signalColor === "green") {
    alert("vehicles can move now");
}

var currentAge = prompt("Enter your Current Age");
if (currentAge <= "60") {
    alert("You are welcome!!");
}

var remFuel = prompt("Enter Remaining Fuel of your car");
if (remFuel <= "0.25") {
    alert("Please refill the fuel in your car");
}

// var a = 4;
// if (++a === 5){
//  alert("given condition for variable a is true");
// }

// var b = 82;
// if (b++ === 83){
//  alert("given condition for variable b is true");
// }

// var c = 12;
// if (c++ === 13){
//  alert("condition 1 is true");
// }
// if (c === 13){
//     alert("condition 2 is true");
// }
// if (++c < 14){
//     alert("condition 3 is true");
// }
// if(c === 14){
//     alert("condition 4 is true");
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
//  alert("The cost equals");
// }

// if (true){
//     alert("True");
// }
//    if (false){
//     alert("False");
// }

// if("car" < "cat"){
//     alert("car is smaller than cat");
// }
document.write("statement a is displayed <br/> statement b is not displayed <br/> statement c, condition 2 and 4 are displayed <br/> statement d is displayed <br/> statement e, condition 1 is displayed <br/> statement f is displayed <br/> <br/>");

// var Percentage = prompt("Enter your percentage.");
// if (Percentage >= "80"){
//     document.write("Grade : A-one <br/> Remarks : Excellent <br/>");
// }
// if (Percentage > "70" + Percentage <= "80"){
//     document.write("Grade : A Remarks : Good <br/>");
// }
// if (Percentage > "60" + Percentage <= "70"){
//     document.write("Grade : B Remarks : You need to improve <br/>");
// }
// if (Percentage <= "60" + Percentage > "0"){
//     document.write("Grade : Fail Remarks : Sorry <br/>");
// }

document.write("<h3>Marks Sheet</h3><br/>");
document.write("Total Marks = 1000<br/> Marks Obtained = 880 <br/> Percentage = 88% <br/> Grade = A-one <br/> Remarks = Excellent <br/><br/>");

alert("Shopping cart system!!!!");
document.write("<h3>shopping cart system!!!!</h3><br/>");
var itemOne = prompt("enter your first product");
if (itemOne === "shirt") {
    document.write("Name of item one : shirt(s)<br/>");
}

var itemTwo = prompt("enter your second product");
if (itemTwo === "pant") {
    document.write("Name of item second : pant(s)<br/>");
}

var itemOnePrice = prompt("enter your first product price");
if (itemOnePrice === "1000") {
    document.write("Price of item one : 1000<br/>");
}

var itemTwoPrice = prompt("enter your second product price");
if (itemTwoPrice === "1500") {
    document.write("Price of item two : 1500<br/>");
}

var itemOneQuantity = prompt("enter your first product quantity");
if (itemOneQuantity === "2") {
    document.write("Ordered quantity of item one : 2<br/>");
}

var itemTwoQuantity = prompt("enter your second product quantity");
if (itemTwoQuantity === "3") {
    document.write("Ordered quantity of item two : 3<br/>");
}

var totalItemOne = itemOnePrice * itemOneQuantity
var totalItemTwo = itemTwoPrice * itemTwoQuantity
var total = totalItemOne + totalItemTwo

document.write("Total Amount : " + total + "<br/><br/>");

document.write("<h2>Guess Game </h2><br/>");
var guess = prompt("Guess a number from 1 to 10");
if (guess === "7") {
    alert("Bingo! Correct answer")
    document.write("Bingo! Correct answer<br/>")
}
if (guess === "6") {
    alert("Close enough to the correct answer")
    document.write("Close enough to the correct answer<br/>")
}
if (guess === "8") {
    alert("Close enough to the correct answer")
    document.write("Close enough to the correct answer<br/>")
}

document.write("<h2>Number divisible by 3 or not</h2><br/>");
var divisible = prompt("enter a number from 1 to 10");
if (divisible === "3") {
    alert("divisible by 3");
    document.write("divisible by 3<br/>");
}
if (divisible === "6") {
    alert("divisible by 3");
    document.write("divisible by 3<br/>");
}
if (divisible === "9") {
    alert("divisible by 3");
    document.write("divisible by 3<br/>");
}

var teamOne = prompt("Match between Tigers and Panthers");
if (teamOne === "1") {
    alert("Panthers won");
}
if (teamOne === "5") {
    alert("Tigers won");
}
if (teamOne === "3") {
    alert("Tie among Tigers and Panthers");
}

var string = "Pakistan";
    alert("Pakistan is a string");

var number = "400";
    alert("400 is a number");

var boolean = "false";
    alert("False is a boolean.");

var even = prompt("check even or odd");
if (even === "2") {
    alert("it is an even number");
}
if (even === "4") {
    alert("it is an even number");
}
if (even === "6") {
    alert("it is an even number");
}
if (even === "8") {
    alert("it is an even number");
}
if (even === "1") {
    alert("it is an odd number");
}
if (even === "3") {
    alert("it is an odd number");
}
if (even === "5") {
    alert("it is an odd number");
}
if (even === "7") {
    alert("it is an odd number");
}

var temperature = prompt("enter nowadays weather of your city");
if (temperature <= "40") {
    alert("It is too hot outside");
}
if (temperature > "30") {
    alert("It is too hot outside");
}

if (temperature <= "30") {
    alert("The Weather today is Normal.");
}
if (temperature > "20") {
    alert("The Weather today is Normal.");
}

if (temperature <= "20") {
    alert("Today's Weather is cool.");
}
if (temperature > "10") {
    alert("Today's Weather is cool.");
}

if (temperature <= "10") {
    alert("OMG! Today's weather is so Cool.");
}
if (temperature > "0") {
    alert("OMG! Today's weather is so Cool.");
}

var firstNum = prompt("Enter First Number");
if (firstNum === "5") {
    alert("First number is 5");
}
var secondNum = prompt("Enter Second Number");
if (secondNum === "2") {
    alert("Second number is 2");
    alert("5 + 2 is "+ firstNum + secondNum);
    alert("5 - 2 is "+ firstNum - secondNum);
    alert("5 * 2 is "+ firstNum * secondNum);
    alert("5 / 2 is "+ firstNum / secondNum);
    alert("5 % 2 is "+ firstNum % secondNum);
}

var day = prompt("Enter a day");
if (day === "monday") {
    alert("It's a week day");
}
if (day === "tuesday") {
    alert("It's a week day");
}
if (day === "wednesday") {
    alert("It's a week day");
}
if (day === "thursday") {
    alert("It's a week day");
}
if (day === "friday") {
    alert("It's a week day");
}
if (day === "saturday") {
    alert("It's a weekend");
}
if (day === "sunday") {
    alert("Yay! It's a holiday");
}

var userScore = prompt("Enter your score");
if (userScore >= "50") {
    alert("You are passed.");
}
if (userScore < "50") {
    alert("Try Again!");
}

numberOne = 7;
numberTwo = 9;
9 > numberOne;
var numberOne = prompt("Enter first number");
var numberTwo = prompt("Enter second number");
if (numberOne === 7) {
    alert("first number is smaller than second.");
}
if (numberTwo === 9) {
    alert("second number is greater than first.");
}

