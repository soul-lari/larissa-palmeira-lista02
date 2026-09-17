function gerarTabuada() {
    var valor = document.getElementById('num')
    var res = document.getElementById('res')

    if (valor.value.length == 0) {
        res.innerHTML = ''
        return
    }

    var n = Number(valor.value)

    res.innerHTML = `<p>Tabuada do número: <strong>${n}</strong></p>`

    for (var c = 1; c <= 10; c++) {
        res.innerHTML += `${n} x ${c} = ${n * c}<br>`
    }
}