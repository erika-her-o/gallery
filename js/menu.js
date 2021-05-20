const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu-navegacion');

console.log(menu);
console.log(hamburger);

hamburger-addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

// al tocar la ventana de navegacion y dispare otro arrow function
// parametro "e", ejecuta cuando se le da click en cualquier parte 
//e.target = dice a que elemento se le esta dando click// console.log(e.target);

// si menu.classList tiene la clase spread quiero que se ejecute este codigo
//&& (aparte) el elemento e.target algo diferente al menu
//!= (que es diferente)
// tambien && es diferente (!=) a hamburger
window.addEventListener('click', e=>{
    if(menu.classList.contains('spread') && e.target != menu && e.target != hamburger){
        menu.classList.toggle("spread")
    }
})