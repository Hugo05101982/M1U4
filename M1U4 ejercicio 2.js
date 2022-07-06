var numeros = [1201, 350, 68, 726, 505];
var mayor = 0;

for (var i = 0; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
        mayor = numeros[i];
    }
}
console.log('el mayor de ' + numeros + ' es ' + mayor);