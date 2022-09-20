
function min (x, y){
    if(x>y){
        return y;
    } else {
        return x;
    }
}

function isEven(x){
    let isEvenValue;
    if(x==0){
        isEvenValue = "true";
    } else if (x==1){
        isEvenValue = "false";
    } else {
        x -= 2;
        return isEven(x);
    }
    return isEvenValue;
}

function countBs (input){
    let count=0;
    for(let i = 0; i < input.length; i++){
        count = countChar(input, "B");
    }
    return count;
}

function countChar(input, countLetter){
    let count = 0;
    for(let i =0; i < input.length; i++){
        if(input[i] == countLetter){
            count++;
        }
    }
    return count;
}