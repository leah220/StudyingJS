// [3.반복문] 03_countCharacter
// 주어진 문자열에서 주어진 문자가 몇 개 있는지 반환

// 방법1
function countCharacter(str, char) {
    let count = 0;
   
    for(let s in str){
      if(str[s] === char)
      count++;
    }
   
    return count; 
   }
   
   
// 방법2
function countCharacter(str, char) {
    let count = 0;
   
    for(let i=0 ; i<str.length; i++){
      if(str.charAt(i) == char)
      count++;
    }
   
    return count; 
}