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

function carregarLista() {
    var checkbox = document.getElementById('checkboxes')
    checkbox.innerHTML = ''

    for (var i = 0; i < nomes.length; i++) {
        checkbox.innerHTML += `
            <label>
                <input type="checkbox" name="aluno" value="${nomes[i]}"> ${nomes[i]}
            </label>
        `
    }
}

function confirmarPresenca() {
    var checkboxes = document.querySelectorAll('input[name="aluno"]')
    var presentes = []
    var ausentes = []

    // Separa os nomes de acordo com o estado do checkbox (marcado/desmarcado)
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            presentes.push(checkboxes[i].value)
        } else {
            ausentes.push(checkboxes[i].value)
        }
    }

    var res = document.getElementById('resultado')
    
    // Exibe os resultados formatados com as cores correspondentes
    res.innerHTML = `
        <p><strong>Presentes:</strong> <span class="presente">${presentes.join(', ')}</span></p>
        <p><strong>Ausentes:</strong> <span class="ausente">${ausentes.join(', ')}</span></p>
    `
}

// Inicializa a lista de marcadores na tela
carregarLista()