const cals = document.querySelector('.cals')
const result = document.querySelector('#result')
cals.addEventListener("click", function (event) {
    if (!event.target.classList.contains('cals_btn')) return;
    const value = event.target.innerText;

    switch (value){
        case 'C':
            result.innerText = "";
            break;

        case '=':
            if (result.innerText.search(/[^0-9*+-.]/mi) !== -1) return;
            result.innerText = eval(result.innerText).toFixed(2)
            break;

        default:
            result.innerText += value
    }

    result.innerText += value;


});