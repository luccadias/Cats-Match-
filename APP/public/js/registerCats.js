$(document).ready(function () {
    var auth = localStorage.getItem("catsmathObj")
    var objPessoa = (JSON.parse(auth))    
    $("input, select, textarea").val('')
    $("#buttonConfirmarCat").click(function () {
        var objCat = new FormData($("#registercatform")[0])
        objCat.append("email", objPessoa.email)
        console.log(objCat)
        resgisterCat(objCat)
    })

    function toast(msgError) { M.toast({ html: msgError }) }


    function resgisterCat(objCat) {
        $.ajax({
            type: "POST",
            url: "/registerCat",
            data: objCat,
            cache: false,
            contentType: false,
            processData: false,
            success: function (data) {
                console.log(data)
                toast("Gato cadastrado")
                $('#registercatform')[0].reset();
            },
            error: function (err) {
                 toast("Erro")
            }
        });
    }

})