"use strict";

var recommendedCarousel = function(){
    var shelfRecommended = $('.shelf-recommended-items');
    if(shelfRecommended.find('.shelf-recommended-item').length < 1) return false;

    shelfRecommended.owlCarousel({
        items: 3,
        nav: true
    });
}

$(function(){ 
    recommendedCarousel();
});