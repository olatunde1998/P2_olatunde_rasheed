let hidHome = document.getElementById('header');
let palettedropup = document.getElementById('fullpallete-overall-container');
let enchantedropup = document.getElementById('enchanted-overall-container');
let bastilledropup = document.getElementById('bastille-overall-container');
let gourmanddropup = document.getElementById('gourmand-overall-container');
let office = document.getElementById('home_container');
let pallete = document.getElementById('full-palette-box');
let enchanted = document.getElementById('enchanted-box');
let bastille = document.getElementById('bastille-box');
let gourmand = document.getElementById('gourmand-box');
let love = document.getElementById('back-arrow-icon');
var animation = document.querySelector('.bastille-list');
var correct = document.querySelector('.correctBox');

//pallete code

pallete.addEventListener('click', function(){
   office.style.display = 'none';
   palettedropup.style.display ='block';
   love.style.display= 'block';
   
})

love.addEventListener('click', function(){
  office.style.display = 'block';
  palettedropup.style.display ='none';
   love.style.display ='none';
})

//enchanted code

enchanted.addEventListener('click', function(){
  office.style.display = 'none';
  enchantedropup.style.display ='block';
  love.style.display= 'block';
})

love.addEventListener('click', function(){
 office.style.display = 'block';
 enchantedropup.style.display ='none';
  love.style.display ='none';
})

//bastille code

bastille.addEventListener('click', function(){
  office.style.display = 'none';
  bastilledropup.style.display ='block';
  love.style.display= 'block';
})

love.addEventListener('click', function(){
 office.style.display = 'block';
 bastilledropup.style.display ='none';
  love.style.display ='none';
})
//gourmand code

gourmand.addEventListener('click', function(){
  office.style.display = 'none';
  gourmanddropup.style.display ='block';
  love.style.display= 'block';
})

love.addEventListener('click', function(){
 office.style.display = 'block';
 gourmanddropup.style.display ='none';
  love.style.display ='none';
})





animation.addEventListener('mouseenter', function(){
  correct.style.display ='block';
  //correct.style.display ='block';
  
})
animation.addEventListener('mouseleave', function(){
  correct.style.display ='none';
  //correct.style.display ='block';
  
})