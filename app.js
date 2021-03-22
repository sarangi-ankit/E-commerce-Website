function random(){
    window.location.href="#cart";
}


function error(){
    var text=document.querySelector(".form-control").value;

    var regx=/^([a-zA-Z0-9]+)@([a-zA-Z0-9-]+).([a-z]{2,20})$/;
    if (regx.test(text)){

        document.querySelector(".form-control").style.borderColor = "green";
        document.querySelector(".lb1Text").style.visibility="visible";
        document.querySelector(".lb1Text").style.color="green";
        document.querySelector(".lb1Text").innerHTML="valid email-id";
    }
    else{
        document.querySelector(".form-control").style.borderColor = "red";
        document.querySelector(".lb1Text").style.visibility="visible";
        document.querySelector(".lb1Text").style.color="red";
        document.querySelector(".lb1Text").innerHTML="invalid email-id";
    }
}
function searchElement(){
    var input=document.getElementById('search').value.toUpperCase();
    // console.log(input);
    var tag=document.querySelectorAll(".panel-primary");

    
    for (var i=0;i<tag.length;i++){
        var text=tag[i].querySelectorAll(".title1")[0];
        var list=text.textContent || text.innerText;
        if (list.toUpperCase().indexOf(input)>-1){
            tag[i].style.display="";
        }
        else{
            tag[i].style.display="none";
        }

        // console.log(text);
    }
 }
function catagory(chnge){
    if (chnge.value=="fruits"){
        document.getElementById("veg").style.display="none";
        document.getElementById("fruit").style.display="block"
    }
    else if(chnge.value=="All"){
        document.getElementById("veg").style.display="block";
        document.getElementById("fruit").style.display="block" 
    }
    else{
        document.getElementById("veg").style.display="block";
        document.getElementById("fruit").style.display="none"
    }
    
}

var allDivs=document.querySelectorAll(".panel-primary");
allDivs.forEach(div=>{
    div.addEventListener("mouseover",()=>{
            div.style.backgroundColor="#78c4d4";
    })
})
var text=document.querySelectorAll(".panel-primary");
text.forEach(div=>{
    div.addEventListener("mouseout",()=>{
        div.style.backgroundColor="white";
    })
})


 





