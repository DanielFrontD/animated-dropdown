jQuery(function($) {
	var w_height = $(window).innerHeight();
	var w_width = $(window).innerWidth();


	$('.box-f').css({
		'margin-top': w_height / 6 + 'px'
	});
	$('.accordion-d .content ul li.but').hide();
	$('.head-title p').hide();


	/*============================================================================*/
	/*                             SCRIPT PARA VANISH                             */
	/*============================================================================*/
	$( ".vanish" ).slideToggle(1000,"easeOutBounce", function(){
		$('.shadow').css({
			'display':'none'
		})
			$('.box-f').css({
			'overflow':'visible'
			})
		
	})

	/*============================================================================*/
	/*                          SCRIPT PARA MOVER LA CAJA                         */
	/*============================================================================*/	

	$('.no-mover').hide()
	$('.no-mover').click(function(e) {
	    $('#caja-move').draggable({ disabled: true });
	    
	    $('.no-mover').toggle(200)
	});

	$('.mover').click(function(e) {
	    $('#caja-move').draggable({disabled: false});

	    $('.no-mover').toggle(200)
	});



	/*============================================================================*/
	/*           SCRIPT ANIMACION DE CAJA Y PARA BOTONES DEL ACORDION             */
	/*============================================================================*/
	$('#desp').click(function(){

	
			$('.accordion-d .content ul#accordion').css({
						'position':'absolute',
						'width': '95%'
					})	
		

			$('.accordion-d .content ul#accordion').animate({
				width: '79%'
			},850,
				function(){
					$(this).css({
						'position':'relative',
						'width': '96%'
					})
				})	
		
			$('.accordion-d .content ul li').toggle('slide', { direction: 'left', easing: 'easeOutBounce' },820,
			function(){
				$('.accordion-d .content ul li.but').animate({							
							'marginTop':'5px'							
						},100,				
					function(){
						//$(this).find('div').show('slide', { direction: 'up', easing: 'easeInQuart' },1000)	
						$(this).find('.title').animate({
							opacity:1,
							padding: '10px'

						},300)
					});
			});
		

		
	})
	

	/*============================================================================*/
	/*                          SCRIPT QUE NO SE EJECUTA !!!!                     */
	/*============================================================================*/
	$("#accordion > li > div").click(function(){
 
			if(false == $(this).next().is(':visible')) {
			    $('#accordion ul').slideUp(300,'easeOutElastic');
			    $('.head-title p').hide('slide', { direction: 'left', easing: 'easeOutBounce' },840)
			}
			$(this).next().slideToggle(1500, 'easeOutElastic');
			$('.head-title p').toggle('slide', { direction: 'up', easing: 'easeOutBounce' },840)
			
		});


	/*============================================================================*/
	/*                             SCRIPT CENTRAR CAJA                            */
	/*============================================================================*/
	$(window).resize(function(){

		var w_height = $(window).innerHeight();
		var w_width = $(window).innerWidth();
		
		$('.box-f').css({
			'margin-top': w_height / 6 + 'px'
		});
	});


})

