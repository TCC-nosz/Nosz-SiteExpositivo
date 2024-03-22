
  (function ($) {

    $('.navbar-collapse a').on('click',function(){  $(".navbar-collapse").collapse('hide'); });

    $(function() {

      $('.inicio-slides').vegas({

          slides: [

            { src: 'imagens/slides/reaproveitamento.png' },
            { src: 'imagens/slides/globo.png' },
            { src: 'imagens/slides/ambiente.png' }
            
          ],

          timer: false, animation: 'kenburns',

      });

    });
    
    $('.smoothscroll').click( function() {

      var href = $(this).attr('href'); var docHref = $(href); var alturaHeader = $('.navbar').height() + 60;
  
      scrollToDiv(docHref, alturaHeader); return false;
  
      function scrollToDiv( elemento,alturaNav ){

        var deslocamento = elemento.offset(); var deslocamentoTop = deslocamento.top; var totalScroll = deslocamentoTop-alturaNav;
  
        $('body,html').animate({ scrollTop: totalScroll }, 300);
        
      }
    });
  
  })( window.jQuery );