// [6. 배열 메소드] 11_addToBackOfNew
// 배열과 요소가 주어졌을 때, 주어진 배열의 복사본 끝에 주어진 요소가 추가된 배열을 반환
// 원본 배열은 변하면 안된다.

// 방법 1: concat을 이용
function addToBackOfNew(arr, element) {
    let newArr = arr.concat(element);
  
    return newArr;
  }
  
  
  // 방법 2 : slice()를 이용해 배열을 복사한 후, 요소를 추가함.
  // 주의 : 배열을 직접할당하면 배열 값이 변할 수 있음.
  function addToBackOfNew(arr, element) {
    let newArr = arr.slice();
    newArr.push(element);
  
    return newArr;
  }
  