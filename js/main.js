// created scroll to up btn
let btnUp = document.querySelector(`.scroll-up`);
window.onscroll = function () {
    this.scrollY >= 2000 ? btnUp.classList.add(`show`) : btnUp.classList.remove(`show`)
}
btnUp.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
// set date in latest events
let dateInDays = document.querySelectorAll(`.events .info .time .unit span:first-child`)[0]
let dateNow = new Date();
dateInDays.innerHTML = `${dateNow.getDate()}`
let dateInHours = document.querySelectorAll(`.events .info .time .unit span:first-child`)[1]
dateInHours.innerHTML = `${dateNow.getHours()}`
let dateInMin = document.querySelectorAll(`.events .info .time .unit span:first-child`)[2]
dateInMin.innerHTML = `${dateNow.getMinutes()}`
let dateInSec = document.querySelectorAll(`.events .info .time .unit span:first-child`)[3]
dateInSec.innerHTML = `${dateNow.getSeconds()}`
let year = document.querySelector(`.events .title`)
year.innerHTML = `Tech Masters Event ${dateNow.getFullYear()}`
setInterval(function () {
    let dateNow = new Date();
    dateInDays.innerHTML = `${dateNow.getDate()}`
    dateInHours.innerHTML = `${dateNow.getHours()}`
    dateInMin.innerHTML = `${dateNow.getMinutes()}`
    dateInSec.innerHTML = `${dateNow.getSeconds()}`
    year.innerHTML = `Tech Masters Event ${dateNow.getFullYear()}`
}, 1000)