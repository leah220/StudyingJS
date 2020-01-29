// 주어진 수의 각 자리 숫자를 곱했을 때
// 한 자릿수가 될 때까지의 계산 횟수를 반환하는 메서드
// 예 : 입력값 39인 경우, 3반환
// 39 >> 27 >> 14 >> 4 (총 3번 계산)

function multiplicativePersistence(num) {
    let cnt = 0;
    if(num<10){
        return cnt;
    }
  
    do{
        let arr = num.toString().split('');
        let test = 1;
        for(let i in arr){
            test *= Number(arr[i]);
        }
        num = test;
        cnt++;
    }while(num>=10)
  
    return cnt;
  }
  