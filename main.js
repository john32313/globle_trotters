
// scrollIntoView smooth 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const arrowScroll = $("#arrow_scroll");
arrowScroll.fadeOut(1);
let isScrolling;

// Listen for scroll events
window.addEventListener('scroll', function ( event ) {
	// Clear our timeout throughout the scroll
	window.clearTimeout( isScrolling );
	// Set a timeout to run after scrolling ends
	isScrolling = setTimeout(function() {
        if (this.scrollY >= 120) {    
            arrowScroll.fadeIn(200);
        } else {
            arrowScroll.fadeOut(200); 
        }
	}, 40);
}, false);

