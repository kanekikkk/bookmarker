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
        let c = increment;
        image.src = 'delete.png'; 
        div.appendChild(image);
        div.classList.add('deleteImg');
        form.appendChild(div);
        div.addEventListener('click', function(){

            form.remove();
            array.splice(c, 1);
            console.log(array);
            console.log(c);
            c--;
            increment--;
            nameIncement--;
            authorIncement--;
            pageIncement--;

        });
        document.querySelector('.view .secondary-container').appendChild(form);
        document.getElementById('name'+(increment+1)).value = array[increment].name;
        document.getElementById('author'+(increment+1)).value = array[increment].author;
        document.getElementById('page'+(increment+1)).value = array[increment].page;
        increment = increment + 1;

    }

});

const viewAdd = ()=>{

    const form = formCreation();
    form.addEventListener('submit', function(e){

        e.preventDefault();
        form.classList.add('hide');
        const name = document.getElementById('name0').value;
        const author = document.getElementById('author0').value;
        const page = document.getElementById('page0').value;
        array.push({name, author, page});
        
        document.getElementById('name0').value = '';
        document.getElementById('author0').value = '';
        document.getElementById('page0').value = '';

    });

    const button = document.createElement('button');
    button.innerHTML='SUBMIT';
    form.appendChild(button);
    console.log(array);
    return form;

}

const formCreation = ()=>{

    const form = document.createElement('form');
    form.classList.add('form'+nameIncement);
    
    for(i = 0; i < 3; i++){

        const div = document.createElement('div');
        div.classList.add('flex');
        
        const label = document.createElement('label');
        const input = document.createElement('input');
        if(i === 0){

            label.innerHTML = 'Book Name:';
            label.setAttribute('for','name'+nameIncement);
            input.setAttribute('type','text');
            input.setAttribute('required','');
            input.setAttribute('id','name'+nameIncement++);

        }else if(i === 1){

            label.innerHTML = 'Author:';
            label.setAttribute('for','name'+authorIncement);
            input.setAttribute('type','text');
            input.setAttribute('required','');
            input.setAttribute('id','author'+authorIncement++);

        }else{

            label.innerHTML = 'Page No.:';
            label.setAttribute('for','name'+pageIncement);
            input.setAttribute('type','number');
            input.setAttribute('required','');
            input.setAttribute('id','page'+pageIncement++);

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

