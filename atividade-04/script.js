var nomes = [
    'João',
    'Márcio',
    'Fabiana',
    'Jorge',
    'Silvana',
    'Luiz',
    'Carlos',
    'Pablo'
]

function formatarTexto(texto) {
    return texto
        .toLowerCase()
        .trim() 
        .normalize('NFD') 
        .replace(/[\u0300-\u036f]/g, '') 
}

function filtrarLista() {
    var nome = document.getElementById('filtro')
    var lista = document.getElementById('listaNomes')
    
    var termoBusca = formatarTexto(nome.value)

    lista.innerHTML = ''

    var encontrou = false

    for (var i = 0; i < nomes.length; i++) {
        var nomeAtual = nomes[i]
        var nomeFormatado = formatarTexto(nomeAtual)

        if (nomeFormatado.includes(termoBusca)) {
            lista.innerHTML += `<li>${nomeAtual}</li>`
            encontrou = true
        }
    }

    if (!encontrou) {
        lista.innerHTML = '<li><em>Nenhum nome encontrado.</em></li>'
    }
}

filtrarLista()