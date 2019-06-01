# Gravity Forms - Autopreenchimento de Endereço

### Plugin que habilita o preenchimento do endereço a partir do CEP inserido em um campo.

#### Para utilizar o autopreenchimento, é necessário adicionar classes nos campos relativos ao endereço

- Campo de CEP: adicione a classe "gf-cep-autofill".
- Campo da Rua: adicione a classe "gf-cep-autofill__rua".
- Campo do Bairro: adicione a classe "gf-cep-autofill__bairro".
- Campo da Cidade: adicione a classe "gf-cep-autofill__cidade".
- Campo do Estado: adicione a classe "gf-cep-autofill__uf".

Para adicionar classes em campos do Gravity Forms, você deve editar o formulário. Vá até o campo desejado e, na aba "Aparência", insira a classe em "Classe CSS personalizada".

#### Para correto funcionamento, os tipos de campo devem ser:

- Campo de Texto (`<input>`): CEP, Rua, Bairro e Cidade.
- Lista suspensa (`<select>`): Estado.
	
O campo Estado deve estar com a opção "mostrar valores" ligada.
O campo deve estar preenchido com os valores com as siglas dos estados. Se precisar, utilize o arquivo "estados-brasileiros.txt" presente na pasta "assets > recursos" do plugin.

#### Instalando o plugin

- Faça o download do .zip.
- Instale pelo painel administrativo do WordPress, em Plugins > Adicionar novo > Fazer upload do plugin.
- Faça o upload e ative o plugin.

#### Foram utilizados os seguintes scripts/serviços de terceiros:

ViaCEP - https://viacep.com.br

#### Este plugin foi adaptado do original para Contact Form 7:

Contact Form 7 – Autopreenchimento de Endereço (versão 1.0.6) - https://br.wordpress.org/plugins/cf7-cep-autofill/

#### Compatibilidade:

Este plugin foi testado com:
- Gravity Forms versão 2.4.9
- WordPress versão 5.2.1

**Este plugin é uma contribuição com a comunidade de desenvolvedores. Não há nenhuma garantia ou responsabilidade do autor sobre o uso em seu projeto. Use por sua conta e risco.**
