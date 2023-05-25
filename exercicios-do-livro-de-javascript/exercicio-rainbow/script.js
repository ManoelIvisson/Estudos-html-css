const botao = window.document.getElementById('botao')
var num = window.document.querySelector('p')

const cores = ['red', 'green', 'blue', 'gray', 'pink', 'yellow', 'orange', 'darkblue', 'rebeccapurple']

botao.addEventListener('click', mudaCor)

function mudaCor() {
    cor_aleatoria = Math.floor(9*Math.random())

    num.innerHTML = 'numero: ' + cor_aleatoria
    
    window.document.body.style.backgroundColor = cores[cor_aleatoria]
}
