document.getElementById('signin').addEventListener('submit',signInUser)

async function signInUser(e)
{
    e.preventDefault()
    const data={
        email:document.getElementById('email').value,
        password:document.getElementById('password').value
    }

  const waitForLoggingIn=await  axios.post('http://localhost:3800/signin/user',data)
  console.log(waitForLoggingIn)
  if(waitForLoggingIn.status===200)
  {
    localStorage.setItem('newtoken', waitForLoggingIn.data)
    window.location.href='./todo.html'
  }
  if(waitForLoggingIn.status===402)
  {
    window.alert('No such User exist!')
  }
  if(waitForLoggingIn.status===400){
    window.alert('Password is incorrect')
  }
}