function setNavbar() {
if ($(document).scrollTop() > 160) {
        $('.tm-sidebar').addClass('sticky');
}
    else {
            $('.tm-sidebar').removeClass('sticky');
    }
}

        $(document).ready(function(){
            // Single page nav
            $('.tm-main-nav').singlePageNav({
                'currentClass' : "active",
                offset : 20
            });

            // Detect window scroll and change navbar
            setNavbar();
            $(window).scroll(function() {
              setNavbar();
            });

            $('.tm-gallery').magnificPopup({
              delegate: 'a',
              type: 'image',
              gallery: {enabled:true}
            });
        });
