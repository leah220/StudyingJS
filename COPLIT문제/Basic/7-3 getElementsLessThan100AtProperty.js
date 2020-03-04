// [7.객체,배열] 03_getElementsLessThan100AtProperty
// 객체와 키 값이 주어졌을 때,
// 주어진 키에 위치하는 배열에서 100보다 작은 값으로만 이루어진 배열 반환

// 방법 1 : filter 메서드 활용
function getElementsLessThan100AtProperty(obj, key){
    if(!Array.isArray(obj[key])){
        return [];
    }else if(!key in obj){
        return [];
    }else if(obj[key].length === 0){
        return [];
    }

    return obj[key].filter(x=>x<100);
}

// 방법 2 : lessThan100 메서드를 만들어서 활용
function lessThan100(number) {
    return number < 100;
  }
function getElementsLessThan100AtProperty(obj, key){
    if(!Array.isArray(obj[key])){
        return [];
    }else if(!key in obj){
        return [];
    }else if(obj[key].length === 0){
        return [];
    }

    return obj[key].filter(x=>lessThan100(x));
}