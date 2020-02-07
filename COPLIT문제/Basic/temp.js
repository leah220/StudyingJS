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