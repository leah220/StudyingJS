// 문장이 주어졌을 때 주어진 문장에서 가장 긴 단어를 반환하는 메서드

function longestWord(string) {
    let arr = string.split(' ');
    let max = '';
    
    for(let i in arr){
      if(arr[i].length > max.length){
        max = arr[i];
      }
    }
    return max;
  }


// Test
console.log(longestWord("아름다운 그대에게"));
console.log(longestWord("그 날 알았지 이럴 줄 이렇게 될 줄 두고두고 생각날 거란 걸"));
console.log(longestWord("맨정신이 난 제일 싫어 아무것도 할 수가 없어"));
console.log(longestWord("Can you feel my heartbeat?"));
console.log(longestWord("시그널 보내 시그널 보내 찌릿찌릿찌릿찌릿"));