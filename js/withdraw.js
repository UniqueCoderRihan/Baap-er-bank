// 1.add even handler with the witdraw btn
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // get the amount form input filed.
    const witdrawField = document.getElementById('withdraw-filed');
    const newWithdrawAmountString = witdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    const witdrawPreviousElement = document.getElementById('withdraw-total');
    const withdrawTotalString = witdrawPreviousElement.innerText;
    const withdrawPreviousTotal = parseFloat(withdrawTotalString);
    
    const currentWithdrawTotal = newWithdrawAmount + withdrawPreviousTotal;
    witdrawPreviousElement.innerText = currentWithdrawTotal;

    // minus-total balence
    const totalBalanceElement = document.getElementById('total-Balance')
    const previousTotalBalanceString = totalBalanceElement.innerText;
    const previousTotal = parseFloat(previousTotalBalanceString);

    const NowBalance = previousTotal - withdrawPreviousTotal;
    totalBalanceElement.innerText = NowBalance;


    // clear filed
    witdrawField.value = ''
})