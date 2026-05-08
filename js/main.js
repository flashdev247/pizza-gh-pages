 AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

(function($) {

	"use strict";

	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll',
    horizontalOffset: 0,
	  verticalOffset: 0
  });

  // Scrollax
  $.Scrollax();


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();

	var carousel = function() {
		$('.home-slider').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:false,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
	    responsive:{
	      0:{
	        items:1,
	        nav:false
	      },
	      600:{
	        items:1,
	        nav:false
	      },
	      1000:{
	        items:1,
	        nav:false
	      }
	    }
		});
		$('.carousel-work').owlCarousel({
			autoplay: true,
			center: true,
			loop: true,
			items:1,
			margin: 30,
			stagePadding:0,
			nav: true,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1,
					stagePadding: 0
				},
				600:{
					items: 2,
					stagePadding: 50
				},
				1000:{
					items: 3,
					stagePadding: 100
				}
			}
		});

	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	
	var counter = function() {
		
		$('#section-counter').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();

	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();


	// navigation
	var OnePageNav = function() {
		$(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function(e) {
		 	e.preventDefault();

		 	var hash = this.hash,
		 			navToggler = $('.navbar-toggler');
		 	$('html, body').animate({
		    scrollTop: $(hash).offset().top
		  }, 700, 'easeInOutExpo', function(){
		    window.location.hash = hash;
		  });


		  if ( navToggler.is(':visible') ) {
		  	navToggler.click();
		  }
		});
		$('body').on('activate.bs.scrollspy', function () {
		  console.log('nice');
		})
	};
	OnePageNav();


	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: true,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });


  $('#appointment_date').datepicker({
	  'format': 'm/d/yyyy',
	  'autoclose': true
	});

	$('#appointment_time').timepicker();

	var initCart = function() {
		var CART_KEY = 'pizza_cart_items';
		var $body = $('body');
		var cartItems = [];

		var saveCart = function() {
			try {
				localStorage.setItem(CART_KEY, JSON.stringify(cartItems));
			} catch (e) {}
		};

		var loadCart = function() {
			try {
				var stored = localStorage.getItem(CART_KEY);
				if (!stored) {
					return [];
				}
				var parsed = JSON.parse(stored);
				return Array.isArray(parsed) ? parsed : [];
			} catch (e) {
				return [];
			}
		};

			var formatPrice = function(price) {
				// format as Vietnamese đồng with dot thousands separator
				var n = Number(price || 0);
				var intVal = Math.round(n);
				return intVal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ' VNĐ';
			};

		var getCartCount = function() {
			return cartItems.reduce(function(total, item) {
				return total + item.quantity;
			}, 0);
		};

		var getCartTotal = function() {
			return cartItems.reduce(function(total, item) {
				return total + (item.price * item.quantity);
			}, 0);
		};

		var createCartUI = function() {
			var cartHTML = '' +
				'<button type="button" class="cart-float-btn" aria-label="Mở giỏ hàng">🛒 <span class="cart-count-badge">0</span></button>' +
				'<div class="cart-overlay"></div>' +
				'<aside class="cart-panel" aria-hidden="true">' +
					'<div class="cart-panel-header">' +
						'<h4>Giỏ hàng</h4>' +
						'<button type="button" class="cart-close-btn" aria-label="Đóng giỏ hàng">&times;</button>' +
					'</div>' +
					'<div class="cart-items"></div>' +
					'<div class="cart-empty">Chưa có sản phẩm trong giỏ hàng.</div>' +
					'<div class="cart-summary">' +
						'<p><strong>Tổng cộng:</strong> <span class="cart-total">0 VNĐ</span></p>' +
					'</div>' +
					'<button type="button" class="btn btn-primary cart-checkout-btn">Thanh toán</button>' +
					'<div class="payment-methods">' +
						'<p>Chọn phương thức thanh toán:</p>' +
						'<button type="button" class="btn btn-outline-light payment-method-option" data-method="Tiền mặt">Tiền mặt</button>' +
						'<button type="button" class="btn btn-outline-light payment-method-option" data-method="Thẻ ngân hàng">Thẻ ngân hàng</button>' +
						'<button type="button" class="btn btn-outline-light payment-method-option" data-method="Ví điện tử">Ví điện tử</button>' +
					'</div>' +
					'<p class="checkout-success"></p>' +
				'</aside>';

			$body.append(cartHTML);
		};

		var renderCart = function() {
			var $cartItems = $('.cart-items');
			var $cartEmpty = $('.cart-empty');
			var $cartTotal = $('.cart-total');
			var $countBadge = $('.cart-count-badge');
			var $checkoutBtn = $('.cart-checkout-btn');

			$cartItems.empty();

			cartItems.forEach(function(item) {
				var $row = $('<div class="cart-item-row"></div>');
				var $info = $('<div class="cart-item-info"></div>');
				var $name = $('<p class="cart-item-name"></p>').text(item.name);
				var $meta = $('<small class="cart-item-meta"></small>').text(item.quantity + ' x ' + formatPrice(item.price));
				var $remove = $('<button type="button" class="cart-remove-btn">Xóa</button>');
				$remove.attr('data-id', item.id);

				$info.append($name).append($meta);
				$row.append($info).append($remove);
				$cartItems.append($row);
			});

			$countBadge.text(getCartCount());
			$cartTotal.text(formatPrice(getCartTotal()));

			var hasItems = cartItems.length > 0;
			$cartEmpty.toggle(!hasItems);
			$checkoutBtn.prop('disabled', !hasItems);
		};

		var openCart = function() {
			$('.cart-overlay').addClass('show');
			$('.cart-panel').addClass('show').attr('aria-hidden', 'false');
		};

		var closeCart = function() {
			$('.cart-overlay').removeClass('show');
			$('.cart-panel').removeClass('show').attr('aria-hidden', 'true');
		};

		var addToCart = function(product) {
			var existing = cartItems.find(function(item) {
				return item.id === product.id;
			});

			if (existing) {
				existing.quantity += 1;
			} else {
				cartItems.push(product);
			}

			saveCart();
			renderCart();
		};

		var extractProduct = function($button) {
			var $menuWrap = $button.closest('.menu-wrap');
			var $serviceWrap = $button.closest('.services-wrap');
			var $context = $menuWrap.length ? $menuWrap : $serviceWrap;
			var name = $.trim($context.find('.text h3').first().text()) || 'Sản phẩm';
				var priceText = $.trim($context.find('.price span').first().text()) || '0 VNĐ';
				var price = 0;
				// If price is in VNĐ (e.g. "72.500 VNĐ"), remove non-digits and parse as integer
				if (/VNĐ|VND/i.test(priceText)) {
					var digits = priceText.replace(/[^0-9]/g, '');
					price = parseInt(digits, 10) || 0;
				} else {
					// fallback: parse as float (USD-like values)
					price = parseFloat(priceText.replace(/[^0-9.]/g, '')) || 0;
				}
				var id = name + '_' + price;

			return {
				id: id,
				name: name,
				price: price,
				quantity: 1
			};
		};

		createCartUI();
		cartItems = loadCart();
		renderCart();

		$body.on('click', '.cart-float-btn', function() {
			openCart();
		});

		$body.on('click', '.cart-close-btn, .cart-overlay', function() {
			closeCart();
		});

		$body.on('click', '.cart-remove-btn', function() {
			var id = $(this).attr('data-id');
			cartItems = cartItems.filter(function(item) {
				return item.id !== id;
			});
			saveCart();
			renderCart();
		});

		$body.on('click', '.cart-checkout-btn', function() {
			if (!cartItems.length) {
				return;
			}
			$('.checkout-success').text('');
			$('.payment-methods').addClass('show');
		});

		$body.on('click', '.payment-method-option', function() {
			var method = $(this).data('method');
			cartItems = [];
			saveCart();
			renderCart();
			$('.payment-methods').removeClass('show');
			$('.checkout-success').text('Đặt hàng thành công bằng ' + method + '!');
		});

		$body.on('click', '.menu-wrap .btn.btn-white.btn-outline-white, .services-wrap .btn.btn-white.btn-outline-white', function(e) {
			e.preventDefault();
			var product = extractProduct($(this));
			addToCart(product);
		});
	};
	initCart();



})(jQuery);
