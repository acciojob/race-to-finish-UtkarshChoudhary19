window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`

let promise1 = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve("Promise1");
    }, Math.floor(Math.random() * 5));
});

let promise2 = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve("Promise2");
    }, Math.floor(Math.random() * 5));
});

let promise3 = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve("Promise3");
    }, Math.floor(Math.random() * 5));
});

let promise4 = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve("Promise4");
    }, Math.floor(Math.random() * 5));
});

let promise5 = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve("Promise5");
    }, Math.floor(Math.random() * 5));
});

const promises = [promise1, promise2, promise3, promise4, promise5];

Promise.any(promises).then((result) => {
    document.getElementById("output").innerText = result;
});