const marka = document.querySelector('#marka')
const model = document.querySelector('#model')

function getUniqueCarNames(cars) {
    const uniqueCarNames = new Set();
    cars.forEach(car => {
        uniqueCarNames.add(car.brand);
    });
    return Array.from(uniqueCarNames);
}

const uniqueCarNames = getUniqueCarNames(cars);
for (let i = 0; i < uniqueCarNames.length; i++) {
    marka.innerHTML += `<option onclick="a(${i})" style="font-family: Arial, Helvetica, sans-serif; padding: 5px 0;">${uniqueCarNames[i]}</option>` 
}
function getUniqueCarModel(cars) {
    const uniqueCarModel = new Set();
    cars.forEach(car => {
        uniqueCarModel.add(car.model);
    });
    return Array.from(uniqueCarModel);
}
const uniqueCarModel = getUniqueCarModel(cars);
for (let i = 0; i < uniqueCarModel.length; i++) {
    model.innerHTML += `<option style="font-family: Arial, Helvetica, sans-serif; padding: 5px 0;">${uniqueCarModel[i]}</option>`
}
const seher = document.querySelector('#seher')
const shr = [... new Set(cars.map(item => item.city))]
for (let i = 0; i < shr.length; i++) {
    seher.innerHTML += `<option>${shr[i]}</option>`
    
}
let kodd = ''
function markaChoose() {
    model.innerHTML = `<option>Model</option>`
    model.classList.remove('none')
    let kodd = ''
    let models = [... new Set(   cars.filter(item => item.brand == marka.value).map(item => item.model)     )];
    models.forEach(item => {
        kodd += `<option> ${item}</option>`
    })
    model.innerHTML += kodd
}
const banNovu = document.querySelector('#ban-novu')
const bnnv = [... new Set(cars.map(item => item.banType))]
for (let i = 0; i < bnnv.length; i++) {
    banNovu.innerHTML += `<option>${bnnv[i]}</option>` 
}
const ilMin = document.querySelector('#il-min')
const ilMaks = document.querySelector('#il-maks')
for (let i = 2024; i >= 1904; i--) {
    ilMin.innerHTML += `<option>${i}</option>`
    ilMaks.innerHTML += `<option>${i}</option>`
    
}

const reng = document.querySelector('#reng')
for (let i = 0; i < color.length; i++) {
    reng.innerHTML += `<option>${color[i]}</option>`
    
}

const yanacaq = document.querySelector('#yanacaq-novu')
for (let i = 0; i < fuel.length; i++) {
    yanacaq.innerHTML += `<option>${fuel[i]}</option>`
    
}
const yerler = document.querySelector('#yerler')
for (let i = 0; i < 8; i++) {
    yerler.innerHTML += `<option>${i}</option>` 
}
yerler.innerHTML += `<option>8+</option>`
const qiymetMin = document.querySelector('#qiymet1')
const qiymetMaks = document.querySelector('#qiymet2')
// HOQQA
const valyuta = document.querySelector('#mezenne')
const yurusMin = document.querySelector('#yurus-min')
const yurusMaks = document.querySelector('#yurus-max')
function emil(item){
    return `<div class="card">
    <i id="first${item.id}" style="color: #fff;" onclick="opn(${item.id})"  class="fa-regular fa-heart" style="color: #fff !important;"></i><i id="last${item.id}" style="display: none; color: red;" onclick="clse(${item.id})" class="fa-solid fa-heart"></i>
    <div class="card-img"><img src="${item.images}" alt=""></div>
    <div class="card-txt">
        <h4>${item.price} AZN</h4>
        <p class="name">${item.brand} ${item.model}</p>
        <p class="about">${item.year} ${item.engine} L ${item.odometer} km</p>
        <p class="date">Bakı, bugün 23:29</p>
    </div>
</div>`
}
function hoqqaa(){
    // let kod = ''
    main.innerHTML = ''
    let filtered = cars
    if(marka.value != 'Marka'){
        filtered = filtered.filter((car) =>{
            return car.brand === marka.value 
        })
    }
    if(seher.value != 'Şəhər'){
        filtered = filtered.filter((car) =>{
            return car.city === seher.value 
        })
    }
    if(model.value != 'Model'){
        filtered = filtered.filter((car) =>{
            return car.model === model.value 
        })
    }
    if(qiymetMin.value != ''){
        filtered = filtered.filter((car) =>{
            return car.price > qiymetMin.value 
        })
    }
    if(qiymetMaks.value != ''){
        filtered = filtered.filter((car) =>{
            return car.price < qiymetMaks.value
        })
    }
    if(valyuta.value != 'Məz.'){
        filtered = filtered.filter((car) =>{
            return car.currency == valyuta.value
            
        })
    }
    if(banNovu.value != 'Ban Növü'){
        filtered = filtered.filter((car) =>{
            return car.banType == banNovu.value
            
        })
    }
    if(ilMin.value != 'İl, min.'){
        filtered = filtered.filter((car) =>{
            return car.year > ilMin.value 
        })
    }
    if(ilMaks.value != 'maks.'){
        filtered = filtered.filter((car) =>{
            return car.year < ilMaks.value
        })
    }
    if(kredit.classList.contains('deyis')){
        filtered = filtered.filter((car) =>{
            return car.credit 
            
        })
    }
    if(barter.classList.contains('deyis')){
        filtered = filtered.filter((car) =>{
            return car.barter 
            
        })
    }
    if(yurusMin.value != ''){
        filtered = filtered.filter((car) =>{
            return car.odometer > yurusMin.value 
        })
    }
    if(yurusMaks.value != ''){
        filtered = filtered.filter((car) =>{
            return car.odometer < yurusMaks.value
        })
    }
    


    if(filtered.length){
        filtered.forEach((car) => {
            main.innerHTML += emil(car)
        })
    }
}
const sifirla = document.querySelector('#sifirla')
function rst(){
    kod = ''
    for (let i = 0; i < cars.length; i++) {
        let item = cars[i]
        kod += `<div class="card">
        <i id="first${item.id}" style="color: #fff;" onclick="opn(${item.id})"  class="fa-regular fa-heart" style="color: #fff !important;"></i><i id="last${item.id}" style="display: none; color: red;" onclick="clse(${item.id})" class="fa-solid fa-heart"></i>
        <div class="card-img"><img src="${item.images}" alt=""></div>
        <div class="card-txt">
            <h4>${item.price} ${item.currency}</h4>
            <p class="name">${item.brand} ${item.model}</p>
            <p class="about">${item.year} ${item.engine} L ${item.odometer} km</p>
            <p class="date">Bakı, bugün 23:29</p>
        </div>
    </div>`
}
main.innerHTML = kod
}

const allMarkalar = document.querySelector('#butun-markalar')
for (let i = 0; i < markalarMobile.length; i++) {
    allMarkalar.innerHTML += `<li id="id${i}" class="fart" onclick="tapMobile(${i})" style="padding: 20px 15px; list-style: none; cursor:pointer; border-bottom: .2px solid #333;"><img style="width: 35px; margin: 0 10px 0 0;" src="${markalarMobile[i].img}" alt=""> ${markalarMobile[i].markaM}</li>` 
    
}
function tapMobile(a){
    mobileFirst()
    main.innerHTML = ''
        for (let i = 0; i < cars.length; i++) {
            if(cars[i].brand == markalarMobile[a].markaM)
                main.innerHTML += `<div class="card">
            <i id="first${cars[i].id}" style="color: #fff;" onclick="opn(${cars[i].id})"  class="fa-regular fa-heart" style="color: #fff !important;"></i><i id="last${cars[i].id}" style="display: none; color: red;" onclick="clse(${cars[i].id})" class="fa-solid fa-heart"></i>
            <div class="card-img"><img src="${cars[i].images}" alt=""></div>
            <div class="card-txt">
                <h4>${cars[i].price} AZN</h4>
                <p class="name">${cars[i].brand} ${cars[i].model}</p>
                <p class="about">${cars[i].year} ${cars[i].engine} L ${cars[i].odometer} km</p>
                <p class="date">Bakı, bugün 23:29</p>
            </div>
        </div>`
        
    }
}
// const ul = document.querySelector('#butun-markalar>ul')
// const lii = ul.querySelectorAll('li')
// const cixarinput = document.querySelector('#cixarinput')
// function cixar() {
//     allMarkalar.innerHTML = '';
    
//     let lowerFirst = cixarinput.value.toLowerCase();
//     for (let i = 0; i < markalarMobile.length; i++) {
//         let lowerSecond = markalarMobile[i].markaM.toLowerCase();
//         if (lowerFirst == lowerSecond) {
//             allMarkalar.innerHTML = `<li><img src="${markalarMobile[i].img}"> ${markalarMobile[i].markaM}</li>`;
//         }
//     }
// }
const filtrOpen = document.getElementById("filtir") 

 function allFilter() {
    saytlar.style.display = 'none'
    filtrOpen.style.display = 'block'
    main.style.display = 'none'
    premium.style.display = 'none'
}




const cixarinput = document.querySelector('#cixarinput')
cixarinput.addEventListener('input', function () {
    axtar();
});
cixarinput.addEventListener('input', function () {
    axtar();
});
function axtar() {
    const searchText = cixarinput.value.toLowerCase();
    const q = document.querySelectorAll('.fart');
    const matchingIndices = [];

    for (let i = 0; i < q.length; i++) {
        const productName = markalarMobile[i].markaM.toLowerCase();
        if (productName.includes(searchText)) {
            matchingIndices.push(i);
        }
    }
    for (let i = 0; i < q.length; i++) {
        if (matchingIndices.includes(i)) {
            q[i].style.display = 'block';
        } else {
            q[i].style.display = 'none';
        }
    }
}



// const cixarinput = document.querySelector('#cixarinput');
// cixarinput.addEventListener('input', function () {
//     axtar();
// });

// function axtar() {
//     const searchText = cixarinput.value.toLowerCase();
//     console.log(searchText);
//     const q = document.querySelectorAll('.fart');
//     const matchingIndices = [];
//     console.log(q.length);


//     for (let i = 0; i < markalarMobile.length; i++) {
//         const productName = markalarMobile[i].markaM.toLowerCase();
//         if (productName.includes(searchText)) {
//             matchingIndices.push(i);
//         }
//     }

//     for (let i = 0; i < q.length; i++) {
//         if (matchingIndices.includes(i)) {
//             q[i].style.display = 'block';
//         } else {
//             q[i].style.display = 'none';
//         }
//     }
// }


    








  