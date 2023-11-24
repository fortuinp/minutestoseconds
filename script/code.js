let input1 = document.querySelector('[data-input]')
let output= document.getElementById('output')

function convert(){
   if (input1.value){
    let mins= input1.value
    let seconds= (mins*60).toFixed(2)
   output.textContent= mins +' minutes is equal to '+seconds+" seconds";
}
else{
    alert('input correct value')
}}
document.getElementById('btn').addEventListener('click',convert)