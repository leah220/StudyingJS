// [6. 배열 메소드] 26_computeAverageOfNumbers
// 숫자의 배열이 주어졌을 때, 요소들의 평균을 반환
// 만약 빈배열이 주어지면 0을 반환

// 방법 1 : reduce 메서드의 활용
function computeAverageOfNumbers(numArr){
  if(numArr.length === 0){
    return 0;
  }else{
    return numArr.reduce((acc,cur)=>{
      return acc+cur;
    })/numArr.length;
  }
}

// 방법 2 : 메서드 없이 풀이
function computeAverageOfNumbers(nums) {
  let sum=0;
  if(nums.length == 0)
    return 0;
  for(let i = 0 ; i < nums.length ; i++){
    sum += nums[i];
  }
  return sum/nums.length;
}