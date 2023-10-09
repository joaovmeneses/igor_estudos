let nome = document.querySelector('input#nome')
let sobrenome = document.querySelector('input#sobrenome')
let telefone = document.querySelector('input#tel')
let contatos = []
let ctt = document.querySelector('div#ctt')

function salvar() {
    if(nome.value != '' && telefone.value != '' ){
        let contato = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            telefone: telefone.value
        }
        contatos.push(contato)
        adicionarContatoNaTabela()
        nome.value = ''
        sobrenome.value = ''
        telefone.value = ''
    }
}

function adicionarContatoNaTabela() {
    const table = document.getElementById('table')
    const tableRow = document.createElement('tr')

    const tdNome = document.createElement('td');
    const tdTelefone = document.createElement('td')
    const tdSobrenome = document.createElement('td')

    if(nome.value != '' && telefone.value != '' ){
        tdNome.textContent = nome.value;
        tdTelefone.textContent = telefone.value;
        tdSobrenome.textContent = sobrenome.value;
        
        tableRow.appendChild(tdNome)
        tableRow.appendChild(tdSobrenome)
        tableRow.appendChild(tdTelefone)

        table.appendChild(tableRow)
    }
}