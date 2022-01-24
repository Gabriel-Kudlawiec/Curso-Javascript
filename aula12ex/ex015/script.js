function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano ) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            gênero = 'Homem'
            if(idade >=0 && idade < 15) {
               // Criança 
               img.setAttribute('src', 'Criança homem.jpg')
            } else if (idade <= 25) {
               // Jovem
               img.setAttribute('src', 'Jovem homem.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'Adulto homem.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'Idoso homem.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if(idade >=0 && idade < 15) {
                // Criança
                img.setAttribute('src', 'Criança menina.jpg')
             } else if (idade <=25) {
                // Jovem
                img.setAttribute('src', 'Jovem menina.jpg')
             } else if (idade < 50) {
                 // Adulto
                 img.setAttribute('src', 'Adulta menina.jpg')
             } else {
                 // Idoso
                 img.setAttribute('src', 'Mulher Idosa.jpg')
             }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
} 