const form = document.getElementById('form');
const campos = document.querySelectorAll('.required')
const span = document.querySelectorAll('.span-required')
const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi

form.addEventListener('submit', (event) => {
    event.preventDefault()
    nameValidate()
    cpfValidate()
    userValidate()
    passwordValidate()
    comparePassword()
    emailValidate()
    nascimentoValidate()
    telefoneValidate()
}) 


//funções para mostrar erro 
function setError(index) {
    campos[index].style.border = '2px solid #e63636';
    span[index].style.display = 'block'
}

//funções remover erro
function removeError(index) {
    campos[index].style.border = '';
    span[index].style.display = ''
}

//exceção nome
function nameValidate() {
    if(campos[0].value.length < 3) {
        setError(0);
    }
    else{
        removeError(0);
    }
}

function cpfValidate() {
    if (campos[1].value.length != 11 || 
		campos[1].value == "00000000000" || 
		campos[1].value == "11111111111" || 
		campos[1].value == "22222222222" || 
		campos[1].value == "33333333333" || 
		campos[1].value == "44444444444" || 
		campos[1].value == "55555555555" || 
		campos[1].value == "66666666666" || 
		campos[1].value == "77777777777" || 
		campos[1].value == "88888888888" || 
		campos[1].value == "99999999999")
        setError(1)
    else{
        removeError(1);
    }
}

function userValidate() {
    if(campos[2].value.length == 0) {
        setError(2);
    }
    else{
        removeError(2);
    }
}

function passwordValidate() {
    if(campos[3].value.length < 8) {
        setError(3);
    }
    if(campos[3].value == campos[3].value.toLowerCase()) {
        setError(3);
    }
    else{
        removeError(3);
        comparePassword();
    }
}

function comparePassword() {
    if(campos[3].value == campos[4].value && campos[4].value.length >= 8 ) {
        removeError(4)
    }
    else {
        setError(4)
    }    
}

function emailValidate() {  
    if(!emailRegex.test(campos[5].value)) {
        setError(5);
    }
    else{
        removeError(5);
    }
}

function nascimentoValidate() {  
    if((campos[6].value.length == 0)) {
        setError(6);
    }
    else{
        removeError(6);
    }
}
function telefoneValidate() {  
    if((campos[7].value.length == 0)) {
        setError(7);
    }
    else{
        removeError(7);
    }
}

