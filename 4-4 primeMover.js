// 1에서 50000까지 범위에서 n번째 소수를 반환하는 메서드

let primeMover = function(n) {
    // 1. 1부터 50000까지 소수를 구해서 배열로 만들기
      let primeArr = [2];
      for(let i = 3 ; i <= 50000 ; i=i+2){
          let flag = true;
          for(let j = 3 ; j <= i/2 ; j++ ){
              if(i%j === 0){
                  flag = false;
                  break;
              }
          }
          if(flag === true){
              primeArr.push(i);
          }
      }
  
    //  console.log(primeArr);
    // 2. n<=0인 경우 undefined 반환
      if(n<=0){
          return undefined
      }else{
          return primeArr[n-1];
      }
  
    // 3. 배열의 n-1번째 인덱스에 있는 요소 반환
  }
  