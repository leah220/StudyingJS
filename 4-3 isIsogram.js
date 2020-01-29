// isogram은 이어져있든 이어져있지 않든 같은 문자가 반복되지 않는 단어
// 문자열이 주어졌을 때, 해당 문자열이 isogram인지 확인해주는 함수 작성


// 방법 1
let isIsogram = function(str) {
    let test = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = new Array(26).fill(0);
    let word = str.replace(/ /gi, "").toUpperCase().split('');
  
    for(let i=0 ; i<word.length ; i++){
        for(let j=0 ; j<26 ; j++){
            if(word[i] === test[j]){
              result[j]++;
              if(result[j] > 1){
                  return false;
              }
            }
        }
    }
  
    return true;
  }
  
  