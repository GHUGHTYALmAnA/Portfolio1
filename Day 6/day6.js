let name = document.querySelector('#name')
let age = document.querySelector('#age')
const agree = document.querySelector('#agree')
const disagree = document.querySelector('#disagree')
const clear = document.querySelector('#clear')
let greet = document.querySelector('.greeting')

agree.addEventListener('click',()=>{
    if(name.value && age.value !== ''){
        greet.innerText= `Welcome Mr. ${name.value} you are ${age.value} years old`
    }
    else{
        alert('You need to enter the information');
    }
})
disagree.addEventListener('click',()=>{
    if(name.value && age.value !== ''){
        greet.innerText= `You Disagreed!`
    }
    else{
        alert('ERROR!!');
    }
})
clear.addEventListener('click',()=>{
    greet.innerText= ``
    age.value = ''
    name.value = ''
})
