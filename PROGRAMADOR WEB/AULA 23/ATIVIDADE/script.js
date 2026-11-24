function adicionarTarefa() {
    const listaTarefas = document.getElementById('listarTarefas');
    const input = document.getElementById('tarefaInput');
    const valorTarefa = input.value;

    if (valorTarefa.trim() === "") {
        alert("Digite uma tarefa válida.");
        return;
    }

    const novaTarefa = document.createElement('li');
    novaTarefa.textContent = valorTarefa;
    listaTarefas.appendChild(novaTarefa);
    input.value = '';
}