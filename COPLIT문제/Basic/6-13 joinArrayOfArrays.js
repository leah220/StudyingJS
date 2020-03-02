// [6. 배열 메소드] 13_joinArrayOfArrays
// 다차원 배열이 주어졌을때,
// 배열들의 요소를 모두 담고 있는 단일 배열을 반환합니다

function joinArrayOfArrays(multiArray){
    let result = multiArray.slice();

    result = result.reduce((arr, cur)=>{
        if(Array.isArray(cur)){
            arr = arr.concat(joinArrayOfArrays(cur));
        }else{
            arr.push(cur);
        }
        return arr;
    },[]);
    return result;
}

