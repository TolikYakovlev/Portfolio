//Carousel
$(document).ready(function () {

	// Находим элемент в котором будет инициализирована карусель
	const photoCarousel = $('#photo-carousel');

	// Создаем карусель в элементе #photo-carousel
	photoCarousel.owlCarousel({

		items: 1,
		loop: true,
        nav: true,
        navText: [
          '<svg width="35" height="35" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>',
          '<svg width="35" height="35" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>'
        ]
	});

});

//Mobile navigation
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.header__nav-menu');

navIcon.addEventListener('click', function () {
	this.classList.toggle('nav-icon--active');
	nav.classList.toggle('header__nav-menu--active');
});

// Находим ссылки внутри мобильной навигации
const navLinks = document.querySelectorAll('.header__nav-menu a');

// Обходим ссылки методом forEach
navLinks.forEach(function (item) {
	// Для каждой ссылки добавляем прослушку по событию "Клик"
	item.addEventListener('click', function () {
		navIcon.classList.remove('nav-icon--active'); // Убираем активный класс у иконки моб. навигации
		nav.classList.remove('header__nav-menu--active'); // Убираем активный класс у блока моб. навигации
	})
});

//Backtop Button
const backTopBtn = document.querySelector('#backtop');

backTopBtn.style.opacity = 0;

document.addEventListener('scroll', function(){
	if(window.pageYOffset > 1200) {
		backTopBtn.style.opacity = 1;
	}
	else
	{
		backTopBtn.style.opacity = 0;
	}
});





