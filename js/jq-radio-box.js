
//학습과정
$(document).ready(function () {

    var $lectures = $('.lectures'),
        $lecturesTab = $lectures.find('input[name="lectures-title"]'),
        $checkedTab = $lectures.find('input[name="lectures-title"]:checked'),
        $marginTop = 14, // .pannel__box의 padding-top 값 + 2
        $lecturesPannel = $lectures.find('.pannel'),
        $pannelBox = $lecturesPannel.find('.pannel__box'),
        $boxHeight = $pannelBox.height(),
        $defaultValue = $checkedTab.val();


    // 학습과정 - 과정 타이틀 클릭
    $lecturesTab.on('click', function () {
        $checkedTab = $lectures.find('input[name="lectures-title"]:checked');
        // var $currentValue = $checkedTab.val();

        $currentTitle = $checkedTab.parents('.label').attr('for');
        $currentPannel = $lecturesPannel.find('div.' + $currentTitle);
        $pannelHeight = $currentPannel.height();

        $pannelBox.hide();
        $lecturesPannel.css('height', $pannelHeight + $marginTop).find($currentPannel).fadeIn(100);

        //과정 타이틀명 클릭시 세부메뉴는 가장 첫번째가 선택되도록
        $currentPannel.find('label').eq(0).children('input[name="level-title"]').prop('checked', true);


        // console.log($currentValue);

    });
    pannelInit();

    //페이지 실행됐을때 가장 첫번째 판넬 보여지도록
    function pannelInit() {
        $pannelBox.eq(0).show();
        $lecturesPannel.height($boxHeight + $marginTop);

        // console.log($defaultValue);
    }

}); //학습과정 END





//수강기간
$(document).ready(function () {

    var $term = $('.term'),
        $termTab = $term.find('input[name="term-title"]'),
        $checkedTab = $term.find('input[name="term-title"]:checked'),
        $marginTop = 14, // .pannel__box의 padding-top 값 + 2
        $lecturesPannel = $term.find('.pannel'),
        $pannelBox = $lecturesPannel.find('.pannel__box'),
        $boxHeight = $pannelBox.height();


    // 학습과정 - 과정 타이틀 클릭
    $termTab.on('click', function () {
        $checkedTab = $term.find('input[name="term-title"]:checked');

        $currentTitle = $checkedTab.parents('.label').attr('for');
        $currentPannel = $lecturesPannel.find('div.' + $currentTitle);
        $pannelHeight = $currentPannel.height();

        $pannelBox.hide();
        $lecturesPannel.css('height', $pannelHeight + $marginTop).find($currentPannel).fadeIn(100);

    });

    pannelInit();

    //페이지 실행됐을때 가장 첫번째 판넬 보여지도록
    function pannelInit() {
        $pannelBox.eq(0).show();
        $lecturesPannel.height($boxHeight + $marginTop);
    }

}); //수강기간 END


//결제정보 창 스크롤 내릴때 position fixed
$(document).ready(function () {
    var $headerHeight = $('.header').height(),
        $headerBannerHeight = $('.header-banner').height(),
        $fixedStartOffset = $headerHeight + $headerBannerHeight,
        $fixedEndOffset = $('.footer').offset().top,
        $invoice = $('.invoice');

    // console.log('end scroll: ' + $fixedEndOffset);

    $(window).on('scroll', function () {
        // console.log('window scroll: ' + $(this).scrollTop());

        if ($(this).scrollTop() > $fixedStartOffset && $(this).scrollTop() < $fixedEndOffset) {
            $invoice.css({ 'position': 'fixed', 'left': '50%', 'margin-left': 162 });
        } else {
            $invoice.css('position', '');
        }
    });
});