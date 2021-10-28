function priceCalculator(){
    let firstClass = parseInt(document.getElementById('firstClassSeat').value);
    let economyClass = parseInt(document.getElementById('economyClassSeat').value);

    let subtotal = firstClass*150 + economyClass*100;
    document.getElementById('subtotal').innerText = subtotal;

    let vat = subtotal*0.1;
    document.getElementById('vat').innerText = vat;

    let total = subtotal+vat;
    document.getElementById('total').innerText = total;
}

function seatCount(seatClass, plusOrMinus){
    let seatCount = parseInt(document.getElementById(seatClass).value);

    if(plusOrMinus == 'plus'){
        document.getElementById(seatClass).value = seatCount+1;
        ++seatCount;
    }
    if(plusOrMinus == 'minus'){
        if(seatCount <= 0){
            document.getElementById(seatClass).value = 0;
        }
        else{
            document.getElementById(seatClass).value = seatCount-1;
            --seatCount;
        }
    }
    priceCalculator();
}

document.getElementById('firstClassPlus').addEventListener('click', ()=>{
    seatCount('firstClassSeat', 'plus');
});
document.getElementById('firstClassMinus').addEventListener('click', ()=>{
    seatCount('firstClassSeat', 'minus');
});

document.getElementById('economyClassPlus').addEventListener('click', ()=>{
    seatCount('economyClassSeat', 'plus');
});
document.getElementById('economyClassMinus').addEventListener('click', ()=>{
    seatCount('economyClassSeat', 'minus');
});