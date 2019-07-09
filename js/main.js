// jQuery
$(document).ready(function(){
	const select = $('select');
	let resultado = $('#resultado');

	select.change(function(){
		let moeda = this.value;
		const api = `https://currencydatafeed.com/api/data.php?token=fs3yuzrl7k8nv1ia2jf1&currency=${moeda}/BRL`; 
		
		let valor = $('#valor').val();
		
		$.getJSON(api, function(data){
			let val = data.currency[0].value;
			let calculo = val*valor;
		
			resultado.html(`<p>${calculo.toFixed(2)}</p>`);
			$('#valor').val(null).focus();
			select[0].selectedIndex = 0;
		});

	});

});
// end jQuery