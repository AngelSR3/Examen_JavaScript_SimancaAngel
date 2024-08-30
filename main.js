const recipeform = document.getElementById('recipeform');
const namer = document.getElementById('recipename');
const ingredients = document.getElementById('recipeingredients');
const instructions = document.getElementById('recipeinstructions');
const category = document.getElementById('recipecategory');
const time = document.getElementById('cookingtime');
const porcions = document.getElementById('porcions');
const difficult = document.getElementById('recipedifficult')
const recipelist=document.getElementById('recipe-list');

recipeform.addEventListener('submit', function(event){
    event.preventDefault();
    addrecipe(namer.value);
    addrecipe(ingredients.value);
    addrecipe(instructions.value);
    addrecipe(category.value);
    addrecipe(time.value);
    addrecipe(porcions.value);
    addrecipe(difficult.value);
    namer.value='';
    ingredients.value='';
    instructions.value='';
    category.value='';
    time.value='';
    porcions.value='';
    difficult.value='';
});

function addrecipe(namer){
    const h3=document.createElement('h3');
    h3.textContent=namer;
    const editBtn=document.createElement('button');
    editBtn.textContent='Editar';
    editBtn.onclick=() => editrecipe(h3);
    const deleteBtn=document.createElement('button');
    deleteBtn.textContent='Eliminar';
    deleteBtn.onclick=() => deleterecipe(h3);

    h3.appendChild(editBtn);
    h3.appendChild(deleteBtn);
    recipelist.appendChild(h3);
}

function editrecipe(h3){
    const newrecipe=prompt('Edita la receta:', );
    if (newrecipe){
        h3.FirstChild.textContent=newrecipe;
    }
}

function deleterecipe(h3){
    recipelist.removeChild(h3)
}