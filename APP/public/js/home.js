
var auth = localStorage.getItem("catsmathObj")
if (authLogin(auth)) {
    $(document).ready(function () {
        var objPessoa = (JSON.parse(auth))
        $(".username").text(objPessoa.username)
        $("#logout").click(function () {
            localStorage.removeItem("catsmathObj");
            window.location.href = "/";
        })

        $("#menuSand").click(function(){
            $(this).css("display","none");
            $(".menu-left").css("display","block");
        })
        // $(".fa-times").click(function(){
            
        //     $(".menu-left").css("display", "none")
        // })
        
        $( "#closeMenu" ).click(function() {
            $( ".menu-left" ).animate({
              width: "toggle",
              height: "toggle"
            }, {
              duration: 500,
              complete: function() {
                $("#menuSand").css("display","block");
                $(".menu-left").css("display", "none");
              }
            });
          });
    })
} else {
    window.location.href = "/";
}

function authLogin(auth) {
    if (auth == null) {
        return false
    } else {
        return true
    }
}