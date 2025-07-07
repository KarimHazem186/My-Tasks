////////////////////////////////////////////////////////////////
// var random = Math.floor(Math.random()*11)
// console.log("randomNumber: " +y)
// while (true) {
//     var x = prompt("Enter your Number: ");
//     if(x==y) {
//         console.log("Good Guess  " + x);
//         break;
//     } else {
//         console.log("Try Again! The correct number was " + random);
//     }
//     // break;

// }
//////////////////////////////////////////////////////////////////
// var x = prompt("Enter Number Of Table: ");
// for (var i = 1; i <=12;i++) {
//     console.log(i + " * " + x + " = "+i*x);
// }
///////////////////////////////////////////////////////////////
// function SmallestNumper(arr){
// var small = arr[0];
// for(var i = 0;i<arr.length;i++) {
//     if(arr[i]<small) {
//         small=arr[i];    
//     }
// }

// console.log("The smallest number in the array is:", small);
// }

// const arr = [10,5,4,8,9,0]
// SmallestNumper(arr);
///////////////////////////////////////////////////////////////////////
// function EvenNumber(arr){
//     var x=[];
//     for(var i = 0; i < arr.length; i++) {
//         if(arr[i]%2==0){
//             x.push(arr[i])
//         }
//     }
//     console.log(x);
// }
// const arr = [2,4,6,8,10,1,2,3,5,7,9]
// EvenNumber(arr);
//////////////////////////////////////////////////////////////////////
// function SearchNumber(arr){
//     var x = prompt("Enter Your Search Number");
//     var y = parseInt(x)
//     var i;
//     for( i = 0; i < arr.length; i++) {
//         if(arr[i]==y){
//             break;
//         } else {
//             // console.log("Not Founded")
//         }
//     }
//     console.log("Index = "+ i +" , "+" Number = " +  y);
// }
// const arr = [2,4,6,8,10,1,2,3,5,7,9]
// SearchNumber(arr);
//////////////////////////////////////////////////////////////////////
// function findIndexesUsingLoops(arr, number) {
//     const indexes = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === number) {
//             indexes.push(i);
//         }
//     }
//     return indexes;
// }

// const arr1 = [10, 2, 3, 5, 2];
// const n1 = 2;
// const res1 = findIndexesUsingLoops(arr1, n1);
// console.log(res1); // Output: [1, 4]
////////////////////////////////////////////////////////////////
// function findIndexesUsingArray(arr, number) {
//     return arr.reduce((indexes, currentValue, currentIndex) => {
//         if (currentValue === number) {
//             indexes.push(currentIndex);
//         }
//         return indexes;
//     }, []);
// }

// const arr2 = [10, 2, 3, 5, 2];
// const n2 = 2;
// const res2 = findIndexesUsingArray(arr2, n2);
// console.log(res2); 
//////////////////////////////////////////////////////////////////////////////////
// function findChar(index,str) {
//     let rem = str.split("")
//     for (let i = 0; i < rem.length; i++) {
//         if(rem[i]==index){
//             arr1.push(rem[i]);
//             arr2.push(i);
//         }
//     }

//     console.log(arr1[0]);
//     console.log(arr2);
// }
// let index = "i";
// let str = "This is JavaScript"
// var arr1 = [];
// var arr2 = [];
// findChar(index,str);
//////////////////////////////////////////////////////////////////////////
// var arr =[];
// function BattleGame(array){
//     var random1 = Math.floor(Math.random()*11)
//     var random2 = Math.floor(Math.random()*11)
    
//         arr.push(array[random1])
//         arr.push(array[random2])
    
// }
// var array = ["ahmed", "islam", "sandra", "Fatma","amed", "ilam", "sndra", "Ftma","aed", "iam"]
// BattleGame(array)
// console.log(arr);
///////////////////////////////////////////////////////////////
// var line = prompt("Please Enter Line Number")
// for (var i = 0; i <= line; i++) {
//     for (var j = 0;j<=i;j++){
//         // console.log("*")
//         document.write(`*`)
//     }
//     // console.log('\n');
//     document.write(`<br/>`)
// }
/////////////////////////////////////////////////////////////////////