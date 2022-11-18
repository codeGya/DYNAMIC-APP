document.getElementById('todo').addEventListener('submit',submitToDoList)


async function submitToDoList(e)
{
    e.preventDefault()
    const todolist={
        task:document.getElementById('task1').value,
        date:document.getElementById('date').value,
        list:document.getElementById('list').value
    }
    const config={
        headers:{
            header1:localStorage.getItem('newtoken')
        }
    }
    const waitForPostingToBackend=await axios.post('http://localhost:3800/add/todo',todolist,config)
    console.log(waitForPostingToBackend)
    document.getElementById('daily').innerHTML=document.getElementById('daily').innerHTML+`<li id=${waitForPostingToBackend.data.id}>Task of ${waitForPostingToBackend.data.date} is-${waitForPostingToBackend.data.list}.Which is related to ${waitForPostingToBackend.data.task} <input type=button onclick=deleteDetails("${waitForPostingToBackend.data.id}") value=DELETE>`
    
}

async function deleteDetails(a)
{
    const config={
        headers:{
            header1:localStorage.getItem('newtoken')
        }
    }


    const waitForDeletion=await axios.delete(`http://localhost:3800/delete/user/${a}`,config)
    document.getElementById('daily').removeChild(document.getElementById(a))

}
document.addEventListener('DOMContentLoaded',displayAfterRefreshingPage)

async function displayAfterRefreshingPage(e)
{

    const config={
        headers:{
            header1:localStorage.getItem('newtoken')
        }
    }


    e.preventDefault()
    const waitForGettingAllData=await axios.get('http://localhost:3800/get/all/data',config)
    let output=""
    for(let i=0;i<waitForGettingAllData.data.length;i=i+1)
    {
        output=output+`<li id=${waitForGettingAllData.data[i].id}>Task of ${waitForGettingAllData.data[i].date} is-${waitForGettingAllData.data[i].list}.Which is related to ${waitForGettingAllData.data[i].task}   <input type=button onclick=deleteDetailsAfterRefreshing("${waitForGettingAllData.data[i].id}") value=DELETE>`
    
    }
    document.getElementById('every').innerHTML=output

    
}


async function deleteDetailsAfterRefreshing(a)
{

    

    const config={
        headers:{
            header1:localStorage.getItem('newtoken')
        }
    }


    const waitForDeletion=await axios.delete(`http://localhost:3800/delete/user/${a}`,config)

    document.getElementById('every').removeChild(document.getElementById(a))

}

async function logoutfunction()
{
    localStorage.removeItem('newtoken')
    window.location.href='./signin.html'
}