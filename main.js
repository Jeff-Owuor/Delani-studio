const regex=/[0-9]/g
let name=document.getElementById("name");
let formEl=document.querySelector(".formation");
formEl.addEventListener("submit",function(x){
    x.preventDefault();
    checkInput();
})
function checkInput(){
   let namEl=name.value;
   if(namEl.match(regex)){
       alert("Invalid entry try again");
   }else{
       alert(`${namEl} we have received your message. Thank you for reaching out to us.`)
   }
}
