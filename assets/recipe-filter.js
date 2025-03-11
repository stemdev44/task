(function() {
  var a = setInterval( function() {
      if ( typeof window.jQuery === 'undefined' ) {
          return;
      }
      clearInterval( a );
  jQuery( ".gallery__section__outer:not(.isActive)" ).remove();
  var fx_elem = '.shopify-section.gallery__section__outer.isActive:not(#fxrcpfltr-holder-section) .gallery__item';
  for (let i = 1; i < 6; i++) {
    jQuery(fx_elem).unwrap();
  }
  jQuery( "#fxrcpfltr-all-sections" ).contents().appendTo( "#fxrcpfltr-holder-section .gallery" );    
  
var fxrcpfltr_prod_title_arr = [];

jQuery( "[data-fxrcpfltr-prod_title]" ).each(function( index ) {
    fxrcpfltr_prod_title_arr.push(jQuery( this ).attr('data-fxrcpfltr-prod_title'));
});

var fxrcpfltr_prod_title_arr_uniq = fxrcpfltr_prod_title_arr.filter(function(element,index,self){
    return index === self.indexOf(element); 
});


jQuery('#fxrcpfltr-holder-section .gallery__item:not(.one-whole)').css('height',jQuery('#fxrcpfltr-holder-section .gallery__item:not(.one-whole)').height()*1.1+'px');


fxrcpfltr_prod_title_arr_uniq.forEach(fxrcpfltr_push_prod_filterlabels);
function fxrcpfltr_push_prod_filterlabels(item, index) {
  var selected_prod_count = fxrcpfltr_prod_title_arr.filter(x => x === item).length;
  jQuery('<span data-fxrcpfltr-prodtitle="'+item+'">'+item+' ('+selected_prod_count+')</span>').appendTo( ".fxrcpfltr-filter" );    
}

jQuery('#fxrcpfltr-holder-section .fxrcpfltr-filter').addClass('fxrcpfltr-filter-loaded');

jQuery(document).on("click", ".fxrcpfltr-filter span:not(.fxrcpfltr-selected-label)", function () {
    jQuery('.fxrcpfltr-selected-label').removeClass( "fxrcpfltr-selected-label" );
    jQuery(this).addClass( "fxrcpfltr-selected-label" );
    var selected_label = jQuery(this).attr( "data-fxrcpfltr-prodtitle" );

    jQuery("#fxrcpfltr-holder-section .gallery__item").addClass('fxrcpfltr-hide-recipe')

    if (selected_label == 'all') {
      jQuery('#fxrcpfltr-holder-section .gallery__item').removeClass('fxrcpfltr-hide-recipe')
    } else {
      jQuery('#fxrcpfltr-holder-section .gallery__item[data-fxrcpfltr-prod_title="'+selected_label+'"]').toggleClass('fxrcpfltr-hide-recipe')
    }
});

}, 500 );
})();
