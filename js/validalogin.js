const form = document.getElementById('form_login');
const campos = document.querySelectorAll('.required')
const span = document.querySelectorAll('.span-required')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    userValidate()
    passwordValidate()
    
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

function userValidate() {
    if(campos[0].value.length == 0) {
        setError(0);
    }
    else{
        removeError(0);
    }
}

function passwordValidate() {
    if(campos[1].value.length == 0) {
        setError(1);
    }
    else{
        removeError(1)
    }
}

