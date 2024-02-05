const userDataArray=[]
const Register=document.getElementById('RegisterForm')
const Login=document.getElementById('LoginForm')
const registerValues = Register.querySelectorAll('input');

// Use to toggle Registration & Login Form
function toggleSection(){
    Register.style.display='none';
    Login.style.display='block';
}

// To validate user Registration Values and Form
function ValidateForm(event) {
    event.preventDefault();
    const userData = {};
    for (let i = 0; i < registerValues.length; i++) {
        const errorMessage =[]
        const value = registerValues[i].value
        switch(registerValues[i].name){
            case 'name':
                {
                    if(value === ""){
                    errorMessage.push('Name Cannnot be Empty');}
                    else if(!(/^[a-zA-Z]+$/.test(value))){
                    errorMessage.push('Name must be Valid')}
                    else
                    userData.name = value;
                    break;
                }
            case 'email':
                {
                    if(value === "")
                    errorMessage.push(' Email cannot be Empty');
                    else if(!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)))
                    errorMessage.push('Email must be Valid')
                    else
                    userData.email = value;
                    break;
               }
            case 'password':
            {
                if(value === "")
                errorMessage.push('Password cannot be Empty');
                else if(value.length < 8)
                errorMessage.push('Password must be Valid')
                else
                userData.password = value;
                break;
            }
        }

        if(errorMessage.length > 0)
        {
            showErrorMessage(registerValues[i],errorMessage);
        }
        else{
            showSuccessMessage(registerValues[i])
        }
    }

    if(Object.keys(userData).length === 3){
      userDataArray.push(userData);
      const success =document.getElementById('sucessMessage')
      success.innerHTML = `<h1>Register Successfully</h1>`;
    }
    else{
        const success =document.getElementById('sucessMessage')
        success.innerHTML = "";

    }
}

function showErrorMessage(registerValue,errorMessage)
{
    registerValue.classList.remove('success')
    registerValue.classList.add('error')
    
    const errorPlace = document.getElementById(`${registerValue.name}error`)
    errorPlace.textContent = errorMessage.join('<br>');;
}
function showSuccessMessage(registerValue)
{
    registerValue.classList.remove('error')
    registerValue.classList.add('success')
}


function clearFieldStyles(event) {
    const input = event.target;
    input.classList.remove('error');
    input.classList.remove('success');
    
    const errorElement = document.getElementById(`${input.name}error`);
    errorElement.innerHTML = '';
}

function clearError() {
const errorElements = document.querySelectorAll('.error-message');
errorElements.forEach(element => {
    element.innerHTML = '';
});
}

// To Check User are Valid or not ?

function userValidation(event){
  event.preventDefault();
  const loginEmail = document.getElementById('loginEmail').value;
  const loginPassword = document.getElementById('loginPassword').value;

  if(loginEmail === "" || loginPassword === ""){
        loginMessage.textContent = 'Please Enter values';
        loginMessage.style.color = 'red';
  }
  else{
  const user = userDataArray.find(user => user.email === loginEmail && user.password === loginPassword);
  const loginMessage = document.getElementById('loginMessage');
  if (user) {
    loginMessage.textContent = 'Login successful!';
    loginMessage.style.color = 'green';
  } else {
    loginMessage.textContent = 'Login User must be Register';
    loginMessage.style.color = 'red';
  }
 }
}


