function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value)===0 || Number(fano.value) >= ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade>=0 && idade<4) {
                img.setAttribute('src', 'homembebe.jpg')
            } else if (idade>=4 && idade<12) {
                img.setAttribute('src', 'homemcriança.jpg')
            } else if (idade>=12 && idade<21) {
                img.setAttribute('src', 'homemjovem.jpg')
            } else if (idade>=21 && idade<50) {
                img.setAttribute('src', 'homemadulto.jpg')
            } else {
                img.setAttribute('src', 'homemvelho.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade>=0 && idade<4) {
                img.setAttribute('src', 'mulherbebe.jpg')
            } else if (idade>=4 && idade<12) {
                img.setAttribute('src', 'mulhercriança.jpg')
            } else if (idade>=12 && idade<21) {
                img.setAttribute('src', 'mulherjovem.jpg')
            } else if (idade>=21 && idade<50) {
                img.setAttribute('src', 'mulheradulta.jpg')
            } else {
                img.setAttribute('src', 'mulhervelha.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}