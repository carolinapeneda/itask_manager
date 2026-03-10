const inputTitulo = document.getElementById('tituloInput') as HTMLInputElement;
const inputDescricao = document.getElementById('descricaoInput') as HTMLInputElement;
const botaoAdicionar = document.getElementById('adicionaTarefa');

botaoAdicionar?.addEventListener('click', () => {
    if(inputTitulo && inputDescricao) {
        inputTitulo.value = '';
        inputDescricao.value = '';
        inputTitulo.focus();
    }
});

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

        const li = document.createElement('div');
        li.classList.add("tarefa-box");

        const check = document.createElement('input');
        check.type = "checkbox";

        const titulo = document.createElement('h3');
        titulo.classList.add("titulo");
        titulo.textContent = this.titulo;

        const descricao = document.createElement('p');
        descricao.classList.add("descricao");
        descricao.textContent = this.descricao;

        const data = document.createElement('p');
        data.classList.add("data");
        data.textContent = this.entrada.toLocaleString("pt-BR");

        li.appendChild(check);
        li.appendChild(titulo);
        li.appendChild(descricao);
        li.appendChild(data);
        
        check.addEventListener("change", () => {
            li.classList.toggle("riscado", check.checked);
        });

        return li;
    }
}

const adicionaTarefa = document.getElementById('adicionaTarefa') as HTMLButtonElement;
adicionaTarefa.addEventListener('click', () => {
    const novoTitulo = document.getElementById('tituloInput') as HTMLInputElement;
    const novoDescricao = document.getElementById('descricaoInput') as HTMLInputElement;
    const novaTarefa = new Tarefa(novoTitulo.value, novoDescricao.value);
    document.getElementById('tarefa')?.appendChild(novaTarefa.renderizar());
})