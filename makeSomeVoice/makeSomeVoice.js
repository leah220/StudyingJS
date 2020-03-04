// id, class 붙이기
let prosBtn = document.querySelector('#prosBtn');
let consBtn = document.querySelector('#consBtn');
let username = document.querySelector('#username');
let comment = document.querySelector('#comment');
let speakBtn = document.querySelector('#speakBtn');
let prosNum = document.querySelector('#prosNum');
let consNum = document.querySelector('#consNum');
let commentNum = document.querySelector('#commentNum');

// li가 늘어나면 commentNum++
// Pros(n) 누르면 Pros 의견만 filtering  // Cons(n) 누르면 Cons 의견만 filtering
// commentNum 누르면 전체 의견보기
// id를 화면에 print할때 4번째 자리부터 ****로 대체

var DATA = [
    { userId : 'meaghan', userPosition : 'Pros', userComment : "솔직히 선인장 말려죽여본 사람, 많잖아?", createdAt : '2020-01-01 00:12:36' },
    { userId : 'dior', userPosition : 'Cons', userComment : "선인장은 물을 안 줘서 죽기보다 물을 많이 줘서 죽는 게 더 많아.", createdAt : '2020-01-01 00:13:36' },
    { userId : 'adalee', userPosition : 'Pros', userComment : "물은 생명이다.", createdAt : '2020-01-01 23:12:36'} ,
    { userId : 'liam', userPosition : 'Cons', userComment : "싫다는데 왜 자꾸 먹여", createdAt : '2020-01-02 07:57:01' },
    { userId : 'noah', userPosition : 'Cons', userComment : "옳소, 자유민주주의를 따릅시다. 우리는 선인장 말도 들어봐야 한다.", createdAt : '2020-01-02 08:00:36' },
    { userId : 'elijah', userPosition : 'Pros', userComment : "아니 선인장도 물을 아예 안주면 죽는다니까?", createdAt : '2020-01-03 16:41:44' }
];


console.log(DATA);
console.table(DATA);

// 기존 의견 달기
let commentList = document.querySelector('#commentList');
let template = document.querySelector('#template');

for(let i=0 ; i<DATA.length ; i++){
    let newComment = document.importNode(template.content,true);
    newComment.querySelector('.userId').textContent = DATA[i]['userId'];
    newComment.querySelector('.userPosition').textContent = DATA[i]['userPosition'];
    if(newComment.querySelector('.userPosition').textContent === 'Pros'){
        newComment.querySelector('.userPosition').classList.add('pros');
    }else if(newComment.querySelector('.userPosition').textContent === 'Cons'){
        newComment.querySelector('.userPosition').classList.add('cons');
    }
    newComment.querySelector('.userComment').textContent = DATA[i]['userComment'];
    newComment.querySelector('.createdAt').textContent = DATA[i]['createdAt'];

    commentList.prepend(newComment);
    commentList.appendChild(newComment);
}

// ProsBtn 누르고 SpeakBtn 누르면 Pros(n++)  // ConsBtn 누르고 SpeakBtn 누르면 Cons(n++)
// SpeakBtn 누르면 username 초기화, comment 초기화
// SpeakBtn 누르면 ul에 li 추가

prosBtn.onclick = function() {
    if(document.querySelector('#consBtn').classList.contains('pressed')){
        document.querySelector('#consBtn').classList.remove('pressed');
        document.querySelector('#consBtn').classList.add('prosVScons');    
    }
    document.querySelector('#prosBtn').classList.remove('prosVScons');
    document.querySelector('#prosBtn').classList.add('pressed');
}

consBtn.onclick = function() {
    if(document.querySelector('#prosBtn').classList.contains('pressed')){
        document.querySelector('#prosBtn').classList.remove('pressed');
        document.querySelector('#prosBtn').classList.add('prosVScons');
        }
    document.querySelector('#consBtn').classList.remove('prosVScons');    
    document.querySelector('#consBtn').classList.add('pressed');
}

function prosPlus() {

}

speakBtn.onclick = function() {
    
}