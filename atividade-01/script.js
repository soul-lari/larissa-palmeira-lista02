function calcular() {
    var num = document.getElementById('velocidade')
    var res = document.getElementById('res')
    var vel = Number(num.value)

    if (num.value.length == 0 || vel < 0) {
        alert('Por favor, digite uma velocidade válida!')
        res.innerHTML = ''
        return
    }
  
    res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel} km/h</strong>.</p>`

    if (vel > 60) {
        res.innerHTML += `<p>Velocidade acima do permitido! <strong>MULTADO.</strong></p>`
    } else {
        res.innerHTML += `<p>Dirija sempre usando cinto de segurança!</p>`
    }
}