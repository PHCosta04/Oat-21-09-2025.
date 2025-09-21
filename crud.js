let dados = [];

function create(item) {
    dados.push(item);
    console.log("Item adicionado:", item);
}

function read() {
    console.log("Lista de itens:", dados);
}

function update(index, novoItem) {
    if (index >= 0 && index < dados.length) {
        dados[index] = novoItem;
        console.log("Item atualizado:", novoItem);
    } else {
        console.log("Índice inválido!");
    }
}

function deleteItem(index) {
    if (index >= 0 && index < dados.length) {
        let removido = dados.splice(index, 1);
        console.log("Item removido:", removido[0]);
    } else {
        console.log("Índice inválido!");
    }
}

create("Pedro");
create("Ana");
read();
update(0, "Pedro Costa");
read();
deleteItem(1);
read();
