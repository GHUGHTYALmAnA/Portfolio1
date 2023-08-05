let str = '';
const btn = document.querySelectorAll('.btn');
Array.from(btn).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if (e.target.innerHTML === '=') {
            str = eval(str);
            document.querySelector('#displayItems').value = str;
        }
        else if (e.target.innerHTML === 'C') {
            str = '';
            document.querySelector('#displayItems').value = str;
        }
        else{
            console.log(e.target);
            str = str + e.target.innerHTML;
            document.querySelector('#displayItems').value = str;
        }
    })
});