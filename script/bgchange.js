const hamisi = document.querySelector('#hamisi')
const yeni = document.querySelector('#yeni')
const surulmus = document.querySelector('#surulmus')
const headerBtn = document.querySelector('.header-btn')
function alle(){
    hamisi.style.background = '#ca1016'
    hamisi.style.color = '#fff'
    yeni.style.background = '#fff'
    yeni.style.color = '#8d94ad'
    surulmus.style.background = '#fff'
    surulmus.style.color = '#8d94ad'
}
function newa(){
    yeni.style.background = '#ca1016'
    yeni.style.color = '#fff'
    hamisi.style.background = '#fff'
    hamisi.style.color = '#8d94ad'
    surulmus.style.background = '#fff'
    surulmus.style.color = '#8d94ad'
}
function drived(){
    surulmus.style.background = '#ca1016'
    surulmus.style.color = '#fff'
    hamisi.style.background = '#fff'
    hamisi.style.color = '#8d94ad'
    yeni.style.background = '#fff'
    yeni.style.color = '#8d94ad'
}
const kredit = document.querySelector('#kredit')
const barter = document.querySelector('#barter')
const li = document.querySelectorAll('.pdng')
function krdt(){
    kredit.classList.toggle('deyis')
}
function brtr(){
    barter.classList.toggle('deyis')
}
function dyS(eu){
    for (let i = 0; i < 17; i++) {
        if(i == eu) li[i-1].classList.toggle('deyis')
        
    }
}
const more = document.querySelector('#daha-cox')
const fourth = document.querySelector('#selects-fourth')
const third = document.querySelector('#selects-third')
const fifth = document.querySelector('#selects-fifth')
const sixth = document.querySelector('#selects-sixth')
const seventh = document.querySelector('#between')
const eighth = document.querySelector('#header-bottom')
let count = 0

function moree(){
    count++
    if(count % 2 == 1){
    more.innerHTML = `Gizlət  <i class="fa-solid fa-chevron-up"></i>`
    fourth.style.display = 'flex'
    third.style.display = 'flex'
    fifth.style.display = 'flex'
    sixth.style.display = 'flex'
    seventh.style.display = 'flex'
    eighth.style.display = 'flex'

    
}
else{
    more.innerHTML = `Daha çox filtr <i class="fa-solid fa-chevron-down">`
    fourth.style.display = 'none'
    third.style.display = 'none'
    fifth.style.display = 'none'
    sixth.style.display = 'none'
    seventh.style.display = 'none'
    eighth.style.display = 'none'
}
}
const hamisii = document.querySelector('#hamisi2')
const sexsii = document.querySelector('#sexsi2')
const salonlari = document.querySelector('#salonlar2')
function hmsi(){
    hamisii.style.background = '#ca1016'
    hamisii.style.color = '#fff'
    salonlari.style.background = '#fff'
    salonlari.style.color = '#8d94ad'
    sexsii.style.background = '#fff'
    sexsii.style.color = '#8d94ad'
}
function sln(){
    salonlari.style.background = '#ca1016'
    salonlari.style.color = '#fff'
    hamisii.style.background = '#fff'
    hamisii.style.color = '#8d94ad'
    sexsii.style.background = '#fff'
    sexsii.style.color = '#8d94ad'
}
function sxs(){
    sexsii.style.background = '#ca1016'
    sexsii.style.color = '#fff'
    salonlari.style.background = '#fff'
    salonlari.style.color = '#8d94ad'
    hamisii.style.background = '#fff'
    hamisii.style.color = '#8d94ad'
}
