function verificar() {
    var data = new Date();
    var anoAtual = data.getFullYear();
    var nascimento = document.getElementById('ano');
    var res = document.getElementById('res');

    if (nascimento.value.length == 0 || Number(nascimento.value) > anoAtual) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        var sex = document.getElementsByName('sexo');
        var idade = anoAtual - Number(nascimento.value);
        var genero = sex[0].checked ? 'Masculino' : 'Feminino';
        var suf = sex[0].checked ? 'm' : 'f'; 
        
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        
        var mensagem = '';

        switch (true) {
            case (idade >= 0 && idade <= 2):
                img.setAttribute('src', `imgs/bebe-${suf}.jpg`);
                mensagem = `Um bebê de ${idade} idade!`;
                break;

            case (idade < 13):
                img.setAttribute('src', `imgs/crianca-${suf}.jpg`);
                mensagem = `Uma criança de ${idade} idade!`;
                break;

            case (idade < 18):
                img.setAttribute('src', `imgs/adolecente-${suf}.jpg`);
                mensagem = `Um(a) adolescente de ${idade} idade.`;
                break;

            case (idade < 60):
                img.setAttribute('src', `imgs/adulto-${suf}.jpg`);
                mensagem = `Um(a) adulto(a) de ${idade} idade.`;
                break;

            case (idade < 100):
                var fotoIdoso = sex[0].checked ? 'imgs/idoso.jpg' : 'imgs/idosa.jpg';
                img.setAttribute('src', fotoIdoso);
                mensagem = `Uma pessoa da melhor idade com ${idade} idade.`;
                break;

            default:
                img.setAttribute('src', `imgs/deus-amado.jpg`);
                mensagem = `Fóssil de ${idade} idade.`;
                break;
        }

        res.innerHTML = `<p>Detectamos gênero <span>${genero}</span>.</p>`;
        res.innerHTML += `<p>${mensagem}</p>`;
        res.appendChild(img);
    }
}