const btnGroup = document.querySelector(".btn-group");
const btnPrew = btnGroup.querySelector("button.btn:nth-child(1)");
const btnNum = btnGroup.querySelector("button.btn:nth-child(2)");
const btnNext = btnGroup.querySelector("button.btn:nth-child(3)");

let counter = 1;

if (btnPrew) {
    btnPrew.classList.add("btn-info");
};

if (btnNum) {
    btnNum.classList.add("btn-primary");
};

if (btnNext) {
    btnNext.classList.add("btn-info");
};

btnPrew.addEventListener("click", (e) => {
    if (counter < 2) return;

    counter--;
    btnNum.textContent = counter;
});

btnNext.addEventListener("click", (e) => {
    //if (counter < 2) return;

    counter++;
    btnNum.textContent = counter;
});