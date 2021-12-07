function verificar() {
    var data = new Date()
    var ano =  data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value.length == ano) {
        alert('[ERRO] Verifique os dados e tente novamente')
    } else {
       
      var fsex = document.getElementsByName('radsex')
      var idade = ano - Number(fano.value)
      var genero = ''
      var img = document.createElement('img')
      img.setAttribute('id', 'foto')
      if (fsex[0].checked) {
          genero = 'Homem'
          if (idade >= 0 && idade < 10){
            //crianca
            img.setAttribute('src', 'menino-crianca.jpg')
          } else if (idade >=10 && idade < 21) {
              //jovem
              img.setAttribute('src', 'menino-jovem.jpg')
          } else if ( idade < 50) {
              //adulto
              img.setAttribute('src', 'homem.jpg')
          } else {
              // Idoso
              img.setAttribute('src', 'velho.jpg')
          }

      } else if (fsex[1].checked) {
          genero = 'Mulher'
          if (idade >= 0 && idade < 10){
            //crianca
            img.setAttribute('src', 'menina-crianca.jpg')
          } else if (idade >=10 && idade < 21) {
              //jovem
              img.setAttribute('src', 'menina-jovem.jpg')
          } else if ( idade < 50) { 
              //adulto
              img.setAttribute('src', 'mulher.jpg')
          } else {
              // Idoso
              img.setAttribute('src', 'velha.jpg')
          }
      } 
      res.style.textAlign = 'center'
      res.innerHTML = `Detectamos ${genero} com ${idade} anos`
      res.appendChild(img)
    }
}