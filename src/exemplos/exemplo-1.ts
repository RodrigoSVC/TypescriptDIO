
let button = document.getElementById('button');
let input1 = document.getElementById('input1') as HTMLInputElement;
let input2 = document.getElementById('input2') as HTMLInputElement;

function soma(number1: number, number2: number, devePrintar: boolean, phrase: string){
    let resultado = number1 + number2
    if(devePrintar){
        console.log(phrase + resultado)
    }
    return number1 + number2
}

let devePrintar = true;
let phrase = 'O valor é: '

button?.addEventListener('click',()=>{
    console.log(soma(Number(input1?.value), Number(input2?.value),  devePrintar, phrase));
})
