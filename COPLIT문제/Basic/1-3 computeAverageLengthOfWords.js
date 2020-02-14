// [1.문자열] 03_computeAverageLengthOfWords
// 여러개의 단어가 주어졌을 때, 단어 길이의 평균값 반환

// 방법 1
// rest parameter 사용
function computeAverageLengthOfWords(...args){
    let cnt = 0;
    let total = 0;

    for(let i in args){
        cnt++;
        total += args[i].length;
    }

    return total / cnt;
}


// 방법 2
// map, reduce 사용
function computeAverageLengthOfWords(...args){
    let cnt = 1;

    let result = args.map( x => x.length).reduce(function(acc, cur){
        cnt++;
        return acc + cur; 
    });

    return result/cnt;
}

