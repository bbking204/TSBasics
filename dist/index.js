"use strict";
var _a;
(_a = document.getElementById("getNum")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var value = document.getElementById("num");
});
function getAverage(_a) {
    var sum = 0;
    [].forEach(function average(value) {
        return sum += value;
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
