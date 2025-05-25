const emailElem = document.getElementById('inputEmail3');
const btnSubmit = document.querySelector('#send-form');
const fullNameElement = document.querySelector('#fullname');
const passwordElement = document.getElementById('inputPassword');
const errorMessage = document.querySelector('.error-message');
const formElements = document.querySelectorAll('.form-element');

function onElementFocus(){
    errorMessage.innerText = '';
    errorMessage.classList.remove('show');
}

formElements.forEach(elem => elem.addEventListener('focus', onElementFocus))


const specialCharacters = ['&', '%', '$', '#', '!', '*', '+', '^'];

function onSubmitForm(){

    if(fullNameElement.value.length < 5){
        errorMessage.innerText = 'אנא הכנס שם מלא';
        errorMessage.classList.add('show');
        return;
    }   
    const passwordValue = passwordElement.value;
    let foundUpperLetter = false;
    let foundNumber = false;
    for (let i = 0; i < passwordValue.length; i++) {
        const asciiValue = passwordValue.charCodeAt(i);
        if(asciiValue >= 65 && asciiValue < 91){
            foundUpperLetter = true;
            break;
        }

        if(passwordValue[i] <= 9 && passwordValue[i] >= 0){
            foundNumber = true;
        }

    }

    if(passwordElement.value.length < 6 || !foundNumber || !foundUpperLetter){
        errorMessage.innerText = 'הסיסמה צריכה להכיל לפחות 6 תווים עם אות גדולה ומספר';
        errorMessage.classList.add('show');
        return;
    }

    
    alert('You sent the form!');
}


if(btnSubmit){
    btnSubmit.addEventListener('click', onSubmitForm);
}
