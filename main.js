/*
    Adding some behavior to the page with jQuery
*/

$( window ).on( 'load', function () {
    $( '.header-title' ).addClass( 'animated bounceInDown' );
    $( '.header-title' ).css( 'display', 'block' );
    
    $( '.header-title' ).on( 'click', function () {
        $( '.header-title' ).addClass( 'animated fadeOut' );
    } );
    $( '.main' ).addClass( 'animated slideInUp' );
    $( '.main' ).css( 'display', 'block' );

});
