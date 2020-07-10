$(document).ready(function () {

    var $invoice = $('.invoice'),
        $originalPrice = $invoice.find('.js-original-price'),
        $discountedPriceMinus = $invoice.find('.js-discounted-price-minus'),
        $discountedPrice = $invoice.find('.js-discounted-price'),
        $actualPrice = $invoice.find('.js-actual-price'),
        $pricePerMonth = $invoice.find('.js-actual-price-per-month');

    var $monthTab = $('.term').find('input[name="month-title"]'),
        $price;



    $('.time-zone .btn').on('click', function () {
        if ($('input[id="min-10"]').is(':checked')) {

            if ($(this).is('.js-zone-a-2')) {
                $price = 92000;
            } else if ($(this).is('.js-zone-a-3')) {
                $price = 102000;
            } else if ($(this).is('.js-zone-a-5')) {
                $price = 132000;
            }

            else if ($(this).is('.js-zone-b-2')) {
                $price = 82000;
            } else if ($(this).is('.js-zone-b-3')) {
                $price = 92000;
            } else if ($(this).is('.js-zone-b-5')) {
                $price = 122000;
            }

            else if ($(this).is('.js-zone-c-2')) {
                $price = 76000;
            } else if ($(this).is('.js-zone-c-3')) {
                $price = 86000;
            } else if ($(this).is('.js-zone-c-5')) {
                $price = 116000;
            }

            else if ($(this).is('.js-zone-limited')) {
                $price = 230000;
            }

            setOriginalPrice();
            setDiscountPrice();
            setActualPrice();

        }


        else if ($('input[id="min-20__weekend"]').is(':checked')) {

            if ($(this).is('.js-zone-a-2')) {
                $price = 92000;
            } else if ($(this).is('.js-zone-a-3')) {
                $price = 102000;
            } else if ($(this).is('.js-zone-a-5')) {
                $price = 132000;
            }

            else if ($(this).is('.js-zone-b-2')) {
                $price = 82000;
            } else if ($(this).is('.js-zone-b-3')) {
                $price = 92000;
            } else if ($(this).is('.js-zone-b-5')) {
                $price = 122000;
            }

            else if ($(this).is('.js-zone-c-2')) {
                $price = 76000;
            } else if ($(this).is('.js-zone-c-3')) {
                $price = 86000;
            } else if ($(this).is('.js-zone-c-5')) {
                $price = 116000;
            }

            else if ($(this).is('.js-zone-limited')) {
                $price = 230000;
            }

            setOriginalPrice();
            setDiscountPrice();
            setActualPrice();

        }







    });

    $monthTab.on('click', function () {
        // showBtnPrice();
        // test();
    });






    function numberFormat(inputNumber) {
        return inputNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    //결제정보 - 주문금액
    function setOriginalPrice() {
        $originalPrice.text(numberFormat($price) + '원');
    }

    //결제정보 - 할인금액
    function setDiscountPrice() {
        $discount = $price * (10 / 100);
        $discountedPriceMinus.text('-' + numberFormat($discount) + '원');
        $discountedPrice.text(numberFormat($discount) + '원');
    }

    //결제정보 - 실결제금액
    function setActualPrice() {
        $result = $price - $discount;
        $actualPrice.text(numberFormat($result) + '원');
        $pricePerMonth.text(numberFormat('월 ' + $result) + '원');
    }


    function showBtnPrice() {
        $btn = $('.time-zone .btn');

        if ($btn.is('.js-zone-a-2')) {
            $price = 92000;
        } else if ($btn.is('.js-zone-a-3')) {
            $price = 102000;
        } else if ($btn.is('.js-zone-a-5')) {
            $price = 132000;
        }

        else if ($btn.is('.js-zone-b-2')) {
            $price = 82000;
        } else if ($btn.is('.js-zone-b-3')) {
            $price = 92000;
        } else if ($btn.is('.js-zone-b-5')) {
            $price = 122000;
        }

        else if ($btn.is('.js-zone-c-2')) {
            $price = 76000;
        } else if ($btn.is('.js-zone-c-3')) {
            $price = 86000;
        } else if ($btn.is('.js-zone-c-5')) {
            $price = 116000;
        }

        else if ($btn.is('.js-zone-limited')) {
            $price = 230000;
        }

        setOriginalPrice();
        setDiscountPrice();
        setActualPrice();


        var btnPrice = $('.btn .price')
        $result = $price - $discount;



        $btn.each(function () {

            $(btnPrice).text(numberFormat($result));
        });

    }





    // function test() {
    //     $btn = $('.time-zone .btn');

    //     if ($btn.is('.js-zone-a-2')) {
    //         $price = 92000;
    //     } else if ($btn.is('.js-zone-a-3')) {
    //         $price = 102000;
    //     } else if ($btn.is('.js-zone-a-5')) {
    //         $price = 132000;
    //     }

    //     else if ($btn.is('.js-zone-b-2')) {
    //         $price = 82000;
    //     } else if ($btn.is('.js-zone-b-3')) {
    //         $price = 92000;
    //     } else if ($btn.is('.js-zone-b-5')) {
    //         $price = 122000;
    //     }

    //     else if ($btn.is('.js-zone-c-2')) {
    //         $price = 76000;
    //     } else if ($btn.is('.js-zone-c-3')) {
    //         $price = 86000;
    //     } else if ($btn.is('.js-zone-c-5')) {
    //         $price = 116000;
    //     }

    //     else if ($btn.is('.js-zone-limited')) {
    //         $price = 230000;
    //     }

    //     setOriginalPrice();
    //     setDiscountPrice();
    //     setActualPrice();

    // }



    // }





}); //document END




// var time = $('.time-zone'),
//     timeBtn = time.find('input[name="time-zone-title"]');

// timeBtn.on('click', function () {
//     var i = $(this).index();
//     console.log(i);
// });

