// 문자열의 각 단어 첫 글자들로 주어진 문자열을 반환하는 메서드

function firstCharacter(str){
    let arr = [];
    let words = str.split(' ');
    for(let i in words){
        arr.push(words[i][0]);
    }
    return arr.join('');
}

function firstCharacter2(str){
    let result = [];
    if(str === '' || str === undefined){
        return '';
    }
    if(str[0] !== ' '){
        result.push(str[0]);
    }
    for(let i = 0 ; i < str.length ; i++){
        if(str[i] === ' '){
            result.push(str[i+1]);
        }
    }
    return result.join('');
}

console.log(firstCharacter("Procedure-oriented Programming"));
console.log(firstCharacter("Object Oriented Programming"));
console.log(firstCharacter("Aspect Oriented Programming"));
console.log(firstCharacter("Functional Programming"));
console.log(firstCharacter("Test Driven Development"));
console.log(firstCharacter("Domain Driven Design"));

console.log("\n");
console.log(firstCharacter2("마이 리틀 텔레비전"));
console.log(firstCharacter2("냉장고를 부탁해"));
console.log(firstCharacter2("무한 도전"));
console.log(firstCharacter2("백종원의 골목식당"));