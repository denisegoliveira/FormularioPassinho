var selecao = document.querySelector('#selecao')
var base = document.querySelector('#divBase')
var cifra = document.querySelector('#divCifra')

selecao.addEventListener('change', function() {
    if(selecao.value == 'base') {
        base.style.display = 'block'
        cifra.style.display = 'none'
    } else {
        cifra.style.display = 'block'
        base.style.display = 'none'
    }
})