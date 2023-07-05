window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`

let promise1 = new Promise((resolve, reject) => {
    let randomTime = Math.floor(Math.random() * 5) + 1;
    setTimeout(() => {
        resolve(randomTime);
    }, randomTime * 1000);
});

let promise2 = new Promise((resolve, reject) => {
    let randomTime = Math.floor(Math.random() * 5) + 1;
    setTimeout(() => {
        resolve(randomTime);
    }, randomTime * 1000);
});

let promise3 = new Promise((resolve, reject) => {
    let randomTime = Math.floor(Math.random() * 5) + 1;
    setTimeout(() => {
        resolve(randomTime);
    }, randomTime * 1000);
});

let promise4 = new Promise((resolve, reject) => {
    let randomTime = Math.floor(Math.random() * 5) + 1;
    setTimeout(() => {
        resolve(randomTime);
    }, randomTime * 1000);
});

let promise5 = new Promise((resolve, reject) => {
    let randomTime = Math.floor(Math.random() * 5) + 1;
    setTimeout(() => {
        resolve(randomTime);
    }, randomTime * 1000);
});

const promises = [promise1, promise2, promise3, promise4, promise5];

Promise.any(promises).then((result) => {
    document.getElementById("output").innerText = result;
});