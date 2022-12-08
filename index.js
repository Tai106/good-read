//document.getElementById("count-el").innerText = 4;

let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
    count += 1
    countEl.textContent = count
};


function save() {
    let countStr = count + " - ";
    saveEl.tectContent += countStr;
    countEl.textContent = 0;
    count = 0;
    };









let name = "Tai";

let greeting = "Hi, my name is "

let myGreeting = greeting + name

console.log(myGreeting)