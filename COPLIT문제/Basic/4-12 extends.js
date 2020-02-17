// [4.객체] 12_extends
// 객체 두 개가 주어졌을 때, 두번째 객체의 속성을 첫번째 객체에 추가
// 단, 이미 첫번째 객체에 있는 키라면 값을 덮어쓰지 않고 무시한다.
// 두번째 객체는 수정하지 않는다.

// 방법1
function extend(obj1, obj2) {
    for(let prop in obj2){
      if(!(prop in obj1)){
        obj1[prop] = obj2[prop];
      }
    }
  }
  
  // 방법 2
  // function extend(obj1, obj2){
  //     for(let prop in obj2){
  //         if(!obj1.hasOwnProperty(prop)){
  //             obj1[prop] = obj2[prop];
  //         }
  //     }
  // }
  
  // 방법 3 모델솔루션
  // function extend(obj1, obj2){
  //     Object.assign(obj1, Object.assign({}, obj2, obj1));
  // }