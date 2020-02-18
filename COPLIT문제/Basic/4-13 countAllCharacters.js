// [4.객체] 13_countAllCharacters
// 주어진 문자열의 각각의 문자를 키로 가지는 객체를 반환한다.
// 키 값은 해당 문자가 주어진 문자열에서 몇 번 나오는지를 나타낸다.

// 방법1
// function countAllCharacters(string){
//     let obj = {};
//         for(let i=0; i<string.length; i++){
//             if(!(string.charAt(i) in obj)){
//                 obj[string.charAt(i)] = 1;
//             }else{
//                 obj[string.charAt(i)]++;
//             }
//         }
//     return obj;
// }

// 방법2
function countAllCharacters(str){
    let obj = {};
  
    for(let i in str){
      if(obj.hasOwnProperty(str[i])){
        obj[str[i]]++;
      }else{
        obj[str[i]] = 1;
      }
    }
  
    return obj;
}
  
  