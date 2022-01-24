function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 19
    msg.innerHTML = `Agora são ${hora} horas.`
    if( hora>= 0 && hora < 12) {
        // BOM DIA!
       img.src = 'Manha.jpg'
       document.body.style.background = '#FDB859'
    }else if(hora>= 12 && hora <= 18) {
        // BOA TARDE!
        img.src = 'Tarde.jpg'
        document.body.style.background = '#63281B'
    }else{
        //BOA NOITE!
        img.src = 'Noite.jpg'
        document.body.style.background = '#493250'
    }
}
