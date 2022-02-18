let taskInput = document.getElementById('taskInbut');
let taskBtn = document.getElementById('taskBtn');
let noTask = document.getElementById('noTask');
let tasks = document.querySelector('.tasks');

let addTask = ()=>{
 let inputData = taskInput.value;


 if( taskInput.value.length==0 ){
     alert('no data yet')
 }
     else{
        noTask.classList.add('none')
        tasks.innerHTML += `
 <div class="alert pb-3 alert-info" >
 ${inputData}
 <button  class="delete btn btn-danger  float-right"> Delete </button>
 </div>
 `;
 taskInput.value="";

     }

 }


taskBtn.addEventListener('click',addTask)

document.addEventListener('click',function(e){
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    if(tasks.children.length ==0){
        noTask.classList.remove('none');
    }
    }
})


