const loginBtn = document.getElementById('login-btn');

loginBtn.addEventListener('click', function(){

    const heroSec = document.getElementById('hero');
    const bankPro = document.getElementById('bankProfile');
    
    heroSec.style.display ='none';
    bankPro.style.display ='block';

});
