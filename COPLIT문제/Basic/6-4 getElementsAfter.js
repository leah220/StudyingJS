// [6. 배열 메소드] 04_getElementsAfter
// 배열과 인덱스가 주어졌을 때, 주어진 배열의 인덱스 이후 요소들을 새로운 배열로 반환
// 이때, 주어진 인덱스에 해당하는 요소는 포함하지 않는다.



// 방법 1 : slice 사용, my best
function getElementsAfter(arr, idx){
    let result = arr.slice(idx+1, arr.length+1);
  
    return result;
  }
  
  // 방법 2 : splice 사용, 다소 부자연스러움
  function getElementsAfter(arr, idx){
    let result = arr;
    result.splice(0, idx+1, );
  
    return result;
  }
  
  // 방법 3 : result에 arr를 할당한 후, idx까지의 요소를 shift
  function getElementsAfter(arr, idx){
    let result = arr;
    for(let i=0 ; i<=idx ; i++){
      result.shift();
    }
  
    return result;
  }
  
  // 방법 4 : result에 idx 이후의 요소들을 push
  function getElementsAfter(arr, idx){
    let result = [];
    for(let i=idx+1 ; i<arr.length ; i++){
      result.push(arr[idx]);
    }
  
    return result;
  }