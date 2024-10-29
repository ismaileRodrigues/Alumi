
// $(document).ready(function () {
//     $('.container').slick({
//       // dots: true,
//       infinite: true,
//       speed: 500,
//       fade: true,
//       cssEase: 'linear',
//       autoplay: true,
//       autoplaySpeed: 2000,
//     });
//   });
  
  
//   currentFlickity.on('pointerUp', function (event, pointer) {
//     currentFlickity.player.play();
//   });
$(document).ready(function(){
  var slideIndex = 0;
  showSlides();

  function showSlides() {
      var i;
      var slides = $(".container div");
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}    
      slides[slideIndex-1].style.display = "flex";  
      setTimeout(showSlides, 3000); 
  }
});
/*Galeria */

document.querySelectorAll('.image_container img').forEach(image => {
  image.onclick = () => {
    document.querySelector('.modal').style.display = 'block'
    document.querySelector('.modal img').src = image.getAttribute('src');
  }
  
});

document.querySelector('.modal span').onclick = () => {
  document.querySelector('.modal').style.display = 'none'
}


let data = new Date();
let Ano = document.querySelector('#ano');

let ano = data.getFullYear();
let dia = data.getDate();
let mes = data.getMonth();



Ano.innerHTML =`Dia ${dia}/${mes+1}/ ${ano}`;

setTimeout(function() {
   let whatsappButton = document.querySelector('#zap');
   whatsappButton.style.display = 'flex';

 },10000);




//menu celular
const closeBtn = document.querySelector(".close-btn");
const openBtn = document.querySelector(".open-btn");
const navbar = document.querySelector(".navbar");

function openNav() {
  document.querySelector('.navbar').style.top = '0';
  closeBtn.style.display = 'block'
  openBtn.style.display = 'none'
  navbar.style.display = 'flex'


}
function closeNav() {
  document.querySelector('.navbar').style.top = '-100%';
  closeBtn.style.display = 'none'
  openBtn.style.display = 'block'

}
