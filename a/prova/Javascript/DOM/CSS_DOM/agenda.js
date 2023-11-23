// Declarando uma array vazia para armazenar os contatos
let contacts = [];

// Função para adicionar um novo contato à lista
function addContact() {
    // Obtendo os valores dos campos de nome e telefone do formulário
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;

    // Verificando se os campos estão preenchidos e se o número de telefone é válido
    if (name && phone && isValidPhoneNumber(phone)) {
        // Verificando se o contato já existe na lista
        let isDuplicate = contacts.some(contact => contact.name === name || contact.phone === phone);

        if (!isDuplicate) {
            // Adicionando o novo contato à lista
            contacts.push({ name, phone });
            // Atualizando a lista na interface
            updateContactList();
        } else {
            // Exibindo um alerta se o nome ou número de telefone já existirem na lista
            alert("Nome ou número de telefone já existe na lista.");
        }

        // Limpando os campos do formulário após adicionar o contato
        document.getElementById("name").value = "";
        document.getElementById("phone").value = "";
    } else {
        // Exibindo um alerta se os campos não estiverem preenchidos ou o número de telefone não for válido
        alert("Por favor, preencha todos os campos e insira um número de telefone válido.");
    }
}

// Função para atualizar a lista de contatos na interface
function updateContactList() {
    // Obtendo o elemento HTML que exibe a lista de contatos
    let contactListElement = document.getElementById("contactList");
    // Limpando o conteúdo atual da lista
    contactListElement.innerHTML = "";

    // Iterando sobre os contatos e criando elementos de lista para cada um
    contacts.forEach(contact => {
        let li = document.createElement("li");
        li.textContent = `${contact.name}: ${contact.phone}`;
        contactListElement.appendChild(li);
    });
}

// Função para validar se um número de telefone é válido (com 10 ou 11 dígitos)
function isValidPhoneNumber(phone) {
    return /^\d{10,11}$/.test(phone);
}

