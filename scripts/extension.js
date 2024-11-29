//alert("You are loved ddeeply");
console.error("i have been hacked");
// prompt("enter you lucky number");
// alert("got your lucky number");

let binaryNum = 0b0011;
console.log(`the number is ${binaryNum}`);

//add the time to get the correct time
let initialTime = "00009:55"
let timeToBeAddedInMinutes = 145;
//let us get the index of :
let index = initialTime.indexOf(":");
let hour = Number(initialTime.substring(0,index));
let minute = Number(initialTime.substring(index+1,initialTime.length));

let newHour = hour+Math.floor(timeToBeAddedInMinutes/60);
let newMinute = minute+timeToBeAddedInMinutes%60;
if(newMinute>60){
    newHour += Math.floor(newMinute/60); // newHour = newHour + Math.floor(newMinute/60)
    newMinute = newMinute%60;
}
console.log(`The time after adding ${timeToBeAddedInMinutes} to `+initialTime+"is "+String(newHour)+":"+String(newMinute));

// let a = "Hello";
// a = prompt("world");
// console.log(a);

let firstNum = 5;
let secondNum = 10;
firstNum++;
secondNum--;
let total = ++firstNum + secondNum;
console.log(total);
let total2 = 500 + 100 / 5 + total--;
console.log(total2);

let storeItems = [{name : "Pencil Box", cost : 25000}, 2000,{choices : [1,2,3,4], randomChoice : 9}, true];
console.log(storeItems[0].cost);
console.log(storeItems[2].choices[3]);
console.log(storeItems.pop());