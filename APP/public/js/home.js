
var auth = localStorage.getItem("catsmathObj")
if (authLogin(auth)) {
    $(document).ready(function () {
        var objPessoa = (JSON.parse(auth))
        $("body").append("<h1>" + objPessoa.username + "</h1>");
        $("body").append("<p>" + objPessoa.email + "</p>");

        $("#logout").click(function () {
            localStorage.removeItem("catsmathObj");
            window.location.href = "/";
        })
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