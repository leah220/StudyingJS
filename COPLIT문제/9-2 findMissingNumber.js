// 1부터 n까지 숫자를 적던 중 하나의 숫자를 빼먹었을 때,
// 빼먹은 숫자를 구하는 메서드

// 방법 1
// 연속적인 숫자가 적힌다는 규칙을 이용하여
// 1부터 숫자가 연속되지 않으면 그 숫자가 누락된 것이고
// 전부 다 연속되면 마지막 숫자가 누락된 것이다.
function findMissingNumber(str){
    let arr = (str.trim()).split(' ');
    for(let num=1 ; num <= arr.length+1 ; num++){
        if( !(arr.includes(String(num))) ){
            return num;
        }
    }
}

// 모델솔루션
// n까지의 총합을 더하고, 적은 숫자들의 총합을 더해서
// 그 값을 뺌으로서 빼먹은 숫자를 찾는다.
function findMissingNumber(str) {
    let array = str.split(' ').map(Number); //우왕 .map(Number) 좋다
    let largest = array.length + 1;
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return largest * (largest + 1) / 2 - sum;
  }