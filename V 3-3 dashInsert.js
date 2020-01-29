// 문자열에 있는 두 홀수 사이에 '-'를 추가하여 반환하는 메서드

function dashInsert(string){
    let arr = string.split('');
    let i = 0;
    do{
        if(typeof(arr[i]) === "number"){
            if(Number(arr[i]) % 2 === 1){
                if(typeof(arr[i+1]) === "number"){
                    if(Number(arr[i+1] % 2 === 1)){
                        arr.splice(i+1,0,'-');
                        i++
                    }    
                }
            }    
            i++
        }
    }while(i<arr.length);
    return arr.join('');
}

// Test
console.log(dashInsert("159357"));
console.log(dashInsert("1234597"));
console.log(dashInsert("긴급전화는 112 또는 119"));