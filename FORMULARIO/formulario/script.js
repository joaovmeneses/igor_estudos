let nome = document.querySelector('input#nome')
let sobrenome = document.querySelector('input#sobrenome')
let telefone = document.querySelector('input#tel')
let contatos = []
let ctt = document.querySelector('div#ctt')

function salvar() {
    let contato = {
        nome: nome.value,
        sobrenome: sobrenome.value,
        telefone: telefone.value
    }
    contatos.push(contato)
    nome.value = ''
    sobrenome.value = ''
    telefone.value = ''
    mostrarcontato()
}

function mostrarcontato() {
    ctt.innerHTML = '<h1>Contatos</h1>'
    for(let i=0; i<contatos.length;i++){
        let contat0 = contatos[i]
        let criar = document.createElement('div')
        criar.textContent = `Nome: ${contat0.nome}, Sobrenome: ${contat0.sobrenome}, Telefone: ${contat0.telefone}`
        ctt.appendChild(criar)
    }
}