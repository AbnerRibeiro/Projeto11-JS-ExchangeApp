// jQuery
$(document).ready(function(){
	const api = 'https://currencydatafeed.com/api/data.php?token=fs3yuzrl7k8nv1ia2jf1&currency=BRL/USD'; 
	const botao = $('button');
	let resultado = $('#resultado');

	botao.click(function(){
		let valor = $('#valor').val();
		
		$.getJSON(api, function(data){
			let val = data.currency[0].value;
			let calculo = val*valor;	
		
			resultado.html(`<p>${calculo.toFixed(2)}</p>`);
		});
	});

});
// end jQuery