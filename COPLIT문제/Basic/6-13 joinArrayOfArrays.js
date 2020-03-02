// [6. 배열 메소드] 13_joinArrayOfArrays
// 다차원 배열이 주어졌을때,
// 배열들의 요소를 모두 담고 있는 단일 배열을 반환합니다

function joinArrayOfArrays(multiArr){
    let result = multiArr.slice();

    result = result.reduce((arr, el)=>{
        if(Array.isArray(el)){
            arr = arr.concat(joinArrayOfArrays(el));
        }else{
            arr.push(el);
        }
        return arr;
    },[]);
    return result;
}

