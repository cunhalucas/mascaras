# mascaras
Arquivos para máscaras de CPF, CEP, RG, CNPJ, Telefone e Celular para inputs HTML.

* Este exemplo utiliza classes CSS para inserção das máscaras em seus respectivos inputs. Por exemplo, ao adicionar class="cpf-mascara" a um input, automaticamente este receberá o filtro/máscara para formatar os dados de entrada do input.

* Utilizo as bilbiotecas jQuery 3.2.1 e o excelente plugin jQuery Mask Plugin.

* Explicando o "{reverse: true}" nos códigos do arquivo mascaras.js: o valor true para essa propriedade faz com que, caso o usuario comece a digitar os dados de entrada no meio de um valor já inserido, a máscara também funcionará do final para o início do valor do input. A propriedade "reverse" com seu valor false faz com que a máscara somente funcione do início para o fim do valor de entrada.

# classes disponíveis

* CPF: class="cpf-mascara"
* CNPJ: class="cnpj-mascara"
* RG: class="rg-mascara"
* CEP: class="cep-mascara"
* Telefone: class="tel-mascara"
* Celular: class="cel-mascara"
