// Add your functions here

//map - should expect a source array and a function. map returns a new array. 
function map(sourceArray, func){
    const newArray = []

    for (let i = 0; i < sourceArray.length; i++){
        newArray.push(func(sourceArray[i]))
    }

    return newArray
}

//reduce - should expect a source array and optionally a starting value. reduce returns a value. 

function reduce(sourceArray, func, startingPoint){

    let total
    let i = 0 //0 is falsy
    if (startingPoint){
        total = startingPoint
    } else {
        total = sourceArray[0] 
        i++
    }

    for (i; i < sourceArray.length; i++){
        total = func(sourceArray[i], total) 
        //use = (not +=) because the counter is operated on during the function. the + will happen in the callback function
    }

    return total
}