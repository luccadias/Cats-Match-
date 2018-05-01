$(document).ready(function () {
    $("input, select, textarea").val('')
    $("#buttonConfirmarCat").click(function () {
        var catfirst = $("#first_name").val()
        var catlast = $("#last_name").val()
        var desc = $("#desc_pet").val()
        
        if (catfirst.lenght>2) {
            var objCat = {
                "catfirst": catfirst,
                "lastfirst": lastfirst,
                "desc": desc,
                "image": null
            }
            $("#catfirst").val("");$("#lastfirst").val("");$("#desc").val("")
            resgisterCat(objCat)
        } else {
            console.log("----------->"+ catfirst)
            console.log("----------->"+ catfirst.lenght)
            console.log("----------->"+ catlast)
            console.log("----------->"+ catlast.lenght)
            toast("Preencha corretamente")
        }
    })

    function toast(msgError) {M.toast({ html: msgError })}

    
    function resgisterCat(objCat){
        $.ajax({
            type: "POST",
            url: "/registerCat",
            data: objCat,
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