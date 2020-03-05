// 2차원 배열을 1차원 배열로 전환하세요.
// Advanced : N차원 배열을 1차원 배열로 전환하세요.

function flatten (arr){
    let result = [];
    for(let i in arr){
        if(Array.isArray(arr[i]) === true){
            result = result.concat(arr[i]);
        }else{
            result.push(arr[i]);
        }
    }
    return result;
}

// Test
console.log(flatten([1,2,[3,4],[5],6]));


//모델 솔루션
function flatten2 (array){
    return array.reduce(function(acc, curr) {
      return acc.concat(curr);
    }, []);
  }

// Test
console.log(flatten2([1,2,[3,4],[5],6]));
console.log(flatten2([[1,[2,3],4],5,6]));
console.log(flatten2([1,2,[3,4,[[5],6]]]));


// Advanced
// 고차원 배열을 1차원 배열로 전환하기 >> 재귀함수 사용
function superFlatten (arr){
    let result=[];
    for(let i=0 ; i<arr.length ; i++){
        if(Array.isArray(arr[i])){
            let temp = superFlatten(arr[i]);
            result = result.concat(temp);
        }else{
            result.push(arr[i]);
        }
    }
    return result;
}


// Test
console.log(superFlatten([[1,[2,3],4],5,6]));
console.log(superFlatten([1,2,[3,4,[[5],6]]]));










