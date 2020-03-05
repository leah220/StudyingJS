// [7.객체,배열] 08_getProductOfAllElementsAtProperty
// 객체와 키가 주어졌을 때, 주어진 키에 위치한 배열의 요소의 곱을 반환
// 만약 배열이 비어있다면 0 반환
// 만약 주어진 키에 위치하는 속성값이 배열이 아니라면 0 반환
// 만약 주어진 키에 위치하는 속성이 없다면 0 반환


// 방법 1
function getProductOfAllElementsAtProperty(obj, key){
    if(!Array.isArray(obj[key]) || obj[key].length === 0 || !obj.hasOwnProperty(key)){
        return 0;
    }
    return obj[key].reduce((acc,cur)=>{
        return acc * cur;
    });
}



// 방법 2
function multiply(acc, cur){
    return acc * cur;
}

function getProductOfAllElementsAtProperty(obj, key){
    if(!Array.isArray(obj[key]) || obj[key].length === 0 || !obj.hasOwnProperty(key)){
        return 0;
    }
    return obj[key].reduce(multiply);
}