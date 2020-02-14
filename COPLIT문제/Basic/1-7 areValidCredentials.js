// [1.문자열] 07_areValidCredentials
// 이름과 비밀번호가 주어졌을 때, 이름이 3글자보다 길고 비밀번호가 8글자 이상이면 true를 반환

// 방법1
function areValidCredentials(name, pswd){
    if(name.length > 3 && pswd.length >= 8){
        return true;
    }
    return false;
}

// 방법2 : 삼항연산자 사용
function areValidCredentials(name,pswd){
    return name.length>3 && pwsd.length >=8 ? true : false ;
}