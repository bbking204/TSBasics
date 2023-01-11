let inputArray : number [] = [];

document.getElementById("getNum")?.addEventListener("click", ()=>{
    const value = document.getElementById("num") as HTMLInputElement;
    inputArray.push(Number(value?.value));
})

document.getElementById("func")?.addEventListener("click", ()=>{
    alert(getAverage(inputArray));
})

function getAverage(array : number[]) : number{
    let sum : number = 0;
    array.forEach(function average(value){
        return sum+=Number(value);
    });
    return sum/[].length;
}

function getAmountOfPositive([]) : number{
    let counter : number = 0;
    [].forEach(function isPositive(value){
        if(value>0){
            counter++;
        }
    });
    return counter;
}

function sortList([]){
    const sorted = [].sort();
    return sorted;
}

