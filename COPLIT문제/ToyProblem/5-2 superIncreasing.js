// 숫자배열이 주어졌을 때, 
// 배열의 모든 요소들이 해당 요소들 앞에 있는 요소들 전체의 합보다 크면 true를 반환, 
// 그렇지 않으면 false를 반환하는 메서드.

let superIncreasing = function(numArr){
    let sum = numArr[0];

    for(let i=1; i<numArr.length; i++){
        if(numArr[i]>sum){
            sum += numArr[i];
        }else{
            return false;
        }
    }
    return true;
}