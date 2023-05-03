const bar = document.querySelector('#bar');
const addBtn = document.querySelector("#add-btn");
const addItem = document.querySelector('#add-item');
const list = document.querySelector('#list')
const listItems = document.querySelector('.list-items');
const deleteBtn = document.querySelectorAll('.delete-btn');
const deleteItem = document.querySelector('.delete-item');
const checkBtn = document.querySelectorAll('.check-btn');
const checkItem = document.querySelector('.check-item');
let total = document.querySelector('#total');
let completed = document.querySelector('#completed');
let incompleted = document.querySelector('#incompleted');
const text = document.querySelector('.text');
const form =document.querySelector('#form')


const TotalFunction =()=>{
const totalCount = document.querySelector('ul').children.length;
total.innerHTML =`  Total = ${0+totalCount}` ;
}

const CompletedFunction =()=>{
const completeCount = document.querySelectorAll('.checkend').length;
 completed.innerHTML = `Complete = ${completeCount}`;
}

const IncompletedFunction =()=>{
const incompletedCount = document.querySelectorAll('.uncheckend').length; 
incompleted.innerHTML= `Incomplete = ${incompletedCount}`
}


const TotalityCount = ()=>{
TotalFunction();
CompletedFunction();
IncompletedFunction();

}


form.addEventListener('submit' , e =>{
e.preventDefault();
const li = document.createElement('li');
li.classList.add('list-items');
li.innerHTML = `
<button class="delete-btn">
<svg class="delete-item"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round"
    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /> 
</svg>
</button>

<span class="text uncheckend">${bar.value}</span>

<button class="check-btn">
<svg class="check-item" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
</svg>
</button>


`;

list.append(li);
const span = document.querySelector('span')
span.classList.add('uncheckend')
bar.value = '';
TotalityCount();
localStorage.setItem('list', list.innerHTML);


});

 const getTarea = () => {
     if (localStorage.getItem('list')) {
         list.innerHTML = localStorage.getItem('list');
}
 }
 getTarea();

 TotalityCount();

list.addEventListener('click', e => {
    if (e.target.closest('.delete-btn')) {
        const button = e.target.closest('.delete-btn');
        button.parentElement.remove();
        localStorage.setItem('list', list.innerHTML); // Guardar en locale storage
        TotalityCount();
    }
    if (e.target.closest('.check-btn')){
        const button = e.target.closest('.check-btn');
        const txt = button.parentElement.children[1];
        const cbtn = button.parentElement.children[2];
        TotalityCount();
        txt.classList.remove('uncheckend')
        txt.classList.add('checkend');
        cbtn.setAttribute('disabled','true');
        localStorage.setItem('list', list.innerHTML);
        TotalityCount();
        }

});


//agregar arriba en una funcion , luego llamarla en varias partes del codigo



