// [7.객체,배열] 02_select
// 배열과 객체가 주어졌을 때,
// 주어진 객체의 키 값 중 주어진 배열에 포함된 키값만을 포함하는 새로운 객체를 반환

// 방법 2 : indexOf 메서드 사용
function select(arr, obj){
    let result = {};
    for(let prop in obj){
        if( arr.indexOf(prop) !== -1 ){
            result[prop] = obj[prop];
        }
    }
    return result;
}

// 방법 2: 메서드 사용X
function select(arr, obj) {
    let newObj = {};
    for(let idx in arr){
      for(let key in obj){
        if(arr[idx] === key){
          newObj[arr[idx]] = obj[key];
        }
      }
    }
    return newObj;
  }