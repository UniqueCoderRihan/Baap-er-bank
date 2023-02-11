// step 1: aadd click event handler with submit btn
document.getElementById('btn-submit').addEventListener('click', function(){
    // step:2: get the email address inside input email filed.
    // Alwys remember to use .Value USe from input filed
    const emailFiled = document.getElementById('user-email')
    const email = emailFiled.value;
    // step:3 : get passsword and Frist set Id on PassWord Filed ,secound: getTheElementByiD ,Thrid: get The Value Form the Element.
    const passWordFiled = document.getElementById('user-passWord')
    const passWord = passWordFiled.value;
    
    // DANGER: DONNOT USE THIS METHOD .
    // step: 4: verify email and Password.
    if(email ==='sosur@gmail.com' && passWord ==='1234'){
        window.location.href = 'bank.html'
        
    }
    else{
        alert('Na Na Tomk to Dukte dia jabe nah! tomi Id Mone Rakte paro Nai.')
    }
})