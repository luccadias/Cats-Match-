var auth = localStorage.getItem("catsmathObj")
if (authLogin(auth)) {
    $(document).ready(function () {
        var objPessoa = (JSON.parse(auth))
        console.log(objPessoa)
        loginAuth()

        $("#logout").click(function () {
            localStorage.removeItem("catsmathObj");
            window.location.href = "/";
        })

        $("#menuSand").click(function () {
            $(this).css("display", "none");
            $(".menu-left").css("display", "block");
        })

        $(".imagePerfil").mouseenter(function () {
            $(".hoverPerfil").show()
        }).mouseleave(function () {
            $(".hoverPerfil").fadeOut()
        })

        $(".imagePerfil").click(function () {
            document.getElementById("imageFile").click()
        })

        $("#imageFile").change(function (event) {
            var FR = new FileReader();
            var imageBinary
            FR.addEventListener("load", function (e) {
                $('.imagePerfil').css("background-image", "url(" + e.target.result + ")");
                imageBinary = (e.target.result)
            });
            FR.readAsDataURL(event.target.files[0]);
            updateImage(event.target.files[0])
        })

        $("#closeMenu").click(function () {
            $(".menu-left").animate({
                width: "toggle",
                height: "toggle"
            }, {
                    duration: 500,
                    complete: function () {
                        $("#menuSand").css("display", "block");
                        $(".menu-left").css("display", "none");
                    }
                });
        });

        
        function updateImage(data) {
            $("#emailuser").val(objPessoa.email)
            //var formValue = $("#formData").serialize()
            // var x = new FormData();
            // // x.append("emailUser",$("#emailuser"))
            console.log($("#formData")[0][1])

            $.ajax({
                type: "POST",
                url: "/updateImage",
                data: new FormData($("#formData")[0]),
                cache: false,
                contentType: false,
                processData: false,
                success: function (data) {
                    console.log(data)

                    // toast("Imagem Atualizada")
                },
                error: function (err) {
                    //  toast("Erro")
                }
            });
        }
        function loginAuth(){
            $.ajax({
                type: "POST",
                url: "/loginAuth",
                data: {"username": objPessoa.username, "password": objPessoa.password},
                success: function(data){
                    console.log(data)
                    if (data.image != "") {
                        $('.imagePerfil').css("background-image", "url(" + 'data:image/png;base64,' + data.image + ")");
                    }
                    $(".username").text(data.username)
                },
                error: function(err){
                    toast("Login Invalido")
                }
            });
        }
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