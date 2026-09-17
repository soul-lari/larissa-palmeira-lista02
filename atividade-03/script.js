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

function destacar() {
    var txt = document.getElementById('nome').value
    var lista = document.getElementById('listaNomes')

    lista.innerHTML = ''

    // Percorre cada nome do vetor
    for (var i = 0; i < nomes.length; i++) {
        
        if (nomes[i] === txt) {
            lista.innerHTML += `<li class="destaque">${nomes[i]}</li>`
        } else {
            lista.innerHTML += `<li>${nomes[i]}</li>`
        }
    }
}

destacar()