function contar() {
    var ini = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var pas = document.getElementById('passo')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        window.alert('Número inválido')
    } else {
        res.innerHTML = 'Contando...'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number (pas.value)
    } 

    if (i < f) {

        for (c = i; c <= f; c += p) {
            res.innerHTML += `${c} `
        } 

    } else {
        for (c = i; c >= f; c -= p) {
            res.innerHTML += `${c} `
        }
    }
}