const loginBtn = document.getElementById('login-btn');

loginBtn.addEventListener('click', function(){

    const heroSec = document.getElementById('hero');
    const bankPro = document.getElementById('bankProfile');
    heroSec.style.display ='none';
    bankPro.style.display ='block';

});


const depositAmount = document.getElementById('submitBTN');
depositAmount.addEventListener('click', function(){

    const depoValue = document.getElementById('amnount-val').value;
    const depoValNum = parseFloat(depoValue);
    

    const setDepoAmmount = document.getElementById('setValAmmount').innerText;
    const setDeponum = parseFloat(setDepoAmmount);
    const totalDepo = depoValNum + setDeponum;
    document.getElementById('setValAmmount').innerText = totalDepo;


    plusAmmount('balaceAmmount', depoValNum); // function "plusAmmount"
    depoValue = document.getElementById('amnount-val').value = '';

})


function plusAmmount(id, depo){
    
    const balacePart = document.getElementById(id).innerText;   
    const balacePartNum = parseFloat(balacePart);
    const totalbalace = balacePartNum + depo;
    document.getElementById(id).innerText = totalbalace;

}

 // withdrow button event handler  

document.getElementById('withdrowBtn').addEventListener('click', function(){

    const withdrowVAl = document.getElementById('withdrowInput').value;
    const withdrwValNum = parseFloat(withdrowVAl);
    document.getElementById('withdrowInput').value = '';



    const withdrowammountText = document.getElementById('withdrawAmount').innerText;
    const withdrowammountNum = parseFloat(withdrowammountText);
    const totalwithdrow = withdrwValNum + withdrowammountNum;
    document.getElementById('withdrawAmount').innerText = totalwithdrow;

    const balacePart = document.getElementById('balaceAmmount').innerText;   
    const balacePartNum = parseFloat(balacePart);

    if(withdrwValNum <= balacePartNum){

        plusAmmount2('balaceAmmount', withdrwValNum); // function "plusAmmount2"

    }else{

        console.log('emtey ammount');
    }

});

function plusAmmount2(id, withdrow){
    
    const balacePart = document.getElementById(id).innerText;   
    const balacePartNum = parseFloat(balacePart);
    const totalbalace = balacePartNum - withdrow;

    document.getElementById(id).innerText = totalbalace;

}


///========================= ek function er variable onno function a kivabe use kore? /////===============================