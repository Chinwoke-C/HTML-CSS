// let countEl = document.getElementById("count").innerText;

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

console.log(countEl)
let count = 0;

function increment(){
    count += 1; 
    countEl.innerText = count
   
}

function save(){
    let value = count + " - "
saveEl.textContent += value
countEl.textContent = 0
count = 0
    console.log(count)
}
let name = "Linda"
let greeting = "Hi there"

function greet(){
    let greetStr =greeting + ", " + name + "!"
    console.log(greetStr)
}

greet()


