/* function change_red(event){
    var elem = document.getElementById("coeur");
    elem.style.color ='red';
    for (let i = 0; i < elem.length; i++) {
        elem[i].addEventListener("click", change_red);
      } */
const hearts = Array.from(document.getElementsByClassName("like"));
function handleLike(event) {
event.target.classList.toggle("red-heart");
}
      
for (let i = 0; i < hearts.length; i++) {
hearts[i].addEventListener("click", handleLike);
}
var btnAdd= Array.from(document.querySelectorAll('#add'))
var btnSub=document.querySelector('#subtract')
var input= Array.from(document.querySelectorAll('input'))
var sum =document.getElementById('sum')
const removeBtns = Array.from(document.querySelectorAll(".remove"));
var input=document.querySelector('input')

btnAdd.addEventListener('click',() =>
{
 var quantity= input.value = parseInt(input.value) + 1;
 var somme= parseInt(quantity*sum.value)
 sum.innerHTML= somme
});
function moibtn() {
  input.value = parseInt(input.value) - 1;
}

for (let i = 0; i < btnSub.length; i++){
  btnSub[i].addEventListener('click', moibtn())
  
}


 


/* x.addEventListener('click', () =>{
   
        x.parentNode.style.display ='none';
        
    
})
 */

//Remove Btn

function removeProduct(event) {
    event.target.parentElement.style.display='none';
   
  }
  
  for (let i = 0; i < removeBtns.length; i++) {
    removeBtns[i].addEventListener("click", removeProduct);
  }