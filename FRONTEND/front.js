document.getElementById('signup').addEventListener('submit',signupAfterFillingPassword)

async function signupAfterFillingPassword()
{
    console.log(document.getElementById('number').value)
    //e.preventDefault()
    const credentials={
        email:document.getElementById('email').value,
        password:document.getElementById('password').value,
        name:document.getElementById('name').value,
        mnumber:document.getElementById('number').value
        
    }

    const waitForSendingDataToBBackend=await axios.post('http://localhost:3800/signup/user',credentials)

}