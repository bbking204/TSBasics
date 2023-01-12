let inputArray : number [] = [];

document.getElementById("getNum")?.addEventListener("click", ()=>{
    const value = document.getElementById("num") as HTMLInputElement;
    inputArray.push(Number(value?.value));
})

document.getElementById("func")?.addEventListener("click", ()=>{
    alert(getAverage(inputArray));
})

const getAverage=(array : number[]) : number=>{
    const sumWithInitial = array.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
    return sumWithInitial/array.length;
}

const getAmountOfPositive=(array : number[]) : number=>{
    const positives = array.filter((value)=>{
        return value>0;
    })
    return positives.length;
}

const sortList=(array : number[])=>{
    const sorted = array.sort();
    return sorted;
}

