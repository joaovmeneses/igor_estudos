let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if (n>=1 && n<=100) {
        return true     
    } else {
        return false
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n) )!= -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `${num.value} adicionado!`
        lista.appendChild(item)
        res.innerHTML = ''

    } else {
        window.alert('[ERRO] Valor inválido ou já contido na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores para começar!')
    
    } else {
        let tot = valores.length
        maior = valores[0]
        menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos]>maior) 
                maior = valores[pos]
            if(valores[pos]<menor) 
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} números.</p>`
        res.innerHTML += `<p>Maior valor informado foi: ${maior}.</p>`
        res.innerHTML += `<p>Menor valor informado foi: ${menor}.</p>`
        res.innerHTML += `<p>Somando os valores temos: ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores é: ${media}.</p>`
    }
}