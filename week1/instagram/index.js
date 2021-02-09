$(function(){
    $(".email-login").on("change keyup input",function(){
       if($("#email-login").val() !== "" && $("#password-login").val() !== ""){
           $(".btn-login").css("background-color","red");
       }else{
        $(".btn-login").css("background-color","rgba(var(--d69,0,149,246),.3)");  
       }
    });
});