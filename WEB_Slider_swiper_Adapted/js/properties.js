const swiper = new Swiper('.swiper', {

	// Параметры прописываемые вне элементов управления, буллетов и скрола, а в теле константы swiper:

	// Включение / отключение
	// Устанавливает бесконечное прокручивание - зацикливание сладера
	loop: true,
	// перетаскивание на ПК
	simulateTouch: true,											/* значение false - отключает перетасивание */
	// Чувствительность свайпа
	touchRation: 1, 												/* значение 0 отключит перетасивание на всех устройствах, значение выше ускорит перетаскивание */
	// Угол срабатывания свайпа/перетаскивания
	touchAngle: 45,												/* угол при котором перетаскивание/свайп сработает */
	// Курсор перетаскивания - анимированная рука
	grabCursor: true,												/* true - курсор анимированная рука, false - курсор стрелка */
	// Автовысота сладера - полезна при использовании текста в контенте сладера!
	autoHeight: true,
	// Устанавливает номер активного слайда - начинается с 0 ( с нуля, а не с 1, т.е 0 это первый слайд)
	initialSlide: 4,
	// Сбободный режим (удобно использовать с slidesPerView и mousewheel)!!!
	freeMode: true,
	// скорость прокрутки/перкеключения слайдов в мс
	speed: 7300,
	

	//******************************************************************************************************* */
	// Устанавливает одновременный показ несколько сладов - указать количество - можно указать дробное число 2,5 или 2,2 или 3,8!!!
	// запускает также работу / slideToClickedSlide: true, /
	slidesPerView: 3,
	// Если указать вместо количества значение 'auto', то ширина слайдера будет автоматически подстраиваться в зависимости от ширины контекта в сладе
	// !!! ВНИМАНИЕ - для корректной работы данной настройки в css указать / width: auto; / для класса со слайдами: / .swiper .swiper-slide /
	slidesPerView: 'auto',
	// Установка отступов между слайдами
	spaceBetween: 30,
	// Устанавливает количество пролистываемых сладов за раз (клик по кнопке или свайп)
	slidesPerGroup: 3,
	// Устанавливает активный (первый слайд к примеру) слайд по центру
	// удобнее смотрится с параметрами: / slidesPerView: 3, /  и  / slidesPerGroup: 1,/, можно также отключить loop / loop: false, /
	slidesPerView: 3,
	// Отключение функционала сладера если сладов меньше, чем указанно в /  slidesPerView: 3, / либо меньше чем нужно
	// если слады добавятся позже, функционал заработает автоматически
	watchOverflow: true,
	// переключение слайда при клике на сам слайд
	slideToClickedSlide: true,									/* срабатывает только при использовании совместно с /slidesPerView: 2,/ где нужно указвать 2 и более сладов показа одновременно */
	//******************************************************************************************************* */




	//******************************************************************************************************* */
	//******************************************************************************************************* */

	// Управление с клавиатуры:
	keyboard: {
		// Включить / выключить
		enabled: true,
		// Включить / выключить: только когда слайдер в пределах вьюпорта (сладер будет листаться с помощью стрелок, только тогда когда он в пределах видимости на экране, а не всегда)
		onlyInViewport: true,
		//Включить / выключить управлениями клавишами PageUp и PageDown
		pageUpDown: true,
	},

	//******************************************************************************************************* */
	//******************************************************************************************************* */

	// Переключение сладов с помощью колеса мыши
	mousewheel: {
		// Чувствительность колеса мыши
		sensitivity: 1,
		// Класс объекта на котором будет срабатывать прокрутка мышью - указывать не обязательно!
		// !!! ВНИМАНИЕ !!! Если указанный класс будет использоваться на многих сладерах, то прокрутка будет по всем одновременно
		eventsTarget: ".swiper",
	},

	//******************************************************************************************************* */
	//******************************************************************************************************* */

	// Автопрокрутка (удобно использровать с параметром speed / speed: 7300, / для более плавной прокрутки
	autoplay: {
		// Пауза между прокруткой в мс
		delay: 1000,
		// Заккончить прокрутку на последнем слайде (не работает с бесконечной прокруткой => loop: true,)
		stopOnLastSlide: true,
		// Отключить после ручного прееключения
			disableOnInteraction: false,
		// Пауза при наведении мыши на слайдер
			pauseOnMouseEnter: true,
	},

	//******************************************************************************************************* */
	//******************************************************************************************************* */

	// Эффекты ппереключения слайдов
	// ЛИСТАНИЕ слайдов
	effect: 'slide',
	
	// Смена прозрачности путём НАЛОЖЕНИЯ одного слайда на другой
	// !!! ВНИМАНИЕ - изображения или контекст должны былть одного размера, иначе задний слад будет виден!!!
	effect: 'fade',
	// Дополнения к fade эффекту
	fadeEffect: {
		// Параллельная смена прозрачности - данная дополнительная настройка устанаяет задний сладер и тем самым изображения или контент могут быть в разных размерах
		crossFade: true,
	},

	// ПЕРЕВОРОТ сладов при прееключениия (удобно использовать с параметром speed и grabCursor - для плавности и интерактивности)
	effect: 'flip',
	// Дополнение к flip эффекту
	flipEffect: {
		//Тень
		slideShadows: true,
		// Показ только активного слайда
		limitRatation: true,
	},
	speed: 800,
	grabCursor: true,

	// Вращающийся КУБ (3D)
	// !!! ВНИМАНИЕ - в css обязательно ограничить ширину главного  контейнера / width: ...px/ иначе будут разрывы между изображением слайдов или контентом
	effect: 'cube',
	// Дополнение к cube эффекту
	cubeEffect: {
		// Настройка тени
		slideShadows: true,
		shadow: true,
		shadowOffset: 20,
		shadowScale: 0.94,
	},
	
	// Эффект ПОТОКА ( удобно использовать с slidesPerView и grabCursor) для более реального 3D  эффекта
	effect: 'coverflow',
	// Дополнение к coverflow эффекту
	coverflowEffect: {
		// Угол
		rotate: 20,
		//Наложение
		stretch: 50,
		// Тень
		slideShadows: true,
	},
	slidesPerView: 3,
	grabCursor: true,

	//******************************************************************************************************* */
	//******************************************************************************************************* */

// Адаптив слайдера
	// Брейк поинты для ШИРИНЫ ЭКРАНА
	// по принципу MobileFirst
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		480: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		},
	},
	
	// Брекпоинты для СООТНОШЕНИЯ СТОРОН (высота делённая на ширину) - ( !!!более интересный вариант!!!)
	breakpoints: {
		'@0.75': {
			slidesPerView: 1,
		},
		'@1.00': {
			slidesPerView: 2,
		},
		'@1.50': {
			slidesPerView: 3,
		},
	},

	//******************************************************************************************************* */
	//******************************************************************************************************* */


	// ZOOM картинки 
	// !!! ВНИМАНИЕ - нужно в HTML добавить класс / swiper-zoom-container / как второй к обволакивающему классу амой картинки, данный клас нужно добавлять к каждой обёрке картинки
	zoom: {
		//Максимальное увеличение
		maxRatio: 5,
		// Минимальное увеличение
		minRation: 1,
	},

	//******************************************************************************************************* */
	//******************************************************************************************************* */


	// Параметры обновления сладера - данные параменты необходимы когда сладйер вызывается по табу
	// Обновить слайдер при изменении элементов слайдера
	observer: true,

	// Обновить слайдер при измениии родительских элементов слайдера
	observeParents: true,

	// Обновить слайдер при изменении дочерних элементов сладйера
	obseeveSlideChildren: true,
	
	//******************************************************************************************************* */
	//******************************************************************************************************* */



	//*****************!!! ВНИМАНИЕ - НЕ РАБОТАЕТ ПО УРОКУ, НУЖНО РАЗБИРАТЬСЯ С GRID************************** */
	// Устанавливает мультирядность в сладере - т.е. слайдер в несколько рядов
	// !!! ВНИМАНИЕ:
	//					1. отключаем автовысоту - устанавливаем значение false / autoHeight: false, / и бесконечное прилистывание loop / loop: false, /
	//					2. устанавливаем аналогичное числовое значение для slidesPerView / slidesPerView: 2, /
	//					3. в css у всего слайдера (главного контейнера) устанавливаем фиксированную высоту / heinght: ...px; /
	//					4. в css у самих слайдов высчитать высоту слайдов либой установить фиксированную
	//						height: calc( (100% - 30px) / 2 );  - где 30px это возможные отступы усли установлены с помощью spaceBetween
	//						overslow: hidden;

	/* 					ПРИМЕР - НИЖЕ:

	.swiper{
		height: 800px;
	}
	.swiper .swiper-slide{
		height: calc((100% - 30px) / 2);
		overflow: hidden;
		
	} 

	*/

	loop: false,
	autoHeight: false,
	slidesPerView: 2,
	slidesPerColumn: 2,
	spaceBetween: 30,
	//******************************************************************************************************* */




});