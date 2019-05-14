$(document).ready(function () {

	var afterLoad = function (instance, current) {
		var caption = document.querySelector('.fancybox-caption__body');
		var index = instance.currIndex;
		caption && (caption.innerHTML = i18next.t('caption_' + index));
	}

	var fancyBox = function () {

		var items = [
			{
				src: '../img/arbour/1.png',
				opts: {
					caption: 'The Arbour is designed to fit in a well lit corner of your house or balcony. It is 120cm tall with a footprint of 40cm x 40cm. All you need is to plug it into a power outlet'
				}
			},
			{
				src: '../img/arbour/2.png',
				opts: {
					caption: "With a 10L reservoir and a water recirculating mechanism you can be sure that you won't need to interact with the tower for at leasst 2 weeks."
				}
			},
			{
				src: '../img/arbour/3.png',
				opts: {
					caption: "The standard pot holder diameter is 12cm and there's a distance of 15cm to the water nozzle. This allows for standard sprout pots. But the pot holders can be replaced with larger ones if needed. Shoot us an email if you know your needs."
				}
			},
			{
				src: '../img/arbour/4.png',
				opts: {
					caption: "The Wemos D1 mini is the most used Wifi chip based on the Arduino platform. Connect to the server through your home wifi network in just a few seconds and get a notification on the Meridia app any time there's a connection problem. Which will never happen. The chip is very stable."
				}
			},
			{
				src: '../img/arbour/5.png',
				opts: {
					caption: "2 12V pumps with a 1L/min pumping load. This means they will each be working for less than 10s a day to ensure proper watering to even the most thirsty of plants. 2 pumps also means that each of the 2 levels of the tower can be watered independently so they support different types of plants."
				}
			},
			{
				src: '../img/arbour/6.jpg',
				opts: {
					caption: "Plug it in, fill the tank, install the app. That's what it takes to control watering from your phone"
				}
			},
			{
				src: '../img/arbour/7.jpg',
				opts: {
					caption: "You can set a schedule for each of the 2 levels, or you can water manually. The app also gives you tips on how to change your watering habits based on seasons and weather."
				}
			}
		];

		$('.open-gallery-1').click(function () {
			$.fancybox.open(items, {
				loop: false,
				arrows: false,
				smallBtn: false,
				toolbar: false,
				afterLoad: afterLoad
			}, 0);
		});

		$('.open-gallery-2').click(function () {
			$.fancybox.open(items, {
				loop: false,
				arrows: false,
				smallBtn: false,
				toolbar: false,
				afterLoad: afterLoad
			}, 3);
		});

		$('.open-gallery-3').click(function () {
			$.fancybox.open(items, {
				loop: false,
				arrows: false,
				smallBtn: false,
				toolbar: false,
				afterLoad: afterLoad
			}, 5);
		});
	};

	// Call the functions 
	fancyBox();

});