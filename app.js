const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirmPassword')
const form = document.getElementById('form')
// const submit = document.querySelector('.submit')

form.addEventListener('submit', (e) =>{
    
    e.preventDefault()
    

    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const confirmPasswordValue = confirmPassword.value.trim()

    if(usernameValue === ""){
        setError(username, "Username can't be blank")
    }
    else{
        setSuccess(username)
    }


    if(emailValue === ""){
        setError(email, "Email can't be blank")
    }
    else if(!isEmail(emailValue)){
        setError(email, "Email is not valid")
    }
    else(
        setSuccess(email)
    )

    if(passwordValue === ""){
        setError(password, "Please enter password")
    }
    else{
        setSuccess(password)
    }

    if(confirmPasswordValue !== passwordValue || confirmPasswordValue === ""){
        setError(confirmPassword, "password didn't match")
    }
    else{
        setSuccess(confirmPassword)
    }
})

function setError(input, message){
    
    formControl = input.parentElement
    
    formControl.className = 'form-control error'
    console.log(formControl)

    const messageError = formControl.querySelector('.message')
    messageError.innerText = message
}

function setSuccess(input){
    const formControl = input.parentElement
    formControl.className = 'form-control success'
    console.log(formControl)
    
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}