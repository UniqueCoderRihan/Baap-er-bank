// 1.add even handler with the witdraw btn
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // get the amount form input filed.
    const witdrawField = document.getElementById('withdraw-filed');
    const newWithdrawAmountString = witdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    const witdrawPreviousElement = document.getElementById('withdraw-total');
    const withdrawTotalString = witdrawPreviousElement.innerText;
    const withdrawPreviousTotal = parseFloat(withdrawTotalString);
    
    
    // vaildtaion
    if(newWithdrawAmount<withdrawPreviousTotal){
        alert('sosor er Bank e Mal Nai, Bow er Pitha Tarpor Balance Load Hobe.')
        return  witdrawField.value = '';
    }
    const currentWithdrawTotal = newWithdrawAmount + withdrawPreviousTotal;
    witdrawPreviousElement.innerText = currentWithdrawTotal;
    // step-4 minus-total balence
    const totalBalanceElement = document.getElementById('total-Balance')
    const previousTotalBalanceString = totalBalanceElement.innerText;
    const previousTotal = parseFloat(previousTotalBalanceString);

    const NowBalance = previousTotal - withdrawPreviousTotal;
    totalBalanceElement.innerText = NowBalance;


    // clear filed
    witdrawField.value = ''

})