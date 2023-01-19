const elForm = document.querySelector('.form');
const elInput = document.querySelector('.input');
const elPeshkom = document.querySelector('.peshkom');
const elVelo = document.querySelector('.velo');
const elCar = document.querySelector('.car');
const elPlane = document.querySelector('.plane');



const footSpeed = 3.6;
const veloSpeed = 20.1;
const carSpeed = 70;
const planeSpeed = 800;


elForm.addEventListener('submit', function(evt){
    evt.preventDefault()
    const value = elInput.value
    const pesh = Math.floor( value / footSpeed);
    elPeshkom.textContent = ` ${pesh}soat`



    const veli = elInput.value
    const vel = Math.floor( veli / veloSpeed);
    elVelo.textContent = ` ${vel}soat`


    const valu = elInput.value
    const care =  valu / carSpeed;
    elCar.textContent = ` ${care}soat`



    const vale = elInput.value
    const plan =  valu / planeSpeed;
    elPlane.textContent = ` ${plan}soat`
} )








jQuery(document).ready(function(){
    $('h1').mousemove(function(e){
      var rXP = (e.pageX - this.offsetLeft-$(this).width()/2);
      var rYP = (e.pageY - this.offsetTop-$(this).height()/2);
      $('h1').css('text-shadow', +rYP/10+'px '+rXP/80+'px rgba(227,6,19,.8), '+rYP/8+'px '+rXP/60+'px rgba(255,237,0,1), '+rXP/70+'px '+rYP/12+'px rgba(0,159,227,.7)');
    });
 });