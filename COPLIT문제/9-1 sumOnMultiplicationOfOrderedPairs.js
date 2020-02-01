// 입력한 숫자에 대해 서로 다른 두 숫자의 모든 경우의 곱에 대한 합 구하는 메서드


// 방법 1
function sumOnMultiplicationOfPairs(...arr) {
    let result = 0;
    let gop = [];

    for(let i=0 ; i<arr.length ; i++){
        for(let j=i+1 ; j<arr.length ; j++){
            gop.push(arr[i]*arr[j]);
        }입려
    }

    for(let idx in gop){
        result += gop[idx];
    }
    return result;
}


// 모델 솔루션 (이해 못함, 내가 모르는 공식인듯)
function sumOnMultiplicationOfPairs(...array) {
    let sum = 0;
    let result = 0;
    for (let i = 0; i < array.length; i++) {
      if (i !== 0) {
        result += sum * array[i];
      }
      sum += array[i];
    }
    return result;
}