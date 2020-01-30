// 문자열이 주어졌을 때, 주어진 문자열을 역순으로 반환하는
// 함수 firstReverse(str)을 작성하시오

// 방법1 (2020.01.13)
// 주어진 문자열의 가운데 문자열을 기준으로 하나씩 문자를 대응하여 위치를 바꾸는 방법
function firstReverse(str) {
    let arr = [];
    for(let i in str){
        arr.push(str[i]);
    }

  for(let i=0; i<=(arr.length-1)/2; i++){
      let temp = arr[i];
      arr[i] = arr[arr.length-1-i];
      arr[arr.length-1-i] = temp;
  }
    return arr.join('');
}

// 방법2 (2020.01.22)
// 배열에 문자열을 역순으로 넣고 join 메서드를 이용해 문자열로 변환한다.
function firstReverse(str){
    let result = [];
    for(let i = 0 ; i < str.length ; i++){
        result[str.length-1-i] = str[i];
    }
    return result.join('');
}

// 방법3 (2020.01.22)
// 빈 문자열 result를 만들어 문자열의 맨뒤 문자부터 하나씩 붙인다.
function firstReverse(str){
    let result = '';
    for(let i = str.length-1 ; i >= 0 ; i--){
        result += str[i];
    }
    return result;
}


//Test
console.log("\""+firstReverse("ABCD")+"\" has to be equeal \"DCBA\"");
console.log("\""+firstReverse("rainbow")+"\" has to be equeal \"wobniar\"");
console.log("\""+firstReverse("ILoveMyDog")+"\" has to be equeal \"goDyMevoLI\"");
console.log("\""+firstReverse("123456789")+"\" has to be equeal \"987654321\"");