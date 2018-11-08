
                                                                        // order

    $('#btn8').click(function() {
        $('.bookitpopap1').fadeIn(300);
        $('.popup_container').css('display', 'none');
        $('body').css('overflow','hidden');
    });

    $('#btn9').click(function() {
        $('.bookitpopap2').fadeIn(300);
        $('.popup_container2').css('display', 'none');
        $('body').css('overflow','hidden');
    });

    $('#btn10').click(function() {
        $('.bookitpopap3').fadeIn(300);
        $('.popup_container3').css('display', 'none');
        $('body').css('overflow','hidden');
    });

    $('.btn4').click(function() {
        $('.bookitpopap1').fadeIn(300);
        $('body').css('overflow','hidden');
    });

    $('.btn5').click(function() {
        $('.bookitpopap2').fadeIn(300);
        $('body').css('overflow','hidden');
    });

    $('.btn6').click(function() {
        $('.bookitpopap3').fadeIn(300);
        $('body').css('overflow','hidden');
    });

    $('.btn7').click(function() {
        $('.bookitpopap4').fadeIn(300);
        $('body').css('overflow','hidden');
    });

    $('.closebookit1').click(function() {
        $('.bookitpopap1').css('display', 'none');
        $('body').css('overflow','visible');
    });

    $('.closebookit2').click(function() {
        $('.bookitpopap2').css('display', 'none');
        $('body').css('overflow','visible');
    });


    $('.closebookit3').click(function() {
        $('.bookitpopap3').css('display', 'none');
        $('body').css('overflow','visible');
    });

    $('.closebookit4').click(function() {
        $('.bookitpopap4').css('display', 'none');
        $('body').css('overflow','visible');
    });
                                                                        // call me


    $('#btncall').click(function() {
        $('#openModal2').fadeIn(300);
        $('body').css('overflow','hidden');
    });

    $('#btncalladapt').click(function() {
        $('#openModal2').fadeIn(300);
        $('body').css('overflow','hidden');
    });

    $('#close2').click(function() {
        $('#openModal2').css('display', 'none');
        $('body').css('overflow','visible');
    });
                                                                        // contacts

    // $('#btncont').click(function() {
    //     $('#openModal4').fadeIn(300);
    //     $('body').css('overflow','hidden');
    // });

    // $('#close4').click(function() {
    //     $('#openModal4').css('display', 'none');
    //     $('body').css('overflow','visible');
    // });

                                                                            // faq modal


    $('#block1').click(function() {
        $('#openModal11').fadeIn(300);
        $('body').css('overflow','hidden');
    });

    $('#block2').click(function() {
        $('#openModal12').fadeIn(300);
        $('body').css('overflow','hidden');
    });

    $('#block3').click(function() {
        $('#openModal13').fadeIn(300);
        $('body').css('overflow','hidden');
    });

    $('#block4').click(function() {
        $('#openModal14').fadeIn(300);
        $('body').css('overflow','hidden');
    });

    $('#block5').click(function() {
        $('#openModal15').fadeIn(300);
        $('body').css('overflow','hidden');
    });

    $('#block6').click(function() {
        $('#openModal16').fadeIn(300);
        $('body').css('overflow','hidden');
    });

    $('#block7').click(function() {
        $('#openModal17').fadeIn(300);
        $('body').css('overflow','hidden');
    });

    $('#block8').click(function() {
        $('#openModal18').fadeIn(300);
        $('body').css('overflow','hidden');
    });

    $('#block9').click(function() {
        $('#openModal19').fadeIn(300);
        $('body').css('overflow','hidden');
    });

    $('#block10').click(function() {
        $('#openModal20').fadeIn(300);
        $('body').css('overflow','hidden');
    });

    $('#block11').click(function() {
        $('#openModal21').fadeIn(300);
        $('body').css('overflow','hidden');
    });

    $('#block12').click(function() {
        $('#openModal22').fadeIn(300);
        $('body').css('overflow','hidden');
    });

    $('#block13').click(function() {
        $('#openModal23').fadeIn(300);
        $('body').css('overflow','hidden');
    });

    $('#block14').click(function() {
        $('#openModal24').fadeIn(300);
        $('body').css('overflow','hidden');
    });

    $('#block15').click(function() {
        $('#openModal25').fadeIn(300);
        $('body').css('overflow','hidden');
    });

    $('.close1').click(function() {
        $('.closemodal').css('display', 'none');
        $('body').css('overflow','visible');
    });


                                                                            // more info modal

    $('.elem').click(function() {
        $('.popup_container').fadeIn(300);
        $('body').css('overflow','hidden');
    });
    
    $('.closejq').click(function(){
        $('.popup_container').css('display', 'none');
        $('body').css('overflow','visible');
    });

    $('.elem2').click(function() {
        $('.popup_container2').fadeIn(300);
        $('body').css('overflow','hidden');
    });
    
    $('.closejq2').click(function(){
        $('.popup_container2').css('display', 'none');
        $('body').css('overflow','visible');
    });

    $('.elem3').click(function() {
        $('.popup_container3').fadeIn(300);
        $('body').css('overflow','hidden');
    });
    
    $('.closejq3').click(function(){
        $('.popup_container3').css('display', 'none');
        $('body').css('overflow','visible');
    });
    

                                                                // header menu

    $('.header__menu a').click(function() {
        event.preventDefault();
        var e = $(this).attr("href"),
        t = $(e).offset().top;
        $("body,html").animate({
            scrollTop: t
        }, 1500)

    });