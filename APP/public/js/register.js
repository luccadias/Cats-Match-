$(document).ready(function () {
    $("input, select, textarea").val('')
    $("#buttonConfirmar").click(function () {
        var userName = $("#usernameRegister").val()
        var email = $("#emailRegister").val()
        var password = $("#passwordRegister").val()
        if (validateEmail(email) && password.length >= 5 && userName.length > 5) {
            var objUser = {
                "username": userName.trim(),
                "email": email,
                "password": password.trim(),
                "image": null
            }
            $("#usernameRegister").val("");$("#emailRegister").val("");$("#passwordRegister").val("")
            registerUser(objUser)
        } else {
            toast("Preencha corretamente")
        }
    })

    function toast(msgError) {M.toast({ html: msgError })}

    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    function registerUser(objUser) {
        $.ajax({
            type: "POST",
            url: "/registerMember",
            data: objUser,
            success: function(data){
                console.log(data)
                toast(data)
            },
            error: function(err){
                console.log(err)
                toast("Erro no servidor")
            }
        });
    }
})