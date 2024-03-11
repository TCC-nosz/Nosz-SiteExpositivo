(function($) {

  var slice = Array.prototype.slice; var splice = Array.prototype.splice;

  var padrao = { espacamentoTopo: 0, espacamentoAbaixo: 0, classe: 'is-sticky', classeQuebra: 'sticky-wrapper', centro: false, largura: '', larguraQuebra: true, larguraResponsiva: false },

    $window = $(window), $document = $(document), sticked = [], alturaJanela = $window.height(),

    scroller = function() {

      var scrollarTopo = $window.scrollTop(), alturaDoc = $document.height(), dwh = alturaDoc - alturaJanela, extra = (scrollarTopo > dwh) ? dwh - scrollarTopo : 0;

      for ( var repeticao = 0; repeticao < sticked.length; repeticao++ ) {

        var s = sticked[repeticao], topElemento = s.stickyWrapper.offset().top, etse = topElemento - s.espacamentoTopo - extra;

        s.stickyWrapper.css('height', s.elementoClasse.outerHeight());

        if ( scrollarTopo <= etse && s.topAtual !== null ) {

            s.elementoClasse .css({ 'width': '', 'position': '','top': '' });
            s.elementoClasse.parent().removeClass(s.classe);
            s.elementoClasse.trigger('sticky-end', [s]);
            s.topAtual = null;

        }
        else {

          var novoTop = alturaDoc - s.elementoClasse.outerHeight() - s.espacamentoTopo - s.espacamentoAbaixo - scrollarTopo - extra;

          if (novoTop < 0) { novoTop = novoTop + s.espacamentoTopo; } 
          else { novoTop = s.espacamentoTopo; }

          if (s.topAtual != novoTop) { var novaLargura;

            if ( s.largura ) { novaLargura = $(s.largura).width() || null; } 
            else if ( s.larguraQuebra ) { novaLargura = s.stickyWrapper.width(); }
            if ( novaLargura == null ) { novaLargura = s.elementoClasse.width(); }

            s.elementoClasse .css('width', novaLargura) .css('position', 'fixed') .css('top', novoTop);

            s.elementoClasse.parent().addClass(s.classe);

            if ( s.topAtual === null ) { s.elementoClasse.trigger('sticky-start', [s]); } else { s.elementoClasse.trigger('sticky-update', [s]); }

            if ( s.topAtual === s.espacamentoTopo && s.topAtual > novoTop || s.topAtual === null && novoTop < s.espacamentoTopo ) {
              s.elementoClasse.trigger('sticky-bottom-reached', [s]);
            } else if( s.topAtual !== null && novoTop === s.espacamentoTopo && s.topAtual < novoTop ) {
              s.elementoClasse.trigger('sticky-bottom-unreached', [s]);
            }

            s.topAtual = novoTop;

          }

        }

      }

    },

    resizer = function() {

      alturaJanela = $window.height();

      for ( var repeticao = 0; repeticao < sticked.length; repeticao++ ) {

        var s = sticked[repeticao]; var novaLargura = null;

        if ( s.largura ) { if (s.larguraResponsiva === true) { novaLargura = $(s.largura).width(); } } 
        else if( s.larguraQuebra ) { novaLargura = s.stickyWrapper.width(); }

        if ( novaLargura != null ) { s.elementoClasse.css('width', novaLargura); }

      }
    },

    metodos = {

      init: function(options) {

        var o = $.extend({}, padrao, options);

        return this.each(function() {
          
          var elementoClasse = $(this);

          var idClasse = elementoClasse.attr('id');
          var stickyHeight = elementoClasse.outerHeight();
          var idQuebra = idClasse ? idClasse + '-' + padrao.classeQuebra : padrao.classeQuebra
          var wrapper = $('<div></div>') .attr('id', idQuebra) .addClass(o.classeQuebra);

          elementoClasse.wrapAll(wrapper);

          var stickyWrapper = elementoClasse.parent();

          if ( o.centro ) { stickyWrapper.css({ width:elementoClasse.outerWidth(), marginLeft:"auto", marginRight:"auto" }); }

          if ( elementoClasse.css("float") == "right" ) { elementoClasse.css({"float":"none"}).parent().css({"float":"right"}); }

          stickyWrapper.css('height', stickyHeight);

          o.elementoClasse = elementoClasse; o.stickyWrapper = stickyWrapper;  o.topAtual = null;

          sticked.push(o);

        });

      },

      update: scroller,
      unstick: function(options) {

        return this.each(function() { 
          
          var that = this; var unstickyElement = $(that); var removeIdx = -1; var repeticao = sticked.length;
          
          while (repeticao-- > 0) { if (sticked[repeticao].elementoClasse.get(0) === that) { splice.call(sticked,repeticao,1); removeIdx = repeticao; } }

          if ( removeIdx != -1 ) {  unstickyElement.unwrap(); unstickyElement .css({ 'width': '', 'position': '', 'top': '', 'float': '' }); }

        });
      }
    };

  if ( window.addEventListener ) { window.addEventListener('scroll', scroller, false); window.addEventListener('resize', resizer, false); } 
  else if ( window.attachEvent ) { window.attachEvent('onscroll', scroller); window.attachEvent('onresize', resizer); }

  $.fn.sticky = function(method) {

    if ( metodos[method] ) { return metodos[method].apply(this, slice.call(arguments, 1)); } 
    else if ( typeof method === 'object' || !method ) { metodos.init.apply( this, arguments ); } 
    else { $.error('Método ' + method + ' não existe jQuery.sticky'); }

  };

  $.fn.unstick = function(method) {

    if ( metodos[method] ) { return metodos[method].apply(this, slice.call(arguments, 1)); } 
    else if ( typeof method === 'object' || !method ) { return metodos.unstick.apply( this, arguments ); } 
    else { $.error('Método ' + method + ' não existe no jQuery.sticky'); }

  };

  $(function() { setTimeout(scroller, 0); });

}) (jQuery); $(document).ready( function(){ $(".navbar").sticky({ espacamentoTopo: 0 }); } );