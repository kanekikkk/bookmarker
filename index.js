const array = [{'name':'xxx', 'author': 'xxxx', 'page': '12'},{'name':'C++', 'author': 'Narbu', 'page': '12'}];
let increment = 0;
let nameIncement = 0, authorIncement = 0, pageIncement = 0;
let  check = 0;

const addSign = document.querySelector('.add .span-add');
const menuButton = document.querySelector('.menuButton');
const viewButton = document.querySelector('.viewButton');
const menu = document.querySelector('.menu');
const view = document.querySelector('.view');

let addForm = '';

addSign.addEventListener('click', function(){

    addForm.classList.remove('hide');

});

menuButton.addEventListener('click', function(){

    view.classList.add('hide');
    menu.classList.remove('hide');


});

viewButton.addEventListener('click', function(){

    menu.classList.add('hide');    
    view.classList.remove('hide');

    while(increment < array.length){

        const form = formCreation();
        const image = document.createElement('img');
        const div = document.createElement('div');
        image.src = 'delete.png'; 
        div.appendChild(image);
        div.classList.add('deleteImg');
        form.appendChild(div);
        div.addEventListener('click', function(){

            form.remove();
            let i = 0; 
            while(array[i].name != form.children[0].children[1].value){

                i++;

            }
            
            array.splice(i, 1);
            increment--;
            console.log(array);

        });

        document.querySelector('.view .secondary-container').appendChild(form);
        form.children[0].children[1].value = array[increment].name;
        form.children[1].children[1].value = array[increment].author;
        form.children[2].children[1].value = array[increment].page;
        increment = increment + 1;

    }

});

const viewAdd = ()=>{

    const form = formCreation();
    form.addEventListener('submit', function(e){

        e.preventDefault();
        form.classList.add('hide');
        const name = document.getElementById('name').value;
        const author = document.getElementById('author').value;
        const page = document.getElementById('page').value;
        array.push({name, author, page});
        
        document.getElementById('name').value = '';
        document.getElementById('author').value = '';
        document.getElementById('page').value = '';

    });

    const button = document.createElement('button');
    button.innerHTML='SUBMIT';
    form.appendChild(button);
    console.log(array);
    return form;

}

const formCreation = ()=>{

    const form = document.createElement('form');
    form.classList.add('form');
    
    for(i = 0; i < 3; i++){

        const div = document.createElement('div');
        div.classList.add('flex');
        
        const label = document.createElement('label');
        const input = document.createElement('input');
        if(i === 0){

            label.innerHTML = 'Book Name:';
            label.setAttribute('for','name');
            input.setAttribute('type','text');
            input.setAttribute('required','');
            input.setAttribute('id','name');

        }else if(i === 1){

            label.innerHTML = 'Author:';
            label.setAttribute('for','name');
            input.setAttribute('type','text');
            input.setAttribute('required','');
            input.setAttribute('id','author');

        }else{

            label.innerHTML = 'Page No.:';
            label.setAttribute('for','name');
            input.setAttribute('type','number');
            input.setAttribute('required','');
            input.setAttribute('id','page');

        }

        div.appendChild(label);
        div.appendChild(input);

        if(check === 3){

            input.setAttribute('disabled',''); 

        }else{

            check++;

        }

        form.appendChild(div);

    }

    return form;

}

const add = document.querySelector('.menu .secondary-container');
addForm = viewAdd();
addForm.classList.add('hide');
add.appendChild(addForm);

