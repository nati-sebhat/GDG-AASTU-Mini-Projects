const budget = document.getElementById('budget');
const item = document.getElementById('item');
const saving = document.getElementById('saving');
const btn = document.getElementById('btn');

btn.addEventListener('click' , () => {
    if(budget.value - item.value < saving.value ){
        alert("You are too broke to afford this bro!");
    }else{
        alert("You can Afford it!");
    }

});