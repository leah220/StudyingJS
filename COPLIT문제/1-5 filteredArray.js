// filter 메소드를 사용하지 않고 
// testFunction 함수를 통과하는 요소로만 이루어진 배열을 반환하는 함수를 작성하세요.

function filteredArray(array, testFunction){
    let result = [];

    for(let i = 0 ; i < array.length ; i ++){
        if(testFunction(array[i]) === true){
            result.push(array[i]);
        }
    }

    return result;
}

// 콜백함수 개념