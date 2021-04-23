// Header
window.onscroll = function showHeader() {
    var header = document.querySelector('.header__row');
    if(window.pageYOffset > 1){
        header.classList.add('active');
    } else{
        header.classList.remove('active');
    }
}

// Burger 

$(document).ready(function() {
	$('.header__menu-burger').click(function(event) {
		$('.header__menu-burger,.header__menu-body').toggleClass('active');
	})
})

// Slider 

new Swiper('.admission__slider', {
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});