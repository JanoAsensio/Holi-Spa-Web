$(function(){
	$('.filter').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		let valor = $(this).attr('data-nombre');
		if(valor == 'todos'){
			$('.cont-work').show('1000');
		}else{
			$('.cont-work').not('.'+ valor).hide('1000');
			$('.cont-work').filter('.'+ valor).show('1000');
		}
	});
	
	let nosotros = $('#nosotros').offset().top,
		spa = $('#spa').offset().top,
		servicios = $('#servicios').offset().top,
		contacto = $('#contacto').offset().top;


	window.addEventListener('resize', function(){
		let nosotros = $('#nosotros').offset().top,
		spa = $('#spa').offset().top,
		servicios = $('#servicios').offset().top,
		contacto = $('#contacto').offset().top;
	});

	$('#enlace-inicio').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		},600);
	});
	$('#enlace-nosotros').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: nosotros -100
		},600);
	});
	$('#enlace-spa').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: spa -100
		},600);
	});
	$('#enlace-servicios').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: servicios -100
		},600);
	});
	$('#enlace-contacto').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: contacto
		},600);
	});

});