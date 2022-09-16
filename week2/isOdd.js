const isOdd = (num) =>{
    return num%2 == 1;
};

function onClick(){
    console.log(atLeastTwo([1,2,3,4,5], isOdd));
    //console.log(isOdd(4));
}

const atLeastTwo = (array, callback) => array.filter(callback).length >= 2;