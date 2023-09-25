function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length==0 || fim.value.length==0 || passo.value.length==0) {
        res.innerHTML = 'Impossível Contar'
        window.alert('[ERRO] faltam dados!')
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(i<f){
            for(let c=i;c<=f;c+=p) {
            res.innerHTML += ` ${c} \u{1F449}`
        }
        } else {
            for(let c=1; c>=f;c-=p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        
    }
}