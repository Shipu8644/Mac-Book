// funtion for the Memory Click
function memoryWork(value) {
    const memory = document.getElementById('memory-cost');
    if (value == true) {
        memory.innerText = 0;
    }
    else {
        memory.innerText = 180;
    }
    calculation();
}

// funtion for the Storage Click
function storageWork(value) {

    const storage = document.getElementById('storage-cost');
    if (value == 0) {
        storage.innerText = 0;
    }
    else if (value == 100) {
        storage.innerText = 100;
    }
    else {
        storage.innerText = 180;
    }

    calculation();
}

// funtion for the Delivery Click
function deliveryWork(value) {

    const delivery = document.getElementById('delivery-cost');
    if (value == true) {
        delivery.innerText = 0;
    }
    else {
        delivery.innerText = 20;
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
//Function for getting the Value
function getValue(key) {
    const value = document.getElementById(key + '-cost').innerText;
    return value;
}
// calculation function Work
function calculation() {

    const bestPrice = getValue('best');
    const memoryCost = getValue('memory');
    const storageCost = getValue('storage');
    const deliveryCost = getValue('delivery');

    document.getElementById('total-price').innerText = parseInt(bestPrice) + parseInt(memoryCost) + parseInt(storageCost) + parseInt(deliveryCost);

    document.getElementById('total').innerText = document.getElementById('total-price').innerText;
    document.getElementById('applyButton').removeAttribute('disabled');

}
// Bonus Mark
function applyBtn() {
    let input = document.getElementById('discount-input').value;

    if (input.toLowerCase() == 'stevekaku'.toLowerCase()) {
        document.getElementById('discount-input').value = '';
        const total = parseInt(document.getElementById('total').innerText);
        document.getElementById('total').innerText = total - (total * 20 / 100);
        document.getElementById('applyButton').setAttribute('disabled', true);
    }
    else {

        document.getElementById('discount-input').value = '';

    }
}

