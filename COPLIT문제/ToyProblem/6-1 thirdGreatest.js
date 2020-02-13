// 주어진 문자열 배열에서 세번째로 긴 단어를 반환합니다.
// 동률일 때는 뒤에 있는 단어를 반환해야 합니다.
// test용 : thirdGreatest(['ab','cd','efg','hij','k']);
// 정답: 'cd'

function thirdGreatest(arr) {
    let temp = arr.sort(function(a,b){
      return b.length - a.length;
    });
  
    for(let i=2 ; i<arr.length ; i++){
      if(temp[i].length !== temp[i+1].length){
        return temp[i]
      }
    }
  }
