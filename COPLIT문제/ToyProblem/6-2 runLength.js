// 문자열이 주어졌을 때, 반복되는 수와 해당 글자를 조합하여 문자열을 압축시키는 메서드
// 예 : wwwggopp   ->  3w2g1o2p


// 방법 1
function runLength(str) {
   
    let char = [];
    let length = [];
    let result = [];
  
    let cnt = 1;
    char.push(str[0]);
    for(let i=1 ; i<str.length ; i++){
      if(str[i] === str[i-1]){
        cnt++;
      }else if(str[i] !== str[i-1]){
        length.push(cnt);
        char.push(str[i]);
        cnt=1;
      }
    }
    length.push(cnt);
  
    for(let i=0 ; i<char.length ; i++){
      result.push(length[i]);
      result.push(char[i]);
    }
  
    result = result.join('');
    return result;
  }

  // 모델솔루션
  function runLength(str) {
    var i = 0;
    var rle = "";
    while (i < str.length) {
      var c = str[i];
      var j = i + 1;
      var compressed = [1, c];
  
      while (j < str.length) {
        if (str[j] === c) {
          compressed[0] += 1;
        } else {
          break;
        }
        j++;
      }
  
      rle += compressed.join('');
      i = j;
    }
  
    return rle;
  }