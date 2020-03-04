// [6. 배열 메소드] 25_filterOddLengthWords
// 문자열의 배열이 주어졌을 때, 길이가 홀수인 문자열만을 요소로 가지는 배열 반환

// function filterOddLengthWords(arr){
//     let result = arr.filter( x => x.length % 2 === 1 );

//     return result;
// }

function filterOddLengthWords(words) {
    for(let i = 0 ; i < words.length ; i++){
      if(words[i].length % 2 === 0){
        words.splice(i,1);
        i--;
      }
    }
    return words;
  }