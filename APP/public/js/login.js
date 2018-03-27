var auth = localStorage.getItem("catsmathObj")
if (authLogin(auth)) {
    window.location.href = "/home";
} else {
    $(document).ready(function () {
        $("#entrar").click(function(){
            var userName = $("#Username").val()
            var password = $("#password").val()
    
            if((userName.trim()).length >=1 && (password.trim()).length >= 1){
                var objLogin = {
                    "username": userName.trim(),
                    "password": password.trim()
                }
                loginAuth(objLogin)
            } else {
                toast("Preencha os campos corretamente")
            }
        })
    
        function toast(msgError) {M.toast({ html: msgError })}
    
        function loginAuth(obj){
            $.ajax({
                type: "POST",
                url: "/loginAuth",
                data: obj,
                success: function(data){
                    if(data.status == 200){
                        localStorage.setItem('catsmathObj', JSON.stringify(data));
                        window.location.href = "/home";
                    } else {
                        toast("Login Invalido")
                    }
                },
                error: function(err){
                    toast("Login Invalido")
                }
            });
        }
    })
}

function authLogin(auth) {
    if (auth == null) {
        return false
    } else {
        return true
    }
}