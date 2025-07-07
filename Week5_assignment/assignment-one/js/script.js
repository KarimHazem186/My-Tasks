///////////////////////////////////////////
// var input1 = prompt("Enter your Username: ");
// var input2 = 'Welcome '+`<h1>${input1}</h1>`
// document.write(input2)
///////////////////////////////////////
// var input1 = prompt("Enter Temperature : ");
// if(input1 >=30) {
//     window.alert("HOT");
// } else {
//     window.alert("COLD");
// }
///////////////////////////////////////////
// var input1 = prompt("Enter Temperature : ");
// var input2 = prompt("Enter Actual feel : ");
// if((input1>=25&&input1<=30)&&input2>=25&&input2<=30) {
//     window.alert("Normal");
// }else if((input1<25&&input2<25)) {
//     window.alert("Cold");
// }else if((input1>30&&input2>30)) {
//     window.alert("HOT");
// } else {
//     window.alert("Ambiguous, Can’t summarize")
// }
//////////////////////////////////////////////////
// var input1 = prompt("Enter Number : ");
// var num1 = parseInt(input1);
// if((num1%3===0&&num1%5===0)) {
//     window.alert("FizzBuzz");
// }else if(num1%3==0) {
//     window.alert("Fizz");
// }else if((num1%5==0)) {
//     window.alert("Buzz");
// }else {
//     window.alert(`${input1}`)
// }
////////////////////////////////////////////////
// var input1 = prompt("Enter Faculty : ");
// var str = String(input1);
// if((str=="FCI")) {
//     window.alert("You are eligible to programming tracks");
// }else if(str=="Engineering") {
//     window.alert("You are eligible to Network tracks");
// } else {
//     window.alert("You are eligible for SW Fundamentals tracks")
// }
////////////////
// var input1 = prompt("Enter Faculty : ");
// var str = String(input1);

// switch(str) {
//     case "FCI":
//         window.alert("You are eligible to programming tracks");
//         break;
//     case "Engineering":
//         window.alert("You are eligible to Network tracks");
//         break;
//     default:
//         window.alert("You are eligible for SW Fundamentals tracks")
// }
////////////////////////////////////
// var input1 = prompt("Enter Number : ");
// var num1 = parseInt(input1);
// if((num1%2===0)) {
//     window.alert("Even");
// }else if(num1%2==1) {
//     window.alert("Odd");
// }else {
//     window.alert(`${num1}`)
// }
///////////////////////////////////////
var input1 = prompt("Enter your Name: ");
var input2 = prompt("Enter your Age: ");
var num1 = parseInt(input2);

let BirthYear = (2023-num1);
let AgeInDays = (num1*365);
let AgeInHours = (num1*365*24);
let AgeInMinutes = (num1*365*24*60);
console.log("Your Name: ",(input1))
console.log("Birth Year: ",(2023-num1))
console.log("Age in Days: ",(num1*365))
console.log("Age in Hours: ",(num1*365*24))
console.log("Age in Minutes: ",(num1*365*24*60))

document.write(`<div>`)
document.write(`<table border='1'>`)
document.write(`<tr>`)
document.write(`<td>`+"Name"+`</td>`)
document.write(`<td> ${input1}</td>`)
document.write(`</tr>`)

document.write(`<tr>`)
document.write(`<td>`+"Birth Data"+`</td>`)
document.write(`<td> ${BirthYear}</td>`)
document.write(`</tr>`)

document.write(`<tr>`)
document.write(`<td>`+"Age in Days"+`</td>`)
document.write(`<td> ${AgeInDays}</td>`)
document.write(`</tr>`)

document.write(`<tr>`)
document.write(`<td>`+"Age in Hours"+`</td>`)
document.write(`<td> ${AgeInHours}</td>`)
document.write(`</tr>`)

document.write(`<tr>`)
document.write(`<td>`+"Age in Minutes"+`</td>`)
document.write(`<td> ${AgeInMinutes}</td>`)
document.write(`</tr>`)



document.write(`</table>`)
document.write(`</div>`)
