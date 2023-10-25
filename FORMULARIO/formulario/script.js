let nome = document.querySelector('input#nome')
let sobrenome = document.querySelector('input#sobrenome')
let telefone = document.querySelector('input#tel')
let contatos = []
let table = document.querySelector('table#table')

function salvar() {
    if (nome.value != '' && telefone.value != '') {
        let contato = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            telefone: telefone.value
        }
        contatos.push(contato)
        adicionarContatoNaTabela(contato)
        nome.value = ''
        sobrenome.value = ''
        telefone.value = ''
    }
}

function adicionarContatoNaTabela(contato) {
    const tableRow = document.createElement('tr')

    const tdNome = document.createElement('td')
    const tdTelefone = document.createElement('td')
    const tdSobrenome = document.createElement('td')

    tdNome.textContent = contato.nome;
    tdTelefone.textContent = contato.telefone;
    tdSobrenome.textContent = contato.sobrenome;

    tableRow.appendChild(tdNome)
    tableRow.appendChild(tdSobrenome)
    tableRow.appendChild(tdTelefone)

    const tdEdit = document.createElement('td')
    const tdDelete = document.createElement('td')

    const editButton = document.createElement('input')
    editButton.type = 'button'
    editButton.value = 'Editar'
    editButton.addEventListener('click', () => editarOContato(contato, tableRow))

    const deleteButton = document.createElement('input')
    deleteButton.type = 'button'
    deleteButton.value = 'Deletar'
    deleteButton.addEventListener('click', () => deletarOContato(contato, tableRow))

    tdEdit.appendChild(editButton)
    tdDelete.appendChild(deleteButton)

    tableRow.appendChild(tdEdit)
    tableRow.appendChild(tdDelete)

    table.appendChild(tableRow)
}

function editarOContato(contato, tableRow) {
    const novoNome = prompt("Novo nome:", contato.nome);
    const novoSobrenome = prompt("Novo sobrenome:", contato.sobrenome);
    const novoTelefone = prompt("Novo telefone:", contato.telefone);

    contato.nome = novoNome;
    contato.sobrenome = novoSobrenome;
    contato.telefone = novoTelefone;

    const [tdNome, tdSobrenome, tdTelefone] = tableRow.children;
    tdNome.textContent = novoNome;
    tdSobrenome.textContent = novoSobrenome;
    tdTelefone.textContent = novoTelefone;
}

function deletarOContato(contato, tableRow) {
    const index = contatos.findIndex((c) => c === contato);

    if (index !== -1) {
        contatos.splice(index, 1);
        tableRow.remove();
    }
}
