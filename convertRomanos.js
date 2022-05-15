function converter(valor) {
   // const inteiro = valor
    let resultadoRomanos = []
    const romanos = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    const numeros = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const comprimento = numeros.length;
    if (valor > 3999) {
        return 'numero maximo para conversao é 3999!'
    }
    for (let index = 0; index <= comprimento; index++) {
        while (valor >= numeros[index]) {
            resultadoRomanos.push(romanos[index]);
            valor -= numeros[index];
        }
    }
    resultadoRomanos = resultadoRomanos.join('')
    // return `${inteiro} em Numeros Romanos: ${resultadoRomanos}`;    
    return resultadoRomanos
}
converter()
//console.log(converter(38))

let entrada = document.getElementById('input')
let texto = document.getElementById('resposta')
entrada.addEventListener('keyup', () => {
    if (entrada.value > 3999 ) {
        alert ('numero maximo para conversao é 3999!!')
        location.reload()
    }
    if (entrada.value < 0) {
        alert ('digite numero positivo!!')
        location.reload()
    }   
    let result = converter(entrada.value)    
    texto.innerHTML = `${entrada.value} em romanos: ${result}` 
})