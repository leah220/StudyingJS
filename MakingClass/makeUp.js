class MakeUp{
    constructor(name, age, tone){
      this.name = name;
      this.age = age;
      this.tone = tone;
      this.sytle;
      this.satisfaction = -1;
      this.skin = 'natural';
      this.eyebrowColor = 'natural';
      this.eyeshadowColor = 'natural';
      this.lipColor = 'natural';
      this.nail;
      this.hair;

      this.explanation = {
          'coolStudentMakeUp':"",
          'warmStudentMakeUp':"",
          'pinkMakeUp':"",
          'orangeMakeUp':"",
          'youngMakeUp':"",
          'sexyMakeUp':"",
          'elegantMakeUp':""
      };
    }
  
    welcome(){
      console.log(this.name+"님 어서오세요!");
      console.log("상담 중...");
      if(this.age>0 && this.age<14){
        console.log("죄송합니다, 중학교 이상 손님만 서비스 이용이 가능하십니다.");
      }else if(typeof this.age !== 'number' || !Number.isInteger(this.age) || this.age>=140){
        console.log("나이를 다시 입력해주세요. 회원정보수정(changingInformation)을 이용하세요.")
      }else if(!['쿨','cool','Cool','COOL','웜','warm','Warm','WARM'].includes(this.tone)){
        console.log("톤을 다시 입력해주세요. 회원정보수정(changingInformation)을 이용하세요.")
      }else{
        console.log("나이가 " + this.age + "세시고, 피부톤이 " + this.tone + "이시네요.");
        console.log("맞춤형 메이크업을 구상했습니다. 지금 메이크업하시겠어요?");  
      }
    }
  
    goodBye(){
      console.log("안녕히 가세요. 다음에 또 오세요!");
    }
  
    startMakeUp(){
      if(this.age<19){
          console.log("청순한 학생 메이크업을 해드릴게요.");
          if(this.tone.indexOf("쿨") !== -1 || this.tone.indexOf('cool') !== -1 || this.tone.indexOf('Cool') !== -1 || this.tone.indexOf('COOL') !== -1 ){
              this.style = 'coolStudentMakeUp';
              return coolStudentMakeUp;
          }else if(this.tone.indexOf("웜") !== -1 || this.tone.indexOf('warm') !== -1 || this.tone.indexOf('Warm') !== -1 || this.tone.indexOf('WARM') !== -1 ){
              this.style = 'warmStudentMakeUp';
              return warmStudentMakeUp;
          }
      }else if(this.age<27){
        console.log("인생리즈 메이크업을 해드릴게요.");
        if(this.tone.indexOf("쿨") !== -1 || this.tone.indexOf('cool') !== -1 || this.tone.indexOf('Cool') !== -1 || this.tone.indexOf('COOL') !== -1 ){
            console.log("핑크빛이 도는 사랑스러운 메이크업을 할거에요!");
            this.style = 'pinkMakeUp';
            return pinkMakeUp;
        }else if(this.tone.indexOf("웜") !== -1 || this.tone.indexOf('warm') !== -1 || this.tone.indexOf('Warm') !== -1 || this.tone.indexOf('WARM') !== -1 ){
            console.log("통통 튀는 오렌지 메이크업을 할거에요!");
            this.style = 'orangeMakeUp';
            return orangeMakeUp;
        }
      }else if(this.age<35){
        if(this.tone.indexOf("쿨") !== -1 || this.tone.indexOf('cool') !== -1 || this.tone.indexOf('Cool') !== -1 || this.tone.indexOf('COOL') !== -1 ){
            console.log("장나라처럼 어려보이는 동안 메이크업을 해드릴게요.");
            this.style = 'youngMakeUp';
            return youngMakeUp;
        }else if(this.tone.indexOf("웜") !== -1 || this.tone.indexOf('warm') !== -1 || this.tone.indexOf('Warm') !== -1 || this.tone.indexOf('WARM') !== -1 ){
            console.log("이효리처럼 치명적인 섹시 메이크업을 해드릴게요.");
            this.style = 'sexyMakeUp';
            return sexyMakeUp;
        }
      }else{
        console.log("절저된 우아미가 있는 메이크업을 해드릴게요.");
        this.style = 'elegantMakeUp';
        return elegantMakeUp;
      }
    }
  
    finishMakeUp(){
      // 스타일리뷰
      // 메이크업은 마음에 드시나요? 만족도를 평가해주세요. (0~100)
    }
  
    changingInformation(age, tone){
      this.age = age;
      this.tone = tone;
      console.log("나이가 "+this.age+"살로, 피부톤이 "+ this.tone +"으로 수정되었습니다.");
      console.log("이름은 수정할 수 없습니다.")
    }

    coolStudentMakeUp(){
    }

    warmStudentMakeUp(){

    }

    pinkMakeUp(){

    }

    orangeMakeUp(){

    }

    youngMakeUp(){

    }

    sexyMakeUp(){

    }

    elegantMakeUp(){

    }

  }