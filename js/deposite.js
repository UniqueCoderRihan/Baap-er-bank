// step-1: Add evenListener  to the btn
document.getElementById('addDeposite').addEventListener('click', function(){
    // step-2: get the deposite Amount form input Filed
    const depositeFiled = document.getElementById('deposite-filed');
    const NewDepositeAmountstring = depositeFiled.value;
    const NewDepositeAmount = parseFloat(NewDepositeAmountstring)
    // step-3: get The deposite total Amount current
    // for non input (element other than input textarea use to the text innertext)
    const depositeTotalElement = document.getElementById('desposite-Total');
    const previousDepositeTotalString = depositeTotalElement.innerText;
    const previousDepositeTotal = parseFloat(previousDepositeTotalString);

    const currentDepositeTotal = previousDepositeTotal + NewDepositeAmount;
    depositeTotalElement.innerText = currentDepositeTotal;

    // step-5: get balance current deposite
    const totalBalanceElement = document.getElementById('total-Balance');
    const previousTotalBalanceString = totalBalanceElement.innerText;
    const previousTotal = parseFloat(previousTotalBalanceString);
    // step-6 calculete this 
     const currentBalanceTotal = previousTotal+previousDepositeTotal;
     totalBalanceElement.innerText = currentBalanceTotal;
    // dwwtp:7 clear value
    depositeFiled.value = ''
  
})