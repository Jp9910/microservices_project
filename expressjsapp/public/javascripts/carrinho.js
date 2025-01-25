$(document).ready(function () {
	adicionarFuncaoBotaoEnviar();
});

function adicionarFuncaoBotaoEnviar()
{
	$('#botao-testar').click(function() {
		let nome = $('#input-nome').val();
		$.ajax({
			url: "cargo?id="+params.id+"&nome="+nome,
			type: 'PUT',
			success: function(result) {
				$('#teste').append(result);
				$('#p-info').text('Cargo alterado. Recarregando página...');
				$('#p-info').show();
				$('#spinner').show();
				setTimeout(function(){
					window.location.replace(window.location.href)
				}, 3000)
			}
		}).fail(function(jqXHR, textStatus, errorThrown){
			$('#p-info').text(textStatus + ". " + errorThrown);
			$('#p-info').show();
		});
	});
}