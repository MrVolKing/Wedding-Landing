
                                                                        // order
    var btn_order1 = document.getElementById("btn4");
    var btn_order2 = document.getElementById("btn5");
    var btn_order3 = document.getElementById("btn6");
    var btn_order4 = document.getElementById("btn7");
    var openModal3 = document.getElementById("openModal3"); 
    var close3 = document.getElementById("close3");

    btn_order1.addEventListener('click', () => {
        openModal3.classList.add('modalDialogcustomactive');
    });

    btn_order2.addEventListener('click', () => {
        openModal3.classList.add('modalDialogcustomactive');
    });

    btn_order3.addEventListener('click', () => {
        openModal3.classList.add('modalDialogcustomactive');
    });

    btn_order4.addEventListener('click', () => {
        openModal3.classList.add('modalDialogcustomactive');
    });

    close3.addEventListener('click', () => {
        openModal3.classList.remove('modalDialogcustomactive');
    });

                                                                        // call me

    var btncall = document.getElementById("btncall");
    var openModa2 = document.getElementById("openModal2");
    var close2 = document.getElementById("close2");

    btncall.addEventListener('click', () => {
        openModal2.classList.add('modalDialogcustomactive'); 
    });  

    close2.addEventListener('click', () => {
        openModal2.classList.remove('modalDialogcustomactive');
    });

                                                                        // contacts

    var btncont = document.getElementById("btncont");
    var openModa4 = document.getElementById("openModal4");
    var close4 = document.getElementById("close4");

    btncont.addEventListener('click', () => {
        openModal4.classList.add('modalDialogcustomactive');  
    });  

    close4.addEventListener('click', () => {
        openModal4.classList.remove('modalDialogcustomactive');
    });

                                                                            // faq modal

    var block1 = document.getElementById("block1");
    var block2 = document.getElementById("block2");
    var block3 = document.getElementById("block3");
    var block4 = document.getElementById("block4");
    var block5 = document.getElementById("block5");
    var block6 = document.getElementById("block6");
    var block7 = document.getElementById("block7");
    var block8 = document.getElementById("block8");
    var block9 = document.getElementById("block9");
    var block10 = document.getElementById("block10");
    var openModal11 = document.getElementById("openModal11");
    var openModal12 = document.getElementById("openModal12");
    var openModal13 = document.getElementById("openModal13");
    var openModal14 = document.getElementById("openModal14");
    var openModal15 = document.getElementById("openModal15");
    var openModal16 = document.getElementById("openModal16");
    var openModal17 = document.getElementById("openModal17");
    var openModal18 = document.getElementById("openModal18");
    var openModal19 = document.getElementById("openModal19");
    var openModal20 = document.getElementById("openModal20");
    var close11 = document.getElementById("close11");


    block1.addEventListener('click', () => {
        openModal11.classList.add('modalDialogcustomactive');
    });

    block2.addEventListener('click', () => {
        openModal12.classList.add('modalDialogcustomactive');
    });

    block3.addEventListener('click', () => {
        openModal13.classList.add('modalDialogcustomactive');
    });

    block4.addEventListener('click', () => {
        openModal14.classList.add('modalDialogcustomactive');
    });

    block5.addEventListener('click', () => {
        openModal15.classList.add('modalDialogcustomactive');
    });

    block6.addEventListener('click', () => {
        openModal16.classList.add('modalDialogcustomactive');
    });

    block7.addEventListener('click', () => {
        openModal17.classList.add('modalDialogcustomactive');
    });

    block8.addEventListener('click', () => {
        openModal18.classList.add('modalDialogcustomactive');
    });

    block9.addEventListener('click', () => {
        openModal19.classList.add('modalDialogcustomactive');
    });

    block10.addEventListener('click', () => {
        openModal20.classList.add('modalDialogcustomactive');
    });

    close11.addEventListener('click', () => {
        openModal11.classList.remove('modalDialogcustomactive');
        
    });

    close19.addEventListener('click', () => {
        openModal19.classList.remove('modalDialogcustomactive');
        
    });

    close20.addEventListener('click', () => {
        openModal20.classList.remove('modalDialogcustomactive');
        
    });

    close12.addEventListener('click', () => {
        openModal12.classList.remove('modalDialogcustomactive');
        
    });

    close13.addEventListener('click', () => {
        openModal13.classList.remove('modalDialogcustomactive');
        
    });

    close14.addEventListener('click', () => {
        openModal14.classList.remove('modalDialogcustomactive');
        
    });

    close15.addEventListener('click', () => {
        openModal15.classList.remove('modalDialogcustomactive');
        
    });

    close16.addEventListener('click', () => {
        openModal16.classList.remove('modalDialogcustomactive');
        
    });

    close17.addEventListener('click', () => {
        openModal17.classList.remove('modalDialogcustomactive');
        
    });

    close18.addEventListener('click', () => {
        openModal18.classList.remove('modalDialogcustomactive');
        
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
    