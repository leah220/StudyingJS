// 주어진 숫자보다 작은 숫자들 중 3과 5의 배수들의 총합을 반환하는 메서드
// 예 : threeFiveMultiples(10) 은 23을 반환한다.


// 방법 1
// 3과 5의 배수를 배열에 넣어 배열의 총합을 구함
function threeFiveMultiples(num) {
    let list = [];
    let result = 0;
    let i = 3
    if(num<3){
      return 0;
    }
    while(i<num){
      if(i % 3 === 0){
        list.push(i);
      }else if(i % 5 === 0){
        list.push(i);
      }
      i++;
    }
  
    for(let idx in list){
      result += Number(list[idx]);
    }
  
    return result;
}



// 모델솔루션 (좋은 방법)
// 변수 result를 선언하고 num이하의 3과 5의 배수를 구해 더함
function threeFiveMultiples(num) {
    let result = 0;
    for (let i = num - 1; i > 2; i--) {
      if (i % 3 === 0 || i % 5 === 0) {
        result += i;
      }
    }
    return result;
  }