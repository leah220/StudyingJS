// parameter가 정수이며, 2의 거듭제곱이면 true를 반환한다.

// 방법 1: 내장 메서드 이용
function powerOfTwo(num){
    if(Math.floor(num) === num 
        && Math.floor(Math.log2(num)) === Math.log2(num)){
            return true;
        }
    return false;
}

// 방법 2: 내장 메서드 사용하지 않고 구현
function powerOfTwo(num){
    if( num === 1 ){
        return true;
    }
    do{
        num /= 2;
        if(num===1){
            return true;
        }else if(num<1){
            return false;
        }
    }while(1);
}

