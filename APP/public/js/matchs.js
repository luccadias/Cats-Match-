
var objMatch =[]
var matchNow 
$(document).ready(function () {
    var auth = localStorage.getItem("catsmathObj")
    var objPessoa = (JSON.parse(auth))

    console.log("tey")

    $(".collection-item").click(function () {
        console.log("s")
    })
    var arrayMatchs= []

    $.get("/getMatchs/" + objPessoa.email + "", function (data) {
        for(let i=0; i < data.length; i++){
            console.log(data[i])
            arrayMatchs.push(data[i])
            objMatch.push(data[i])
            var x = '<a href="#!" onclick="ShowDialog(objMatch['+i+'])" id="'+data[i].idGato+'" class="collection-item"><span class="badge">1</span>'+ data[i].nomeGato +'</a>' 
            $( ".collection" ).append(x)
        }
    });

    $(".collection-item").click(function(){
        alert($(this).attr('id'));
        // arrayMatchs.forEach(element => {
        //     if(element)
        // });
       
    })
    $("#close").click(function(){
        $(".messages").css("display","none")
        $('.match').remove();
        $('.dono').remove();
        $("#text").val("")
    })
    $("#send").click(function(){
       var x = $("#text").val()
       if(x.trim() != 0){
        if(objPessoa.email == matchNow.dono){
            $( ".bodyChat" ).append('<div class="match"><p>'+ x +'</p></div>')
        } else {
            $( ".bodyChat" ).append('<div class="dono"><p>'+ x +'</p></div>')
        }
       } else {
           console.log("digite algo")
       }
       $("#text").val("")
    })
})
// function myfunction(x){
//     console.log(x)
// }

function ShowDialog(obj){
    console.log(obj)
    matchNow = obj;
    $(".messages").css("display","block")
    $(".nomeGato").text(obj.nomeGato)
    if(obj.message != undefined){

    } else {
        //alert("mande sua primeira mensagem")
    }
}
