function   verificaSeOChutePossuiValorValido(chute){
const numero = +chute

    if (chuteForInvalido(numero)){
      elementoChute.innerHTML += '<div>valor inválido</div>'
      return
    }
    if(numeroForMaiorOuMenorQueOValorPermitido(numero))
      elementoChute.innerHTML +=`
      <div>valor inválido: Fale um número entre ${menorValor} e       
      ${maiorValor} </div>`
    }
    if(numero === numeroSecreto) {
      documento.body.innerHTML = `
      <h1>Você acertou!</h1>
      <h3> O número secreto era ${numeroSecreto}`
    } else if ( numero > numeroSecreto){
      elementoChute.innerHTML += `
      <div> O número secreto é menor<i class="fa-solid fa-down=long"></i></div>
      ` 
    } else {
      elementoChute.innerHTML += `
      <div> O número secreto é maior<i class="fa-solid fa-up=long"></i></div>
      ` 
    }

function chuteForInvalido(numero) {
    return Number.isNaN(numero)  
  }

function numeroForMaiorOuMenorQueOValorPermitido(numero)
   return  numero > maiorValor || numero < menorValor