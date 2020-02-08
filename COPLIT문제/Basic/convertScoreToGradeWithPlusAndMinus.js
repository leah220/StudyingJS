// [0. 조건문] 8. convertScoreToGradeWithPlusAndMinus
// 점수가 주어졌을 때, 주어진 점수와 대응하는 등급을 문자열로 반환
// 100 ~ 90 : 'A'
// 89 ~ 80 : 'B'
// 79 ~ 70 : 'C'
// 69 ~ 60 : 'D'
// 59 ~ 0 : 'F'

// 점수의 1의 자리가 0~2 사이 : '-'
// 점수의 1의 자리가 8~9 사이 : '+'
// 100점 : '+'
// F+ 와 F- 는 존재하지 않음.


// 방법 1
function convertScoreToGradeWithPlusAndMinus(score){
    let char = '';
    if(score>100 || score<0){
        return "INVALID SCORE";
    }else if(score>=90){
        char = 'A';
    }else if(score>=80){
        char = 'B';
    }else if(score>=70){
        char = 'C';
    }else if(score>=60){
        char = 'D';
    }else{
        return 'F';
    }

    if(score === 100 || Number(String(score)[1]) >= 8){
        char = char + '+';
    }else if(Number(String(score)[1]) <= 2){
        char = char + '-';
    }    

    return char;
}

// 방법 2
// slice() 메서드 사용
function convertScoreToGradeWithPlusAndMinus(score){
    let grade;
    let one;
    if( score>100 || score<0 ){
        return "INVALID SCORE";
    }else if( score>=90 ){
        grade = 'A';
    }else if( score>=80 ){
        grade = 'B';
    }else if( score>=70 ){
        grade = 'C';
    }else if( score>=60 ){
        grade = 'D';
    }else{
        return 'F';
    }

    if( score === 100 ){
        return 'A+';
    }

    one = (score).toString().slice(1,1) * 1;
    if( one<=2 ){
        return grade + '-';
    }else if( one>=8 ){
        return grade + '+';
    }
}



// 방법 3 (내가 볼 때 제일 좋은 답안)
// plusOrMinus 메서드를 만듦
function plusOrMinus(score) {
  if (String(score)[1] <= 2) {
    return '-';
  }
  else if (String(score)[1] >= 8) {
    return '+';
  }
  else {
    return '';
  }
}

function convertScoreToGradeWithPlusAndMinus(score) {
  let grade;
  if (score > 100 || score < 0) {
    return 'INVALID SCORE';
  }
  if (score === 100) {
    return 'A+';
  }
  if (score >= 90) {
    grade = 'A';
  }
  else if (score >= 80) {
    grade = 'B';
  }
  else if (score >= 70) {
    grade = 'C';
  }
  else if (score >= 60) {
    grade = 'D';
  }
  else if (score >= 0) {
    grade = 'F';
  }

  if (grade !== 'F') {
    grade = grade + plusOrMinus(score);
  }
  return grade;
}
