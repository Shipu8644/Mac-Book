// funtion for the Memory Click
function memoryWork(value) {
    if (value == true) {
        document.getElementById('memory-cost').innerText = 0;
    }
    else {
        document.getElementById('memory-cost').innerText = 180;

    }
    calculation();
}
// funtion for the Storage Click
function storageWork(value) {
    if (value == 0) {
        document.getElementById('storage-cost').innerText = 0;
    }
    else if (value == 100) {
        document.getElementById('storage-cost').innerText = 100;
    }
    else {
        document.getElementById('storage-cost').innerText = 180;
    }

    calculation();
}

// funtion for the Delivery Click
function deliveryWork(value) {
    if (value == true) {
        document.getElementById('delivery-cost').innerText = 0;
    }
    else {
        document.getElementById('delivery-cost').innerText = 20;
    }
    calculation();
}

// Memory Handler
document.getElementById('firstUnifiedMemory').addEventListener('click', function () {

    memoryWork(true);
})
document.getElementById('secondUnifiedMemory').addEventListener('click', function () {

    memoryWork(false);
})

//Storage Handler
document.getElementById('firstStorage').addEventListener('click', function () {

    storageWork(0);
})
document.getElementById('secondStorage').addEventListener('click', function () {

    storageWork(100);
})
document.getElementById('thirdStorage').addEventListener('click', function () {

    storageWork(180);
})

//Delivery handler
function firstDelveryOption() {

    deliveryWork(true);
}
function secondDelveryOption() {

    deliveryWork(false);
}
function getValue(key) {
    const value = document.getElementById(key + '-cost').innerText;
    return value;
}
// calculation function Work
function calculation() {

    const bestPrice = getValue('best');
    const memoryCost = getValue('memory');
    const storageCost = getValue('storage');
    const deliveryCost = getValue('delivery');;

    document.getElementById('total-price').innerText = parseInt(bestPrice) + parseInt(memoryCost) + parseInt(storageCost) + parseInt(deliveryCost);

    document.getElementById('total').innerText = document.getElementById('total-price').innerText;

}
// Bonus Mark
function applyBtn() {
    let input = document.getElementById('discount-input').value;

    if (input.toLowerCase() == 'stevekaku'.toLowerCase()) {
        document.getElementById('discount-input').value = '';
        const total = parseInt(document.getElementById('total').innerText);
        document.getElementById('total').innerText = total - (total * 25 / 100);
    }
    else {
        document.getElementById('discount-input').value = '';
    }
}