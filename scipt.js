
function validate(){
    var uname = document.getElementById("uname").value;
    var pwd = document.getElementById("pwd").value;

    return check(uname,pwd,sucess);
}

function check(a,b,callback){
    if(a =="admin" && b=="12345"){
        document.getElementById("error").setAttribute("hidden",true);

      return callback();

    }else{
        document.getElementById("error").removeAttribute("hidden",true);

        return false

    }
}

function sucess(){
    return true
}

