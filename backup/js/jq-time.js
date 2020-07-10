$(document).ready(function () {

    var $minTab = $('.term').find('input[name="term-title"]'),
        $monthTab = $('.term').find('input[name="month-title"]'),
        $invoice = $('.invoice'),
        $month = $invoice.find('.js-month'),
        $min = $invoice.find('.js-min');





    var i = $('.term .pannel__box').find('input[name="month-title"]:checked').parent().index();
    console.log('default index: ' + (i + 1));




    //수강기간 선택 탭
    $minTab.on('click', function () {
        termAndCount();


        // if ($monthIndex > 3) { $monthIndex %= 4; }
        // $monthFixedTab.parent('label').eq($monthIndex).children('input[name="month-title"]').prop('checked', true);
        // console.log(' mon fixed: ' + ($monthIndex + 1));

        //고정시킬 n개월 탭
        $monthFixedTab = $('.term .pannel__box').find('input[name="month-title"]');

        var i = $('.term .pannel__box').find('input[name="month-title"]:checked').parent().index();

        $('.label').eq(i).find($monthFixedTab).prop('checked', true);

    });


    $monthTab.on('click', function () {
        termAndCount();

        var index = $('input[name="month-title"]').index();
        console.log(index);
    });



    //수강기간 탭
    function termAndCount() {
        //선택된 평일 n분 탭
        $minTab = $('.term').find('input[name="term-title"]:checked');

        //선택된 n개월 탭
        $monthTab = $('.term .pannel__box').find('input[name="month-title"]:checked');

        //선택된  n개월 탭의 인덱스
        $monthIndex = $monthTab.parent().index();



        //분, 월 리턴값
        $currentMin = $minTab.val();
        $currentMonth = $monthTab.val();
        //결제정보에 출력
        $min.text($currentMin);
        $month.text($currentMonth);


        console.log(' 직접클릭 n개월 인덱스: ' + ($monthIndex + 1));


    }























}); // document END