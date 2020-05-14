function show(){
    var pswrd = document.getElementById('password');
    var icon = document.querySelector('.fas');
    if (pswrd.type === "password") {
        pswrd.type = "text";
        pswrd.style.marginTop = "20px";
        icon.style.color = "rgb(236, 14, 14)";
    }else{
        pswrd.type = "password";
        icon.style.color = "rgb(34, 124, 226)";
    }
}