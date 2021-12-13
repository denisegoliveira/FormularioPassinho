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
        mensagem.innerText = cesarDecode(mensagemCodificada, valor)
    }
})

function cesar(arr, key) {
    var novoArr = []

    for(i = 0; i < arr.length; i++) {
        let texto = arr[i].charCodeAt();
            
        if(texto >= 65 && texto <= 90) {
            novoArr.push(String.fromCharCode(((texto - 65 + key)%26)+65))
        } else if(texto >= 97 && texto <= 122) {
            novoArr.push(String.fromCharCode(((texto - 97 + key)%26)+97))
        } else {
            novoArr.push(arr[i])
        }
    }
    return novoArr.join('')
}

function cesarDecode(arr, key) {
    var arrNovo = []

    for(i = 0; i < arr.length; i++) {
        let texto = arr[i].charCodeAt()

        if (texto >= 65 && texto <= 90) {
            arrNovo.push(String.fromCharCode(((texto - 90 - key)%26)+90))
        } else if(texto >= 97 && texto <= 122) {
            arrNovo.push(String.fromCharCode(((texto - 122 - key)%26)+122))
        } else {
            arrNovo.push(arr[i])
        }
    }
    return arrNovo.join('')
}