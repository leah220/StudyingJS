// [4. 객체] 11_printObject
// 객체 안에 정의된 키와 값 쌍을 조합한 문자열을 리턴한다.


// 방법1
  function printObject(obj){
    let string = '';
    for(let prop in obj){
      string += (prop+': '+obj[prop]+'\n');
    }
    return string;
  }
  
// 방법2
function printObject(obj){
    let string = [];
    for(let prop in obj){
        string.push(prop+': '+obj[prop]+'\n');
    }
    return string.join('');
}
  
// 방법3
function printObject(obj) {
    let result ='';

    for (let property in obj) {
        result += `${property}` + ": " + `${obj[property]}` + "\n";
    }

    return result;
}  