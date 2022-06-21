let buttonOne = document.getElementById('button');

function somarImplicito(param1: number, param2: number){
    return param1 + param2;
}

buttonOne?.addEventListener('click',()=>{
    console.log('Hello world');
})
