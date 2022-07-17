//открытие содержимого пункта
function showBlock(checboxid, num, rangeid) {
    let selectedCheckbox = document.getElementById(checboxid);

    //поворот стрелки
    let selectedArrow = document.getElementsByClassName('item__header-arrow');
    let selectedBlock = document.getElementsByClassName('item__body');
    // console.log(selectedBlock[num]);
    if (selectedCheckbox.checked == true) {
        selectedArrow[num].classList.add('item__header-arrow_transform');
        if (selectedBlock[num] !== undefined) {
            selectedBlock[num].classList.add('item__body_active');
            slider(rangeid, num);
        }

    } else {
        selectedArrow[num].classList.remove('item__header-arrow_transform');
        if (selectedBlock[num] !== undefined) {
            selectedBlock[num].classList.remove('item__body_active');
        }

    }
}

//изменение ползунка
function slider(rangeid, num) {
    let slider = document.getElementById(rangeid);
    const sliderMin = slider.min;
    const sliderMax = slider.max;

    //изменение цвета полоски
    let sliderValue = ((slider.value - sliderMin) * 100) / (sliderMax - sliderMin);

    const fillLeft = "#00DC99";
    const fillRight = "#636a74";

    slider.style.background = `linear-gradient(to right, ${fillLeft} ${sliderValue}%, ${fillRight} ${sliderValue}%`;

    //изменение значения
    let valueLabel = document.getElementsByClassName('select-block__count');
    valueLabel[num].textContent = slider.value;
}

//выбор способа оплаты

function selectPay(num) {
    let methods = document.getElementsByClassName('payment-method');

    for (let i = 0; i < methods.length; i++) {

        if (methods[i].classList.contains('payment_active')) {

            methods[i].classList.remove('payment_active');
        }
    }

    methods[num].classList.add('payment_active');
}