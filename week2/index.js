function isOdd(x){
    if(x%2 == 1){
        const resultDiv = document.createElement("p");
        resultDiv.innerHTML = x + " is odd";
        document.body.appendChild(resultDiv);
        return x;
    } else {
        const resultDiv = document.createElement("p");
        resultDiv.innerHTML = x + " is not odd";
        document.body.appendChild(resultDiv);
    }
}

function atLeastTwo(array, callback){
    let newArray = array.filter(callback);
    console.log(newArray);
    if(newArray.length >= 2){
        return "true";
    } else {
        return "false";
    }
}

function onBtnClick(){
    console.log(atLeastTwo([1,2,3,4,5], isOdd));
}