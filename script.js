const submit=document.getElementById('submit')
const email=document.getElementById('email-input')
const password=document.getElementById('input-password')
const errorEmail=document.getElementById('validEmail')
const passwordError=document.getElementById('validPassword')
const showHidePassword=document.getElementById('showPasswordBtn')




submit.addEventListener('click',(e)=>{
    e.preventDefault()
    validateForm()
})
const validateForm=()=>{
    if(email.value==''){
        errorEmail.style.display='block'
        email.style.border='1px solid red'

        
    }
    else if(password.value==''){
      passwordError.style.display='block'
      password.style.border='1px solid red'
    }
    else{

    }
}

showHidePassword.addEventListener('click',()=>{
    if(password.type==='password'){
        password.type='text'
            showHidePassword.textContent="Hide"
    }
    else{
        password.type='password'
        showHidePassword.textContent="Show"
    }
})