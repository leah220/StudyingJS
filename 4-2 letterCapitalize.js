// 문자열을 parameter로 받아 각 단어의 첫번째 글자를 대문자로 만드는 메서드

// 방법 1
function letterCapitalize(str){
    let result = str.split(' ');
    console.log(result);
    for(let i=0; i<result.length; i++){
        if(result[i].length === 1){
            result[i] = result[i].toUpperCase();
        }else{
            let temp = result[i].split('');
            console.log("temp : " + temp);
            result[i] = '';
            for(let j=1; j<temp.length; j++){
                let char = temp[0].toUpperCase();
                temp[0] = char;
            }
            console.log(Array.isArray(temp));
            temp = temp.join('');
            console.log(temp);
            result[i] = temp;
        }
    }
    result = result.join(' ');
    return result;
}