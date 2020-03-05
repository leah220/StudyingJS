// [7.객체,배열] 07_getAllButLastElementOfProperty
// 객체와 키가 주어졌을 때, 주어진 키에 위치하는 배열의 마지막 요소를 제외한 배열 반환
// 배열이 비어있다면 빈 배열 반환
// 주어진 키에 위치하는 속성값이 배열이 아니라면 빈 배열 반환
// 주어진 객체에 주어진 키가 없다면 빈 배열 반환

// 방법 1 : pop 사용
let getAllButLastElementOfProperty = function(obj, key){
    if(!Array.isArray(obj[key])){
        return [];
    }else if(obj[key] === []){
        return [];
    }else if(!obj.hasOwnProperty(key)){
        return [];
    }

    let arr = obj[key];
    arr.pop();
    return arr;
}


// 방법 2 : slice 사용
// 음수 인덱스는 배열의 끝에서부터의 길이를 나타냅니다. slice(-2) 는 배열에서 마지막 두 개의 엘리먼트를 추출합니다.
// 음수 인덱스는 배열의 끝에서부터의 길이를 나타냅니다. 예를들어 slice(2,-1) 는 세번째부터 끝에서 두번째 요소까지 추출합니다.
function getAllButLastElementOfProperty(obj, key) {
  let prop = obj[key];
  if (!Array.isArray(prop)) {
    return [];
  }
  return prop.slice(0, -1);
}