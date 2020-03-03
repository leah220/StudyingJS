// [6. 배열 메소드] 17_findShortestWordAmongMixedElements
// 배열이 주어졌을 때, 주어진 배열에서 가장 짧은 문자열 반환
// 동률이 있다면 배열 앞쪽의 요소를 반환
// 문자열 외에 다른 값들이 주어질 수 있음
// 빈배열이 주어졌다면 빈 문자열 반환
// 주어진 배열에 문자열이 없다면, 빈 문자열 반환

// 방법 1 : 최근 풀이, reduce 활용
function findShortestWordAmongMixedElements(arr){
    if(arr === []){
        return '';
    }else if(arr.filter(x => typeof x === 'string') === []){
        return '';
    }else{
        let shortestWord = arr.reduce((result, current)=>{
            if(result === '' && typeof current === 'string'){
                result = current;
            }else if(result.length > current.length){
                result = current;
            }
            return result;
        }, '');
        return shortestWord;    
    }
}

// 방법 2 : 예전 풀이, 반복문을 통해 모든 요소를 체크하며, 요소가 문자열일 경우에만 if문에 의해 동작
// function findShortestWordAmongMixedElements(arr) {
//     let shortestWord='';
//     for(let idx in arr){
//       if(typeof(arr[idx]) === "string"){
//         if(shortestWord === ''){
//           shortestWord = arr[idx]
//         }else if(shortestWord.length > arr[idx].length){
//           shortestWord = arr[idx]
//         }
//       }
//     }
    
//     return shortestWord;
//   }