function clicar() {
    var ini = document.getElementByid('txti')
    var fim = document.getElementByid('txtf')
    var passo = document.getElementByid('txtp')
    var res = document.getElementByid('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO] Faltam dados!')
    } else {
        alert('ebaa')
    }
}