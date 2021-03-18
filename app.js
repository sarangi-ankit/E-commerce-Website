
var cart=document.querySelectorAll(".cart-btn");
// console.log(cart);
for (var i=0;i<cart.length;i++){
    // console.log("ankit")
    cart[i].addEventListener("click",addToCart)
}
function addToCart(event){
    var button=event.target;
    var shopItem=button.parentElement.parentElement;
    var title=shopItem.querySelectorAll(".title1")[0].innerHTML
    var image=shopItem.querySelectorAll(".img-responsive")[0].src
    console.log(title,image)
    addItem(title,image)
}
function addItem(title,image){
    console.log("ankit")
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
        var list=text.textContent || text.innerHTML;
        if (list.toUpperCase().indexOf(input)>-1){
            tag[i].style.display="";
        }
        else{
            tag[i].style.display="none";
        }

        // console.log(text);
    }
 }
function catagory(){
    var a=document.getElementById("choice").value;
    
    random(a)
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
var text=document.querySelectorAll(".fruits")
var veg=document.querySelectorAll(".vegetables")
function random(a){
    text.forEach(div=>{
        if (!div.classList.contains(a)){
            div.style.display = 'none'
        }
        else{
            div.style.display=""
        } 
    })
    
}




 





