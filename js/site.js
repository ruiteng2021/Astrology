let isOpen = true;
let lines = $('.line');
let cube;

function moveCube(num) {

    switch(num) {
      case 0:
        cube = document.querySelector('.cubeRat');
        break
      case 1:
        cube = document.querySelector('.cubeOx');
        break
      case 2:
        cube = document.querySelector('.cubeTiger');
        break
      case 3:
        cube = document.querySelector('.cubeRabbit');
        break        
      case 4:
        cube = document.querySelector('.cubeDragon');
        break
      case 5:
        cube = document.querySelector('.cubeSnake');
        break
      case 6:
        cube = document.querySelector('.cubeHorse');
        break
      case 7:
        cube = document.querySelector('.cubeSheep');
        break  
      case 8:
        cube = document.querySelector('.cubeMonkey');
        break
      case 9:
        cube = document.querySelector('.cubeRooster');
        break
      case 10:
        cube = document.querySelector('.cubeDog');
        break
      case 11:
        cube = document.querySelector('.cubePig');
        break  
      case 12:
        cube = document.querySelector('.cubeAll');
        break  
    }

  let side = Math.floor(Math.random() * 6);
  if (side == 0) //front
    cube.setAttribute('style', 'transform: translateZ(-100px) rotateY(   0deg);');
  if (side == 1) //right
    cube.setAttribute('style', 'transform: translateZ(-100px) rotateY( -90deg);');
  if (side == 2) //back
    cube.setAttribute('style', 'transform: translateZ(-100px) rotateY(-180deg);');
  if (side == 3) //left
    cube.setAttribute('style', 'transform: translateZ(-100px) rotateY(  90deg);');
  if (side == 4) //top
    cube.setAttribute('style', 'transform: translateZ(-100px) rotateX( -90deg);');
  if (side == 5) //bottom
    cube.setAttribute('style', 'transform: translateZ(-100px) rotateX(  90deg);');
}


function ToggleNav(){
    if(isOpen) { // close the nav bar
        $('header').attr('style','width: 65px; transition: width 2s;');
        $('.home').attr('style','visibility: hidden; transition-delay: 1s;');
        $('.zodiac').attr('style','visibility: hidden; transition-delay: 0.6s;');
        $('.calendar').attr('style','visibility: hidden; transition-delay: 0.4s;');
        $('.qa').attr('style','visibility: hidden; transition-delay: 0.2s;');
        //$('#navBtn').attr('style', 'transform: translateX(-10px) translateY(10px) rotate(90deg); transition: transform .42s;');
        $(lines[0]).attr('style', 'transform: translateX(-10px) translateY(10px) rotate(90deg); transition: transform .42s;');
        $(lines[1]).attr('style', 'transform: translateX(0px) translateY(-1px) rotate(90deg); transition: transform 1s;');
        $(lines[2]).attr('style', 'transform: translateX(10px) translateY(-12px) rotate(90deg); transition: transform 1.5s;');
    }
    else { // open the nav bar
        $('header').attr('style','width: 100%; transition: width 2s;');
        $('.home').attr('style','visibility: visible; transition-delay: 0.5s;');
        $('.zodiac').attr('style','visibility: visible; transition-delay: 0.7s;');
        $('.calendar').attr('style','visibility: visible; transition-delay: 0.9s;');
        $('.qa').attr('style','visibility: visible; transition-delay: 1.2s;');
        //$('#navBtn').attr('style', 'transform: translateX(0px) translateY(0px) rotate(0deg); transition: transform .42s;');
        $(lines[0]).attr('style', 'transform: translateX(0px) translateY(0px) rotate(0deg); transition: transform .42s;');
        $(lines[1]).attr('style', 'transform: translateX(0px) translateY(0px) rotate(0deg); transition: transform 1s;');
        $(lines[2]).attr('style', 'transform: translateX(0px) translateY(0px) rotate(0deg); transition: transform 1.5s;');
    }
    isOpen = !isOpen;
}

// document.getElementById("logoimg").addEventListener("mouseover", mouseOver);
// function mouseOver() {
//   $('#logoimg').attr('style', 'animation: none;');
//   $('#logoimg').hover(function(){
//     $(this).css("animation", "logo-rotateZ 2s infinite");
//   });
// }

document.getElementById("logoimg").addEventListener("animationend", mouseOver);
function mouseOver() {
  $('#logoimg').attr('style', 'position: relative;');
  $("#logoimg").hover(function(){
      $('#logoimg').css("animation", "logo-rotateZ 2s linear infinite");
  }, 
  function(){
      $('#logoimg').css("animation", "none");
  });
}

$('.home').hover(function(){
  $('.home').css("text-decoration", "underline");
}, 
function(){
    $('.home').css("text-decoration", "none");
});

$(".home").click(function(){
  $('#gridCover').animate({
    top: '0%'
  }, 1000, 'swing');
  $('.sceneAll').animate({
    top: '10%'
  }, 1000, 'swing');
});

$("#gridCover").click(function(){
  $('#gridCover').animate({
    top: -500
  }, 1000, 'swing');
  $('.sceneAll').animate({
    top: -500
  }, 500, 'swing');
});