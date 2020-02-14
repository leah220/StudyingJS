// [1.문자열] 08_findMinLengthOfThreeWords
// 단어 세개가 주어졌을 때, 가장 짧은 단어의 길이를 반환

// 방법1
function findMinLengthOfThreeWords(word1, word2, word3) {
    let minLength = word1.length;
  
    if(minLength>word2.length)
      minLength = word2.length;
    if(minLength>word3.length)
      minLength = word3.length;
    return minLength;
}

// 방법2
// rest parameter와 reduce를 이용한 방법
// 주어진 문자열이 2개이거나 3개 이상이어도 작동하다.
function findMinLengthOfThreeWords(...args){
    return args.reduce((shortest,cur)=>{
        return shortest < cur.length ? shortest : cur.length ;
    }, args[0].length);
}
