
$(document).ready(function () {


    var $titleTab = $('.lectures').find('input[name="lectures-title"]'),
        $subTab = $('.lectures').find('input[name="level-title"]'),
        $minTab = $('.term').find('input[name="term-title"]'),
        $monthTab = $('.term').find('input[name="month-title"]');

    //학습과정 탭 클릭할때 결제정보창 이미지, 타이틀, 레벨 변경
    $titleTab.on('click', function () {
        changeInvoiceImg();
        titleAndLevel();
    });
    $subTab.on('click', function () {
        changeInvoiceImg();
        titleAndLevel();
    });





    var $invoice = $('.invoice'),
        $title = $invoice.find('.js-title'),
        $level = $invoice.find('.js-level'),
        $count = $invoice.find('.js-count'),
        $month = $invoice.find('.js-month'),
        $min = $invoice.find('.js-min'),
        $originalPrice = $invoice.find('.js-original-price'),
        $discountedPriceMinus = $invoice.find('.js-discounted-price-minus'),
        $discountedPrice = $invoice.find('.js-discounted-price'),
        $actualPrice = $invoice.find('.js-actual-price'),
        $pricePerMonth = $invoice.find('.js-actual-price-per-month');



    //학습과정 탭 클릭할때 결제정보창 타이틀과 레벨 변경
    function titleAndLevel() {
        $lectureTab = $('.lectures').find('input[name="level-title"]:checked');
        $currentTitle = $lectureTab.val();
        $currentLevel = $lectureTab.next().find('.btn__level').text();

        $title.text($currentTitle);
        $level.text($currentLevel);
    }





    //학습과정 탭 클릭할때 결제정보창 이미지 변경
    function changeInvoiceImg() {
        $checkedTab = $('.lectures').find('input[name="level-title"]:checked'),
            $img = $('.invoice__header img');


        if ($checkedTab.hasClass('basic')) {
            //기본과정
            $img.attr('src', 'images/lectures/img_card_06.png');
        }

        else if ($checkedTab.hasClass('beginner')) {
            //기초다지기 - 기초회화
            $img.attr('src', 'images/lectures/img_card_01.png');

        } else if ($checkedTab.hasClass('beginner-verb')) {
            //기초다지기 - 기초동사
            $img.attr('src', 'images/lectures/img_card_02.png');

        } else if ($checkedTab.hasClass('beginner-grammar')) {
            //기초다지기 - 기초문법
            $img.attr('src', 'images/lectures/img_card_03.png');

        } else if ($checkedTab.hasClass('beginner-expression')) {
            //기초다지기 - 기초표현
            $img.attr('src', 'images/lectures/img_card_23.png');

        }

        else if ($checkedTab.hasClass('normal')) {
            //정규회화 - level 1~2
            $img.attr('src', 'images/lectures/img_card_04.png');

        } else if ($checkedTab.hasClass('normal-3')) {
            //정규회화 - level 3~4
            $img.attr('src', 'images/lectures/img_card_05.png');

        } else if ($checkedTab.hasClass('normal-5')) {
            //정규회화 - level 5~6
            $img.attr('src', 'images/lectures/img_card_06.png');

        } else if ($checkedTab.hasClass('normal-7')) {
            //정규회화 - level 7~8
            $img.attr('src', 'images/lectures/img_card_07.png');

        } else if ($checkedTab.hasClass('normal-9')) {
            //정규회화 - level 9~10
            $img.attr('src', 'images/lectures/img_card_08.png');

        } else if ($checkedTab.hasClass('normal-11')) {
            //정규회화 - level 11~12
            $img.attr('src', 'images/lectures/img_card_09.png');

        }

        else if ($checkedTab.hasClass('free-talking-7')) {
            //프리토킹 - 토픽 level 7~8
            $img.attr('src', 'images/lectures/img_card_10.png');

        } else if ($checkedTab.hasClass('free-talking-9')) {
            //프리토킹 - 토픽 level 9~10
            $img.attr('src', 'images/lectures/img_card_11.png');

        } else if ($checkedTab.hasClass('free-talking-11')) {
            //프리토킹 - 토론 level 11~12
            $img.attr('src', 'images/lectures/img_card_12.png');

        }

        else if ($checkedTab.hasClass('news-newspaper')) {
            //뉴스미디어 - 영자신문 level 5~12
            $img.attr('src', 'images/lectures/img_card_13.png');

        } else if ($checkedTab.hasClass('news-media-1')) {
            //뉴스미디어 - 미디어 잉글리쉬 level 1~4
            $img.attr('src', 'images/lectures/img_card_14.png');

        } else if ($checkedTab.hasClass('news-media-5')) {
            //뉴스미디어 - 미디어 잉글리쉬 level 5~8
            $img.attr('src', 'images/lectures/img_card_15.png');

        } else if ($checkedTab.hasClass('news-media-9')) {
            //뉴스미디어 - 미디어 잉글리쉬 level 9~12
            $img.attr('src', 'images/lectures/img_card_16.png');

        } else if ($checkedTab.hasClass('news-animal')) {
            //뉴스미디어 - 추억의 동화 동물편 level 3~4
            $img.attr('src', 'images/lectures/img_card_33.png');

        } else if ($checkedTab.hasClass('news-people')) {
            //뉴스미디어 - 추억의 동화 인물편 level 3~4
            $img.attr('src', 'images/lectures/img_card_34.png');

        } else if ($checkedTab.hasClass('news-celebrity')) {
            //뉴스미디어 - 셀럽이야기 level 5~8
            $img.attr('src', 'images/lectures/img_card_35.png');

        }


        else if ($checkedTab.hasClass('business-interview')) {
            //비즈니스 - 영어면접 첫걸음 level 3~6
            $img.attr('src', 'images/lectures/img_card_36.png');

        } else if ($checkedTab.hasClass('business-tip')) {
            //비즈니스 - 직장생활 꿀팁 level 5~8
            $img.attr('src', 'images/lectures/img_card_37.png');

        } else if ($checkedTab.hasClass('business-call-5')) {
            //비즈니스 - 비즈니스 전화 level 5~8
            $img.attr('src', 'images/lectures/img_card_20.png');

        } else if ($checkedTab.hasClass('business-call-7')) {
            //비즈니스 - 비즈니스 전화 level 7~10
            $img.attr('src', 'images/lectures/img_card_20.png');

        } else if ($checkedTab.hasClass('business-email-5')) {
            //비즈니스 - 비즈니스 이메일 level 5~8
            $img.attr('src', 'images/lectures/img_card_22.png');

        } else if ($checkedTab.hasClass('business-email-7')) {
            //비즈니스 - 비즈니스 전화 level 7~10
            $img.attr('src', 'images/lectures/img_card_22.png');

        } else if ($checkedTab.hasClass('business-meeting')) {
            //비즈니스 - 비즈니스 미팅 level 5~8
            $img.attr('src', 'images/lectures/img_card_30.png');

        } else if ($checkedTab.hasClass('business-pt')) {
            //비즈니스 - 프레젠테이션 level 5~8
            $img.attr('src', 'images/lectures/img_card_24.png');

        }


        else if ($checkedTab.hasClass('goal-working-holi')) {
            //목표달성 - 워킹홀리데이 level 5~6
            $img.attr('src', 'images/lectures/img_card_28.png');

        } else if ($checkedTab.hasClass('goal-study-abroad')) {
            //목표달성 - 어학연수 level 1~4
            $img.attr('src', 'images/lectures/img_card_21.png');

        } else if ($checkedTab.hasClass('goal-interview')) {
            //목표달성 - 인터뷰 level 5~12
            $img.attr('src', 'images/lectures/img_card_17.png');

        } else if ($checkedTab.hasClass('goal-toeic')) {
            //목표달성 - 토익스피킹 level 5~12
            $img.attr('src', 'images/lectures/img_card_18.png');

        } else if ($checkedTab.hasClass('goal-opic-1')) {
            //목표달성 - 오픽 초급 level 1~4
            $img.attr('src', 'images/lectures/img_card_19.png');

        } else if ($checkedTab.hasClass('goal-opic-5')) {
            //목표달성 - 오픽 중급 level 5~8
            $img.attr('src', 'images/lectures/img_card_19.png');

        } else if ($checkedTab.hasClass('goal-opic-9')) {
            //목표달성 - 오픽 고급 level 9~12
            $img.attr('src', 'images/lectures/img_card_19.png');

        }


        else if ($checkedTab.hasClass('trip-3')) {
            //여행영어 - level 3~4
            $img.attr('src', 'images/lectures/img_card_31.png');

        } else if ($checkedTab.hasClass('trip-5')) {
            //여행영어 - level 5~6
            $img.attr('src', 'images/lectures/img_card_31.png');

        }

    }

}); //document END






