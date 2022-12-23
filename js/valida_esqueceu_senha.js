const form = document.getElementById('form_esqueceu');
const campos = document.querySelectorAll('.required')
const span = document.querySelectorAll('.span-required')
const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi

form.addEventListener('submit', (event) => {
    event.preventDefault()
    emailValidate()
    cpfValidate()
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

function emailValidate() {  
    if(!emailRegex.test(campos[0].value)) {
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

