var contador = 0

function contar() {
    contador++ 
    var res = document.getElementById('resultado')
    res.innerHTML = `Cliques: ${contador}`
}

function zerar() {
    contador = 0 
    var res = document.getElementById('resultado')
    res.innerHTML = `Cliques: ${contador}`
}