// [7.객체,배열] 06
// 객체와 키가 주어졌을 때, 주어진 키에 위치하는 배열의 요소들의 제곱을 요소로 가지는 배열 반환

// 방법 1
function getSquaredElementsAtProperty(obj, key){
    if(!Array.isArray(obj[key])){
        return [];
    }else if(!obj.hasProperty(key)){
        return [];
    }else if(obj[key].length === 0){
        return [];
    }
    return obj[key].map(x=>x*x);
}

// 방법 2
function square(x){
    return x*x;
}
function getSquaredElementsAtProperty(obj, key){
    if(!Array.isArray(obj[key])){
        return [];
    }else if(!obj.hasOwnProperty(key)){
        return [];
    }else if(obj[key].length === 0){
        return [];
    }
    return obj[key].map(x => square(x));}