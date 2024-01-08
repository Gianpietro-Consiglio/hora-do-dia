var page = window.document.getElementById('body')
var bdn = window.document.getElementById('bom?')
var horas = window.document.getElementById('horario')
var agora = new Date()
var hour = agora.getHours()
var minute = agora.getMinutes()
var imagem = window.document.getElementById('imagem')

hour = 18
if (hour >= 6 && hour <= 12){
    bdn.innerText = 'Bom dia'
    page.style.background = 'DeepSkyBlue'
    imagem.src = 'dia.jpg'
  

}

else if (hour <= 17){
    bdn.innerText = 'Boa tarde'
    page.style.background = 'SteelBlue'
    imagem.src = 'tarde.jpg'
}

else{
    bdn.innerText = 'Boa noite'
    page.style.background = 'Navy'
    imagem.src = 'noite.jpg'
}

if (minute <= 9){
    horas.innerText = `Agora são ${hour}:0${minute}`


}else{

    horas.innerText = `Agora são ${hour}:${minute}`


}

