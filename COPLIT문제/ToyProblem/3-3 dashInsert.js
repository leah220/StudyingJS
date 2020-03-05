// 문자열에 있는 두 홀수 사이에 '-'를 추가하여 반환하는 메서드

// 방법 1: splice 메서드 이용
function DashInsert(string){
    let arr = string.split('');
    let i = 0;
    do{
        if(Number(arr[i]) % 2 === 1){
            if(Number(arr[i+1] % 2 === 1)){
                arr.splice(++i,0,'-');
            }
        }
        i++
    }while(i<arr.length);

    return arr.join('');
}

// 방법 2: slice 메서드 이용
function DashInsert2(string) {
    let i=0;
      do{
        if(string[i]%2===1 && string[i+1]%2===1){
          let front = string.slice(0,i+1);
          let rear = string.slice(i+1,string.length);
          string = front + '-' + rear;
          i++
        }
        i++
      }while(i<string.length);
    return string;
  }

// Test
console.log(DashInsert("159357"));
console.log(DashInsert("1234597"));
console.log(DashInsert("긴급전화는 112 또는 119"));

// Test
console.log(DashInsert2("159357"));
console.log(DashInsert2("1234597"));
console.log(DashInsert2("긴급전화는 112 또는 119"));