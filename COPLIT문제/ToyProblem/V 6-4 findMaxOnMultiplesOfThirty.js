// 임의로 주어진 숫자들을 조합하여
// 30의 배수를 만들 수 있으면 그 최댓값을 반환하고 
// 만들 수 없는 경우 -1을 반환하는 메서드

function findMaxOnMultipleOf(num){

}

//접근

function findMaxOnMultiplesOfThirty(num) {
    // DFS의 개념이 꼭 필요할까
    // 경우의 수, 팩토리얼
  
    // num을 string으로 바꾼다.
    // char[i]를 배열에 넣는다. ?문자열도 배열이지만 넣쟈
    // 배열을 조합한다 (경우의수) // 먕 팩터리얼인줄알았는데 아닌거같다
    // 조합한 숫자가 30의 배수이면 true를 반환한다.
    // 모든 경우의 수가 끝나면 false를 반환한다.
  
    let numStr = String(num); //num의 문자열
    let arr = [];            //num의 배열
    for(let i=0 ; i<numStr.length; i++){
      arr.push(numStr[i]);
    }
    let idx = numStr.length; //num의 자리수
    let tempNum = []; //num의 임시조합
  
    // 경우의 수
    for(let i=0; i<numStr.length; i++){
      let rest = arr; //num에서 사용하지 않은 숫자의 배열
  
      if(tempNum.join('') % 30 === 0){
        return '숫자';
      }
    }
  
    return -1;
  }
  






























  let max = -1;

  function findMaxOnMultiplesOfThirty(num) {
    // num을 string으로 바꾼다.
    // char[i]를 배열에 넣는다. ?문자열도 배열이지만 넣쟈
    // 배열을 조합한다 (경우의수) // 먕 팩터리얼인줄알았는데 아닌거같다
    // 조합한 숫자가 30의 배수이면 숫자(최댓값)를 반환한다.
    // 모든 경우의 수가 끝나면 -1를 반환한다.
  
    let numStr = String(num).split('').map(Number);            //num의 배열
    let idx = numStr.length; //num의 자리수
    let tempNum = []; //num의 임시조합
    let visited = new Array(idx).fill(false);
    let depth = 0;
    let test = 0;
  
    // 경우의 수
    test = DFS(tempNum, numStr, visited, depth);
  
    return test;
  }
  

// 지금 해야하는 단계 : depth를 빠져나오기.
// 적절한 때에 멈춰서, 탐색하기.

// 멈추는 법에 대한 고민
// if(!visited.includes(false)) depth--; visited[?] = false;
// if(false의 개수가 1개) depth--; visited[?] = false;

  function DFS(tempNum, numStr, visited, depth){
    console.log("numStr.length : " + numStr.length);
    console.log("depth : " + depth);
    if(numStr.length === depth){
      tempNum = Number(tempNum.join(''));
      console.log("tempNum : " + tempNum)
      // 30의 배수인지 확인!!
      if(tempNum % 30 === 0){
        if(tempNum > max){
          max = tempNum;
          console.log("max : " + max);
          return max;
      //   }else{
      //     visited.map(x => false);
      //     tempNum = [];
      //     depth = 0;
      //     DFS(tempNum, numStr, visited, depth)
      //   }
      // }else{
      //   visited.map(x => false);
      //   tempNum = [];
      //   depth = 0;
      //   DFS(tempNum, numStr, visited, depth)
      }
    }
  
  
    for(let k=0; k<numStr.length; k++){
      if(visited[k] === false){
        visited[k] = true;
        tempNum[depth] = numStr[k];
        console.log("depth++");
        depth++;
        DFS(tempNum, numStr, visited, depth);
      }
    }
  }
}