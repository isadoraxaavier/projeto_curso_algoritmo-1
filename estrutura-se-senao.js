/*   
   se operacao = "+" entao
   resultado: valor01 + valor02
   senao
      se operacao = "-" entao
           resultado := valor01 - valor02
        senao
           se operacao = "*" entao
                resultado := valor01 * valor02
             senao
                se operacao = "/" entao
                     resultado := valor01 / valor02
             fimse
           fimse
        fimse
     fimse
     escreva("O resultado desse calculo é: ", resultado)
	*/
	
	
	function acaoBotao(params){
	var valor01, valor02, operacao, resultado
	valor01 = prompt("Digite o primeiro valor: ")
	operacao = prompt("Digite a operação: Ex: + , - , * , /")
	valor02 = prompt("Digite o segundo valor: ")
	
	if ( operacao == "+" ){
		resultado = parseInt( valor01 ) + parseInt( valor02 )
	}else if(operacao == "-"){
		resultado = parseInt( valor01 ) - parseInt( valor02 )
	}else if(operacao == "*"){
		resultado = parseInt( valor01 ) * parseInt( valor02 )	
	}else if(operacao == "/"){
		resultado = parseInt( valor01 ) / parseInt( valor02 )
	}
	document.getElementById("paragrafo").innerText = resultado	
	}
