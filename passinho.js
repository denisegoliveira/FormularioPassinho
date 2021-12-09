var botao = document.getElementById('enviar')
var texto = document.getElementById('texto')
var numero = document.getElementById('numero')
var codigo = document.querySelectorAll('.codigo')
var mensagem = document.getElementById('mensagem')

botao.addEventListener('click', () => {
    var mensagemCodificada = texto.value.split('')
    var valor = +numero.value
    if(codigo[0].checked) {
        mensagem.innerText = cesar(mensagemCodificada, valor)
    }else {
        mensagem.innerText = decode(mensagemCodificada, valor)
    }
})

function cesar(arr, key) {
    return arr.map((novoArr) => {
        let char = novoArr.charCodeAt()
        if(char >= 65 && char <= 90) {
            return String.fromCharCode(((char -65 + key)%26)+65)
        }else if (char >= 97 && char <= 122) {
            return String.fromCharCode(((char -97 + key)%26)+97)
        } else {
            return novoArr
        }  
        }) .join('')
    }
    function decode(arr, key) {
}