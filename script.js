$(document).ready(function(){
    $('.contact-form').validate({
        rules:{
            fname:{
                required:true,
                
            },
            lname:{
                required:true,
            },
            phonenumber:{
                required:true,
                minlength:10,
            },
            email:{
                required:true,
            },
            content:{
                required:true,
                minlength:12,
            },
        }
    });
    $(".moon").click(function(){
        $("body").css({"background-color":"white"});
        $('footer').css({"color":"black"});
       
    });
})
 
