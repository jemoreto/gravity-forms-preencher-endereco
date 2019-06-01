        jQuery(document).ready(function($) {
			

            function limpa_formulário_cep(obj) {
                // Limpa valores do formulário de cep.
                obj.closest('form').find(".gf-cep-autofill__rua input").val("");
                obj.closest('form').find(".gf-cep-autofill__bairro input").val("");
                obj.closest('form').find(".gf-cep-autofill__cidade input").val("");
                obj.closest('form').find(".gf-cep-autofill__uf select").val("");
            }
            
            //Quando o campo cep perde o foco.
            $(".gf-cep-autofill input").blur(function() {
				
				var obj = $(this);

                //Nova variável "cep" somente com dígitos.
                var cep = obj.val().replace(/\D/g, '');

                //Verifica se campo cep possui valor informado.
                if (cep != "") {

                    //Expressão regular para validar o CEP.
                    var validacep = /^[0-9]{8}$/;

                    //Valida o formato do CEP.
                    if(validacep.test(cep)) {
						
						obj.closest('form').addClass('cep-autofill-processando');
						obj.closest('form').append('<style type="text/css">.cep-autofill-processando {opacity:.5; transition:all ease .2s;}</style>');

                        //Consulta o webservice viacep.com.br/
                        $.getJSON("https://viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {

                            if (!("erro" in dados)) {
                                //Atualiza os campos com os valores da consulta.
                                obj.closest('form').find(".gf-cep-autofill__rua input").val(dados.logradouro);
                                obj.closest('form').find(".gf-cep-autofill__bairro input").val(dados.bairro);
                                obj.closest('form').find(".gf-cep-autofill__cidade input").val(dados.localidade);
                                obj.closest('form').find(".gf-cep-autofill__uf select").val(dados.uf);
								
								obj.closest('form').removeClass('cep-autofill-processando');
								
                            } //end if.
                            else {
                                //CEP pesquisado não foi encontrado.
                                limpa_formulário_cep(obj);
                                alert("CEP não encontrado.");
								
								obj.closest('form').removeClass('cep-autofill-processando');
                            }
                        });
                    } //end if.
                    else {
                        //cep é inválido.
                        limpa_formulário_cep();
                        alert("Formato de CEP inválido.");
                    }
                } //end if.
                else {
                    //cep sem valor, limpa formulário.
                    limpa_formulário_cep();
                }
            });
        });
