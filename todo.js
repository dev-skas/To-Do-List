
window.addEventListener("load",load);

function load(){
            var xhttp = new XMLHttpRequest ();
        xhttp.onreadystatechange = function(){
            if(this.readyState==4&&this.status==200){
             response =JSON.parse(this.responseText);
        
            calldata()
              }
        }
        xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
        xhttp.send();
}
var disabled=0

function calldata(){    
    var list="";
    for (let i = 0; i <response.length; i++) {
        if(response[i].completed===true){
        list += `<li>${response[i].title}<input class="check" type="checkbox"  checked disabled></li>`;
        disabled += 1 
            
    }else{
        list += `<li>${response[i].title}<input class="check" type="checkbox" onchange="check()"></li>`;
    }
 }
 document.getElementById("list").innerHTML= list;
}  



function check(){
        var promise = new Promise(function(resolve,reject){
       
         var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked ');
       
        var checked = checkboxes.length-disabled;
        if(checked==5){
            resolve();
        }   
    
    });
    promise.then(function(){
        setTimeout(function(){
            alert(" Congrats. 5 Tasks have been Successfully Completed ");
        },100)
    })
}

