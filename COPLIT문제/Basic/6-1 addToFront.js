// [6.배열 메소드] 1_addToFront
// 배열과 요소가 주어졌을 때, 주어진 배열의 맨앞에 주어진 요소를 추가하고 반환한다.
// 새로운 배열이 아닌 주어진 배열과 같은 배열을 반환해야 한다.

// 방법 1 : unshift를 이용하여 배열의 맨 앞에 el을 넣는다.
function addToFront(arr, el){
    arr.unshift(el);
    return arr;
}

// 방법 2 : splice 메소드를 이용하여 0번째 자리에 아무요소 삭제하지 않고 el을 넣는다.
function addToFront(arr, el){
    arr.splice(0,0,el);
    return arr;
}

// 방법 3 : for 반복문을 이용하여 모든 요소를 한 칸씩 뒤로 미루고, 0번째 인덱스에 el을 넣는다.
function addToFront(arr, el){
    for(let i=arr.length ; i>0 ; i--){
        arr[i] = arr[i-1];
    }
    arr[0] = el;
    return arr;
}

// 방법 4 : do while 반복문을 이용하여 모든 요소를 한 칸씩 뒤로 미루고, 0번째 인덱스에 el을 넣는다.
function addToFront(arr, el){
    let i=arr.length;
    do{
        arr[i--] = arr[i];
    }while(i>0);
    arr[0] = el;
    return arr;
}