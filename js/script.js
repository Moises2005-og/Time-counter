const getHora = document.getElementById("hora")
const getMinuto = document.getElementById("minuto")
const getSec = document.getElementById("sec")

setInterval(function() {
    const data = new Date()
    const hora = data.getHours()
    const minuto = data.getMinutes()
    const sec = data.getSeconds()
    
    getHora.innerText = hora
    getMinuto.innerText = minuto
    getSec.innerText = sec
}, 1000)