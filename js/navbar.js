(function(){

	'use strict'
       

	var siteMenuClone = function() {
		var jsCloneNavs = document.querySelectorAll('.js-clone-nav');
		var siteMobileMenuBody = document.querySelector('.site-mobile-menu-body');
		


		jsCloneNavs.forEach(nav => {
			var navCloned = nav.cloneNode(true);
			navCloned.setAttribute('class', 'site-nav-wrap');
			siteMobileMenuBody.appendChild(navCloned);
		});

		setTimeout(function(){

			var hasChildrens = document.querySelector('.site-mobile-menu').querySelectorAll(' .has-children');

			var counter = 0;
			hasChildrens.forEach( hasChild => {
				
				var refEl = hasChild.querySelector('a');
				var newElSpan = document.createElement('span');


				// prepend equivalent to jquery
				hasChild.insertBefore(newElSpan, refEl);

				newElSpan.style.color='#ffb629'
				var arrowCollapse = hasChild.querySelector('.arrow-collapse');
				arrowCollapse.setAttribute('data-bs-toggle', 'collapse');
				arrowCollapse.setAttribute('data-bs-target', '#collapseItem' + counter);

				var dropdown = hasChild.querySelector('.dropdown');
				dropdown.setAttribute('class', 'collapse');
				dropdown.setAttribute('id', 'collapseItem' + counter);

				counter++;
			});

		}, 1000);


		// Click js-menu-toggle

		var menuToggle = document.querySelectorAll(".js-menu-toggle");
		var mTog;
		menuToggle.forEach(mtoggle => {
			mTog = mtoggle;
			mtoggle.addEventListener("click", (e) => {
				if ( document.body.classList.contains('offcanvas-menu') ) {
					document.body.classList.remove('offcanvas-menu');
					mtoggle.classList.remove('active');
					mTog.classList.remove('active');
				} else {
					document.body.classList.add('offcanvas-menu');
					mtoggle.classList.add('active');
					mTog.classList.add('active');
				}
			});
		})



		var specifiedElement = document.querySelector(".site-mobile-menu");
		var mt, mtoggleTemp;
		document.addEventListener('click', function(event) {
			var isClickInside = specifiedElement.contains(event.target);
			menuToggle.forEach(mtoggle => {
				mtoggleTemp = mtoggle
				mt = mtoggle.contains(event.target);
			})

			if (!isClickInside && !mt) {
				if ( document.body.classList.contains('offcanvas-menu') ) {
					document.body.classList.remove('offcanvas-menu');
					mtoggleTemp.classList.remove('active');
				}
			}

		});

	}; 
	siteMenuClone();


})()

window.addEventListener('scroll', function() {
    const menuBg = document.querySelector('.menu-bg-wrap');
    const siteNavLinks = document.querySelectorAll('.site-nav .site-navigation .site-menu > li > a');
    const burger = document.querySelectorAll('.burger');
    const logoImage = document.querySelector('.logo img');

    if(window.scrollY > 50) { 
        menuBg.classList.add('menu-bg-scroll');
	

		if(siteNavLinks.length > 0) { // Verifica si la lista no está vacía
			siteNavLinks[siteNavLinks.length - 1].style.color = '#fff';
		}


    } else {
		//remove class 
        menuBg.classList.remove('menu-bg-scroll');
		logoImage.classList.remove('invert-color-logo-papagayo');
        
        burger.forEach(burger => {
            burger.classList.remove('scroll');
        });

        siteNavLinks.forEach(link => {
            link.style.color = '';
        });
    }
});

// Función para manejar el botón de scroll hacia arriba
function scrollFunction() {
    var scrollToTopButton = document.querySelector(".scrollToTop");
    if (scrollToTopButton) {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopButton.classList.add("scroll-show");
        } else {
            scrollToTopButton.classList.remove("scroll-show");
        }
    }
}
window.onscroll = scrollFunction;


var scrollToTopButton = document.querySelector(".scrollToTop");
if (scrollToTopButton) {
    scrollToTopButton.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}




