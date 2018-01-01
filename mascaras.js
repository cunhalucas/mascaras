$(document).ready(function() {
	// mascara CPF 
	$(".cpf-mascara").mask('000.000.000-00', {reverse: true});
	// mascara CNPJ
	$('.cnpj-mascara').mask('00.000.000/0000-00', {reverse: true});
	// mascara RG
	$('.rg-mascara').mask('00.000.000-0', {reverse: true});
	// mascara CEP
	$('.cep-mascara').mask('00000-000', {reverse: true});
	// mascara telefone
	$('.telefone-mascara').mask('(00) 0000-0000', {reverse: true});
	// mascara celular
	$('.celular-mascara').mask('(00) 00000-0000', {reverse: true});
});