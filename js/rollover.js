$(document).ready(function(){
        $("#image-01").mouseover(function(){
        $("#pop-up-01").show('slow');
    });
        $("#image-01").mouseout(function(){
        $("#pop-up-01").hide('slow');
    });
});

$(document).ready(function(){
        $("#image-02").mouseover(function(){
        $("#pop-up-02").show('slow');
    });
        $("#image-02").mouseout(function(){
        $("#pop-up-02").hide('slow');
    });
});

$(document).ready(function(){
        $("#image-03").mouseover(function(){
        $("#pop-up-03").show('slow');
    });
        $("#image-03").mouseout(function(){
        $("#pop-up-03").hide('slow');
    });
});

$(document).ready(function(){
        $("#image").mouseover(function(){
        $("#pop-up").show('slow');
    });
        $("#image").mouseout(function(){
        $("#pop-up").hide('slow');
    });
});
$(document).ready(function(){
        $("#image-1").mouseover(function(){
        $("#pop-up-1").show('slow');
    });
        $("#image-1").mouseout(function(){
        $("#pop-up-1").hide('slow');
    });
 });
$(document).ready(function(){
        $("#image-2").mouseover(function(){
        $("#pop-up-2").show('slow');
    });
        $("#image-2").mouseout(function(){
        $("#pop-up-2").hide('slow');
    });
});
// -------------------------End Rollover---------------------------
$(document).ready(function(){
    // Kiểm tra cửa sổ có ở trên cùng nếu không thì nút hiển thị
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click vào sự kiện để cuộn lên đầu trang
    $('.scrollToTop').click(function(){
        $('html, body').animate({
            scrollTop : 0},800);
        return false;
    });

    });
//--------------------------------------------------------------------
    $( function() {
      $( "input" ).checkboxradio();
    } );
    // Hiệu ứng check box radio
