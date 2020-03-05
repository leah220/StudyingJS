 // 고난도   
 // +, - 그리고 괄호를 가지고 길이가 최대 50인 식을 만들었다.
 // 그러고 나서 괄호를 모두 지웠다,
 // 이때, 괄호를 적절히 쳐서 이 식의 값을 최소로 만드는 프로그램을 작성하시오.

// 방법 1                                  str = '33+44-55+66' 일때
// '-'로 구분해서 strArr 배열에 넣는다.     ['33', '44', '55+66']
// + 를 계산하여 strArr2 배열에 넣는다.     ['33', '44', '127']
// '-'로 연결해서 result를 반환한다.        return -44
function findMinByBracket(str){
    let strArr = str.split('-');
    let strArr2 = [];
    let result;

    strArr.forEach((el)=>{
        strArr2.push(eval(el));
    });

    result = eval(strArr2.join('-'));
    return result;
}

// 방법 2 : eval() 함수를 사용하지 않기
function findMinByBracket(str){
    let splitedStr = str.split('-');
    let willBeJoined = [];
    for(let i=0 ; i<splitedStr.length ; i++){
        if(splitedStr[i].includes('+')){
            let temp = splitedStr[i].split('+');
            let tempNum = 0;
            for(let j=0; j<temp.length; j++){
                tempNum += Number(temp[j]);
            }
            willBeJoined.push(tempNum);    
        }else{
            willBeJoined.push(splitedStr[i]);
        }
    }
    let result = willBeJoined[0];
    for(let i=1 ; i<willBeJoined.length ; i++){
        result -= willBeJoined[i];
    }
    return result;
}
