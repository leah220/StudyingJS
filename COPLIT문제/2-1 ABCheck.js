// 문자열이 주어졌을 때 주어진 문자열에서 문자 a와 문자 b 사이가
// 정확히 3글자 떨어져있으면 true를 반환하고 그렇지 않은 경우는 false를 반환하는 
// ABCheck(str)함수를 작성하세요.

// 풀이 1 (2020.01.13)
// 0. 입력값이 없으면 false를 반환한다.
// 1. 배열A, 배열B를 만든다.
// 2-1. 문자 a, A를 만나면 배열A에 문자열에서 해당 문자의 인덱스를 넣는다.
// 2-2. 문자 b, B를 만나면 배열B에 문자열에서 해당 문자의 인덱스를 넣는다.
// 3. 배열 B의 각 원소들에서 배열 A의 각 원소들의 값을 뺐을 때 그 값이 4인 경우가 있다면 true를 반환한다.
// 4. 해당하는 경우가 없으면 false를 반환한다.

function ABCheck(str) {
    if(str === undefined){
      return false;
    }
    let A=[];
    let B=[];
    for(let charIndx in str){
      if(str[charIndx] === 'a' || str[charIndx] === 'A'){
        A.push(Number(charIndx));
      } 
    }
    for(let charIndx in str){
      if(str[charIndx] === 'b' || str[charIndx] === 'B'){
        B.push(Number(charIndx));
      } 
    }
    for(let i in B){
      for(let j in A){
        if(B[i]-A[j]===4){
          return true;
        }
      }
    }
    return false;
}
  

// 풀이 2 (2020.01.22)
// 1. 문자 a를 만날 때마다 배열 test에 원소 0을 생성한다.
// 2-1. 문자 b를 만날 때마다 배열 test의 원소에 3이 있는지 검사한다.
// 2-2. test의 원소에 3이 있는 경우 true를 반환한다.
// 3. 다음 문자를 셀 때마다 배열 test의 원소를 1씩 늘린다.
// 4. 반환없이 반복문이 끝나면 false를 반환한다.

function ABCheck(str){
    let test = [];
    let cnt = 0;
    for(let i in str){
        //test의 모든 요소들 ++
        for(let j in test){
            test[j]++;
        }
        if(str[i] === 'a' || str[i] === 'A'){
            test[cnt++] = 0;
        }else if(str[i] === 'b' || str[i] === 'B'){
            for(let k in test){
                if(test[k] === 4){
                    return true;
                }
            }
        }
    }
    return false;
}



// Test (True)
console.log("Belows Are Ture")
console.log(ABCheck("aMABb097"));
console.log(ABCheck("TgDra001B"));
console.log(ABCheck("aaaBBBcccDDD"));

// Test (False)
console.log("\n\nBelows Are False")
console.log(ABCheck("rainbow"));
console.log(ABCheck(" "));
console.log(ABCheck(undefined));

