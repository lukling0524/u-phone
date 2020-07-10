const lectures = document.querySelector('.lectures'),
    lectureInpuptRadio = lectures.querySelectorAll('.radio-input'),
    lectureBtn = lectures.querySelectorAll('.btn'),
    btnText = lectures.querySelectorAll('.btn__text'),
    onClass = 'on',
    pannel = document.querySelector('.pannel'),
    pannelBox = pannel.querySelectorAll('.pannel__box');


//학습과정 - 과정 타이틀명 클릭
for (let i = 0; i < lectureInpuptRadio.length; i++) {
    lectureBtn[i].addEventListener('click', function () {

        console.log(lectureBtn[i]);

        checkedValue();
        lecturePannel();
    });
}
checkedValue();
lecturePannelInit();

function checkedValue() {
    for (let i = 0; i < lectureInpuptRadio.length; i++) {
        if (lectureInpuptRadio[i].checked) {
            currentValue = lectureInpuptRadio[i].value;

            console.log('current value: ' + currentValue);
            break;
        }
    }
}

//학습과정 - 과정 타이틀명 클릭 후 서브메뉴 
function lecturePannelInit() {
    pannelBox[0].style.display = 'block'
    pannelHeight = pannelBox[0].offsetHeight;
    pannel.style.height = pannelHeight + 'px';
}
function lecturePannel() {
    for (let i = 0; i < pannelBox.length; i++) {
        pannelBox[i].style.display = 'block'
        pannelHeight = pannelBox[i].offsetHeight;
        pannel.style.height = pannelHeight + 'px';
    }

}



