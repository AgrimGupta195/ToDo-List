const inputBox = document.getElementById('input-box');
const list_Container = document.getElementById('list-container');

document.querySelector('.button').addEventListener('click',()=>{
    addTask();
})

function addTask(){
    if(inputBox.value===''){
        alert('You Have to write Something');
    }else{
        let li = document.createElement('li');
        li.innerHTML=inputBox.value;
        list_Container.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML="\u00d7";
        li.appendChild(span);
        
    }inputBox.value="";
    saveData();
}

list_Container.addEventListener('click',(e)=>{
    if(e.target.tagName==='LI'){
        e.target.classList.toggle('checked');
    }else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove();
    }
    saveData();
},false);

function saveData(){
    localStorage.setItem("data",list_Container.innerHTML);
}
function showTask(){
    list_Container.innerHTML=localStorage.getItem('data');
}
showTask();