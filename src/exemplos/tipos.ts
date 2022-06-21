type input = number | string;



function valores(input1 :input, input2: input){
    if(typeof input1 === 'string' || typeof input2 === 'string'){
        return  input1.toString() + input2.toString();
    } else{
        return input1 + input2;
    }
}


console.log(valores(1,5));
console.log(valores('ola ', 'tudo bem'))
console.log(valores(1, '5'))