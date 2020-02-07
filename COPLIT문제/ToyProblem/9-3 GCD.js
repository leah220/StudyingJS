// 주어진 두 숫자에 대한 최대공약수(GCD) 구하기

// GCD = num1 * num2 / LCM
// 공식으로 구하거나 노가다로 구하거나

// 방법 1 : 노가다
function gcd(num1, num2){
    let gcd;
    for(let i=1 ; i <= num1 ; i++){
        if(num1 % i === 0 && num2 % i === 0){
            gcd = i;
        }
    }
    return gcd;
}

// 방법 2 : 공식 //소인수분해싫어 //재귀함수 //아마도 유클리드?
function gcd(num1, num2) {
    return num2 ? gcd(num2, num1 % num2) : num1;
}