const menuIcon = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
function toggleMenuIcon() {
	menuIcon.classList.toggle("active");
	menuBody.classList.toggle("active");
}
menuIcon.addEventListener("click", toggleMenuIcon);


$(".menu__icon").click(function () {
	$('body').toggleClass('lock-scroll');
});


function ibg() {

	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}

ibg();

/* spoller

$(document).ready(function () {
	$('.spoiler__title').click(function (event) {
		if ($('.spoiler').hasClass('one')) {  //если добавить к .spoiler класс 'one', то получится "аккардеон"
			$('.spoiler__title').not($(this)).removeClass('active');
			$('.spoiler__content').not($(this).next()).slideUp(200);
		}
		$(this).toggleClass('active').next().slideToggle(200);
	});
});

*/

$('.slider-reviews__body').slick({
	centerMode: true,
	arrows: false,
	dots: true,
	centerPadding: '280px',
	slidesToShow: 1,
	autoplay: true,
	autoplaySpeed: 7000,
	pauseOnHover: true,
	pauseOnDotsHover: true,
	responsive: [
		{
			breakpoint: 1280,
			settings: {
				centerPadding: '200px',
			}
		},
		{
			breakpoint: 1024,
			settings: {
				centerPadding: '150px',
			}
		},
		{
			breakpoint: 768,
			settings: {
				centerPadding: '100px',
			}
		},
		{
			breakpoint: 568,
			settings: {
				centerMode: false,
			}
		},
	],
});