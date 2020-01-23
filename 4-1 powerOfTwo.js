function powerOfTwo(num){
    if(Math.floor(num) !== num){
        return false;
    }else if(num === 0){
        return false;
    }
    for(let i=3 ; i<Math.floor(num/2); i=i+2){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}