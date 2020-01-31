// 문자열이 주어졌을 때, 문자열에서 숫자를 모두 찾아 더한 뒤
// 해당값을 (숫자, 공백을 제외한) 알파벳의 길이로 나눈 값을
// 정수로 반올림하여 반환하는 메서드
// 예 : 문자열 "Hello6 9World 2, Nic8e D7ay!"
// 6 + 9 + 2 + 8 + 7 = 32
// 32 / 17 = 1.882
// 가까운 정수로 반올림 : 2

function numberSearch(str){
    let numTest = '0123456789'

    let sum = 0;
    let length = 0;
    let result ;
    for(let i=0 ; i<str.length ; i++){
        if(str.charAt(i) === ' '){
        }else{
            let flag = true;
            for(let j in numTest){
                if(str.charAt(i) === numTest.charAt(j)){
                    sum += Number(str.charAt(i));
                    flag = false;
                }
            }
            if(flag === true){
                length++;
            }
        }
    }

    result = sum/length;
    if(result - Math.floor(result) < 0.5){
        return Math.floor(result);
    }else{
        return Math.floor(result)+1;
    }
}

// 모델솔루션
function numberSearch(str) {
    let numSum = 0;
    let strCnt = 0;
    for (let i = 0 ; i < str.length; i += 1) {
      if (str[i] >= '0' && str[i] <= '9') {
        numSum = numSum + Number(str[i]);
      } else if((str[i] >= 'a' && str[i] <= 'z') || (str[i] >= 'A' && str[i] <= 'Z')) {
        strCnt = strCnt + 1;
      }
    }
    return Math.round(numSum/strCnt);
}

// 꿀팁
// 'z' > 'a'  //true
// '2' > '1'  //true
// 'a' > '1'  //true

// 'a' > 'z'  //false
// '1' > '2'  //false
// '11' > '2' //false