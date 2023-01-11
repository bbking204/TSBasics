document.getElementById("getNum")?.addEventListener("click", ()=>{
    const value = document.getElementById("num") as HTMLElement;

})

function getAverage([]) : number{
    let sum : number = 0;
    [].forEach(function average(value){
        return sum+=value;
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

