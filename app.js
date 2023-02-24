const box = document.querySelector(".box");

const color = document.querySelector(".color");

const body = document.body;

box.addEventListener('click',diger1);

function diger1() {
    const col1 = diger2();
    const col2 = diger2();
    const col3 = diger2();

    const yenirenk = `rgb(${col1},${col2},${col3})`;
    color.innerHTML = yenirenk;
    body.style.backgroundColor = yenirenk
}

function diger2() {
    return Math.floor(Math.random()*256);
}