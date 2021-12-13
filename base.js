var botao = document.getElementById('enviar')
var texto = document.getElementById('texto')
var codigo = document.querySelectorAll('.codigo')
var mensagem = document.getElementById('mensagem')

botao.addEventListener('click', () => {
    var mensagemCodificada = texto.value.split('')

    if(codigo[0].checked) {
        mensagem.innerText = base(mensagemCodificada, valor)
    }else {
        mensagem.innerText = baseDecode(mensagemCodificada, valor)
    }
})


