"use strict";
var _a, _b;
var inputArray = [];
(_a = document.getElementById("getNum")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var value = document.getElementById("num");
    inputArray.push(Number(value === null || value === void 0 ? void 0 : value.value));
});
(_b = document.getElementById("func")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    alert(getAverage(inputArray));
});
function getAverage(array) {
    var sum = 0;
    array.forEach(function average(value) {
        return sum += Number(value);
    });
    return sum / [].length;
}
function getAmountOfPositive(_a) {
    var counter = 0;
    [].forEach(function isPositive(value) {
        if (value > 0) {
            counter++;
        }
    });
    return counter;
}
function sortList(_a) {
    var sorted = [].sort();
    return sorted;
}
