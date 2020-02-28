// [6. 배열 메소드] 03_joinArrays
// 두 배열이 주어졌을 때, 첫번째 배열과 두번째 배열 순서로 합쳐진 배열을 반환한다.

// 방법 1 : concat의 이용
// 주의! cocnat은 immutable method
function joinArrays(arr1, arr2){
  let result = arr1.concat(arr2);

  return result;
}

// 방법 2 : 2개 이상의 배열이 주어졌을 때, 반복문과 cocnat의 이용
function joinArrays(...args){
    let result = [];
    for(let i=0; i<args.length; i++){
        result = result.concat(args[i]);
    }

    return result;
}

// 방법 3-1 : 2개 이상의 배열이 주어졌을 때, reduce를 이용
function joinArrays(...args){
  let result = args.reduce((acc, cur) => {return acc.concat(cur)});
  
  return result;
}


// 방법 3-2 : reduce를 이용해 바로 return, 조금 다른 표현 방식
function joinArrays(...args){
  return args.reduce(function(acc, cur) {return acc.concat(cur)}, []);
}
