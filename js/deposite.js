// step-1: Add evenListener  to the btn
document.getElementById('addDeposite').addEventListener('click', function(){
    // step-2: get the deposite Amount form input Filed
    const depositeFiled = document.getElementById('deposite-filed');
    const depositeAmount = depositeFiled.value;

    // step-3: get The deposite total Amount current
    // for non input (element other than input textarea use to the text innertext)
    const depositeTotalElement = document.getElementById('desposite-Total');
    depositeTotalElement.innerText = depositeAmount;
    


    
})