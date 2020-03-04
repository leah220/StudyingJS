// [7.객체,배열] 01_getElementOfArrayProperty
// 객체, 키, 인덱스 값이 주어졌을 때 주어진 키에 위치한 배열의 인덱스에 해당하는 값을 반환
// 만약 배열이 비어있다면 undefined 반환
// 만약 주어진 인덱스 값이 키의 속성값의 범위를 넘어선다면 undefined 반환
// 만약 주어진 키에 위치한 속성값이 배열이 아니라면 undefined 반환
// 만약 주어진 키에 위치한 속성이 없다면 undefined 반환

// 방법 1
function getElementOfArrayProperty(obj, key, idx){
    if(!Array.isArray(obj[key])){
        return undefined;
    // }else if(!obj.hasOwnProperty(key)){
    //     return undefined;
    }else if(!(key in obj)){
        return undefined;
    }else if(obj[key].length === 0){
        return undefined;
    }else if(idx > obj[key].length){
        return undefined;
    }
    return obj[key][idx];
}

// 방법 2
function getElementOfArrayProperty(obj, key, idx) {
    let arrayProperty = obj[key];
  
    if(Array.isArray(arrayProperty) === false)
      return undefined;
  
    return arrayProperty[idx];
}