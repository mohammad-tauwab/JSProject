// let arr = ["Laurence", "Mike", "Larry", "Kim", "Joanne", "Laurence", "Mike",
//     "Laurence", "Mike", "Laurence", "Mike"];

// function seeDuplicate(element, index){
//     return arr.lastIndexOf(element) == index;
// }

// //console.log(arr.filter(seeDuplicate));

// let strng = "this is to be conVertEd In THE CAMEl Case";

// let arrar = (strng.toLowerCase()).split(" ");
// arrar.forEach((element,index) => {
//     arrar[index]=element.charAt(0).toUpperCase()+element.slice(1);
// });

// //console.log(arrar.join(" "));

// let encryptStrng = null;
// // console.log(encryptStrng);
// encryptStrng=strng.replaceAll(" ","0");
// encryptStrng=encryptStrng.replaceAll("a","1");
// encryptStrng=encryptStrng.replaceAll("e","2");
// encryptStrng=encryptStrng.replaceAll("i","3");
// encryptStrng=encryptStrng.replaceAll("o","4");
// encryptStrng=encryptStrng.replaceAll("u","5");

// // console.log(encryptStrng);
// let string = encryptStrng.replaceAll("0"," ");
// string = string.replaceAll("1","a");
// string = string.replaceAll("2","e");
// string = string.replaceAll("3","i");
// string = string.replaceAll("4","o");
// string = string.replaceAll("5","u");
// // console.log(string);

// let mydate = new Date("2020-12-04T16:40:25");
// // console.log(mydate);
// // console.log(mydate.getTime()); 

// let dateOfBirth = "04 April 1993"
// console.log(new Date((new Date(Date.now())-Date.parse(dateOfBirth))).getFullYear());


//     const element = document.querySelector('.output');
// console.dir(element);

// console.log(document.body);


// let names = ["Sahil The Master","Sheikh","Radhia","Rani","Mohan","Mani","Nadia","Aayu","Manoj"];
// document.getElementById("message").innerHTML="<h1><b>My Friends Table</b></h1>";
// const el = document.getElementById("output");
// el.appendChild(document.createElement("table")).id="table"
// names.forEach((e,i) => {
//    document.getElementById("table").appendChild(document.createElement("tr")).innerHTML="<td><b>"+e+"</b></td>"+"<td><b>"+i+1+"</b></td>";
// });

// console.log("Hello Darling");
let draggedItem = null;
function dragStart(event) {
    draggedItem = event;
}
function dropped(element, event) {
    event.preventDefault();
    element.appendChild(draggedItem);
    element.setAttribute("style", "background-color : red");
    console.log(element.children);
}
function dover(el) {
    el.preventDefault();
    //console.log(event);
}

// ASYNC JAVA SCRIPT

let count = null;
let x = 0;
let upCounter = null;
let downCounter = null;


// let downCounter = setInterval(downCount, 500);


function downCount() {
    if (count >= 0) {
        console.log(count);
        count--;
    }
    else clearInterval(downCounter);
}

//How do we ensure that dowan counter only start counting when the upacounter has finished counting
// if we know the timing when the up counter has finished coutning we can start the down counter using setTimeout as below.

// setTimeout(() => {
//     downCounter = setInterval(downCount, 500);
// }, 5500);

// we the timing of the up counter will depend on the count value and eneed to be adjusted each timme.
// To get rid of this we may use the async properties such as PROMISE, CALL BAKC, ASYNC AND AWAIT

// USING CALL BACK

function coutingUp(c) {
    count = c;
    return new Promise(resolve => {
        upCounter = setInterval(()=>{
            if (x <= count) {
                console.log(x);
                x++;
            }
            else {
                clearInterval(upCounter);
                resolve("Doen counting Up");
            }
        },500);
    });
}

function coutingDown() {
    downCounter = setInterval(downCount, 500);
}

async function startCounter(m) {
    await coutingUp(m);
    console.log("Begning to count down");
    coutingUp(m).then(m=>{
        console.log(m);
        coutingDown();
    });
}

startCounter(5);
