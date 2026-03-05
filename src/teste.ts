// // Selecionando pelo ID e definindo o tipo
// const titulo = document.getElementById('titulo-principal') as HTMLHeadingElement;

// // Selecionando pela Classe (.)
// const paragrafo = document.querySelector('.descricao') as HTMLParagraphElement;

// // Agora você pode alterar as propriedades:
// titulo.textContent = "Título alterado pelo TS!";

// const botao = document.querySelector('#meuBotao') as HTMLButtonElement;

// botao.addEventListener('click', () => {
//     alert('Você clicou no botão! 🚀');
//     botao.style.backgroundColor = 'green';
// });

// function avisarTrainee() {
//     alert("Você clicou no botão através do HTML!");
// }

// class Membro {
//     nome: string;

//     constructor(nomeRecebido: string) {
//         this.nome = nomeRecebido;
//     }

//     renderizar() {
//         const li = document.createElement('li');
//         li.innerHTML = 
//             `<strong>${this.nome}</strong>`;
//         return li;
//     }
// }

class Tarefa {
    titulo: string;
    descricao: string;
    entrada: Date;

    constructor(titulo: string, descricao: string) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.entrada = new Date();
    }

    renderizar() {
        const li = document.createElement('li');
        const check = document.createElement('input');
        check.type = "checkbox";
        li.innerHTML = `Título: ${this.titulo}<br>Descrição da tarefa: ${this.descricao}<br>
        Data da criação: ${this.entrada.toLocaleString("pt-BR")}`;
        return li;
    }
}

// Lógica de manipulação do DOM
// const btn = document.getElementById('addBtn') as HTMLButtonElement;
// btn.addEventListener('click', () => {
//     const input = document.getElementById('membroInput') as HTMLInputElement;
//     const novoMembro = new Membro(input.value);
//     document.getElementById('lista')?.appendChild(novoMembro.renderizar());
// });

const adicionaTarefa = document.getElementById('adicionaTarefa') as HTMLButtonElement;
adicionaTarefa.addEventListener('click', () => {
    const novoTitulo = document.getElementById('tituloInput') as HTMLInputElement;
    const novoDescricao = document.getElementById('descricaoInput') as HTMLInputElement;
    const novaTarefa = new Tarefa(novoTitulo.value, novoDescricao.value);
    document.getElementById('tarefa')?.appendChild(novaTarefa.renderizar());
})