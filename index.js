
let hidHome = document.getElementById('header');
let palettedropup = document.getElementById('fullPalleteOverAllContainer');
let enchantedropup = document.getElementById('enchantedOverAllContainer');
let bastilledropup = document.getElementById('bastilleOverAllContainer');
let gourmanddropup = document.getElementById('gourmandOverAllContainer');
let office = document.getElementById('homeContainer');
let pallete = document.getElementById('fullPaletteBox');
let enchanted = document.getElementById('enchantedBox');
let bastille = document.getElementById('bastilleBox');
let gourmand = document.getElementById('gourmandBox');
let love = document.getElementById('bacArrowIcon');


let amount = document.getElementById('citrusPrice');
let correct = document.getElementById('correctBox');


//correct code

amount.addEventListener('click', function(){
  
  correct.style.display ='block';
  
})








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