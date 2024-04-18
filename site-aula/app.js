function resultado() {
    var a = "Sim"
    var b = a
    var c = b
    var d = "Não"
    var res = document.getElementById('res')
    var img = document.getElementById('imagem')


    var options = document.getElementsByName('escolha')
    var escolha = ''
    if (options[0].checked) {
        escolha = a
        img.src = 'happy-cat.gif'
        window.document.body.style.background = '#D20062'
        res.innerHTML = "🥳🥳🥳🥳🥳🥳🥳🥳" 
    } else if (options[1].checked) {
        escolha = b
        img.src = 'happy-cat.gif'
        window.document.body.style.background = '#D20062'
        res.innerHTML = "🥳🥳🥳🥳🥳🥳🥳🥳"
    } else if (options[2].checked){
        escolha = c
        img.src = 'happy-cat.gif'
        window.document.body.style.background = '#D20062'
        res.innerHTML = "🥳🥳🥳🥳🥳🥳🥳🥳"
    } else {
        escolha = d
        img.src = 'gato-banana.gif'
        window.document.body.style.background = "#232D3F"
        res.innerHTML = '😪'
    }
}