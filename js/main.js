
const menuburger=document.getElementById('menu-burger');
const mainheader=document.getElementById('main-header_content_links')
const menuclose=document.getElementById("menu");
console.log(menuburger);
console.log(mainheader);

// menuburger.addEventListener('onclick',event=>{
//   // console.log('click');
//   mainheader.classList.add('menuactive');
// });

menuburger.onclick = () =>
 mainheader.classList.toggle('menuactive');


menuclose.onclick = ( )=> mainheader.classList.remove('menuactive');



$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    items:2,
    autoplay:true,
    smartSpeed: 800,
    responsive:{
      0:{
        items:1
      },
      700:{
          items:1
      },
      1200:{
        items:2
      }
     
  }
})




$(document).scroll(function(){
  if ( $(document).scrollTop() >100 ) {
    $('.header').addClass('active-header');
    $('.main-header').addClass("active-main_header");
    // $('.main-header_content_links.menuactive').css('margin-top','42px');
  }
  else if ($(document).scrollTop() ===0 ){
    $('.header').removeClass('active-header');
    $('.main-header').removeClass("active-main_header");
    // $('.main-header_content_links.menuactive').css('margin-top','-42px');
  }
});

var a=0;
$(window).scroll(function(){




    var oTop=$(".section-works").offset().top-window.innerHeight;
    
    if (a == 0 && $(window).scrollTop() > oTop) {
        $('.section-works_content-number').each(function() {

          var $this = $(this),
            countTo = $this.attr('data-count');
            



          $({
            countNum: $this.text()
          }).animate({
              countNum: countTo
            },
    


            {
    
              duration: 2000,
              easing: 'swing',
              step: function() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function() {
                $this.text(this.countNum);
              }
    
            });
        });


        a = 1;
      }

});