"use strict";
let inputArray = [];
document.getElementById("getNum")?.addEventListener("click", () => {
    const value = document.getElementById("num");
    inputArray.push(Number(value?.value));
});
document.getElementById("func")?.addEventListener("click", () => {
    alert(getAverage(inputArray));
});
const getAverage = (array) => {
    const sumWithInitial = array.reduce((accumulator, currentValue) => accumulator + currentValue);
    return sumWithInitial / array.length;
};
const getAmountOfPositive = (array) => {
    const positives = array.filter((value) => {
        return value > 0;
    });
    return positives.length;
};
const sortList = (array) => {
    const sorted = array.sort();
    return sorted;
};
