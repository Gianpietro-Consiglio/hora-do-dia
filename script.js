var page = window.document.getElementById('body')
var bdn = window.document.getElementById('bom?')
var horas = window.document.getElementById('horario')
var agora = new Date()
var hour = agora.getHours()
var minute = agora.getMinutes()
var imagem = window.document.getElementById('imagem')

if (hour >= 6 && hour <= 12){
    bdn.innerText = 'Bom dia'
    page.style.background = 'DeepSkyBlue'
    imagem.src = '/project01/images/dia.jpg'
  

}

else if (hour <= 17){
    bdn.innerText = 'Boa tarde'
    page.style.background = 'SteelBlue'
    imagem.src = '/project01/images/tarde.jpg'
}

else{
    bdn.innerText = 'Boa noite'
    page.style.background = 'Navy'
    imagem.src = '/project01/images/noite.jpg'
}
horas.innerText = `Agora são ${hour}:${minute}`
