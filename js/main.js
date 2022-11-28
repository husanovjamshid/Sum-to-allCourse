var elForm = document.querySelector('.form')
var elInput = document.querySelector('.js__input')
var elSelect = document.querySelector('.js__select')
var elResult = document.querySelector('.result')

var USD = 11239;
var EURO = 11722;
var RUBL = 182;
var allResult = +""

elForm.addEventListener('submit', function(evt) {
    evt.preventDefault();

    if (elInput.value < 0) {
        elResult.textContent = `Iltimos musbat son kiriting!`
    }else if(elSelect.value == 'usd') {
        allResult = elInput.value / USD
        elResult.textContent = `$${allResult.toFixed(2)}`
    }else if(elSelect.value == 'euro') {
        allResult = elInput.value / EURO
        elResult.textContent = `€${allResult.toFixed(2)}`
    }else if(elSelect.value == 'rubl') {
        allResult = elInput.value / RUBL
        elResult.textContent = `₽${allResult.toFixed(2)}`
    }

    elResult.classList.remove('d-none')

    
})