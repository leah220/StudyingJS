// [1.문자열] 06_findShortestOfThreeWords
// 문자열 3개가 주어졌을 때, 주어진 문자열 중 가장 짧은 문자열 반환.

// 방법 1
// 전달받은 문자열을 배열로 만든 후,
// 인덱스 0번 요소를 shortest로 잡고,
// 나머지 배열 요소와 하나씩 비교하여 문자열에 길이가 짧은 것을 shortest에 할당한다.
// 반복문이 끝난 뒤에 shortest를 반환한다.
function findShortestOfThreeWords(...arguments){
    let shortest = arguments[0];
    for(let i=1 ; i<arguments.length ; i++){
        if(arguments[i].length < shortest.length){
            shortest = arguments[i];
        }
    }
    return shortest;
}


// 방법 2
// 방법 1과 같은 논리로 reduce를 사용하여 정리한다.
function findShortestOfThreeWords(...arguments){
    return arguments.reduce((shortest, cur)=>{
        return shortest.length <= cur.length ? shortest : cur ; 
    });
}