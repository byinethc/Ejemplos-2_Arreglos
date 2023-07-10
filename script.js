/* 1. Crea un programa que imprima en consola los números impares del 1 al 50.*/

let numeros = []; //Crea un Array vacio

for (let i = 0; i < 10; i++) {
let numero = Math.floor(Math.random() * 100); // Generar número aleatorio entre 0 y 99
  numeros.push(numero); // Agregar número al array
}
console.log(numeros); // Mostrar el resultado en consola

// 2. El usuario deberá ingresar un string con varias palabras separadas por coma en un popup y se deben convertir en un array, (el usuario ingresa: '1,2,3,4,5' y se convierte en [1,2,3,4,5]). Mostrar en consola dicho resultado.

// Obtener el string ingresado por el usuario mediante un popup
let userInput = prompt("Ingresa varias palabras separadas por coma:");

// Separar las palabras usando la coma como delimitador y convertirlas en un array
let palabras = userInput.split(",");

// Convertir las palabras en números (opcional)
let numeros = palabras.map(Number);

// Mostrar el resultado en la consola
console.log(numeros);

//3. De acuerdo al array [10,40,30,20,15,5], imprime lo siguiente: El arreglo ordenado de menor a mayor, muestra el número menor y el número mayor. Tip: Busca en google los métodos de JavaScript que regresan el mayor y menor elemento de un arreglo.

public class Main {
    public static void main(String[] args) {
        int[] arreglo = {10, 40, 30, 20, 15, 5};

        // Ordenar el arreglo de menor a mayor
        Arrays.sort(arreglo);
  
        // Imprimir el arreglo ordenado
        System.out.println("El arreglo ordenado de menor a mayor es: " + Arrays.toString(arreglo));

        // Imprimir el número menor (primer elemento del arreglo)
        System.out.println("El número menor es: " + arreglo[0]);

        // Imprimir el número mayor (último elemento del arreglo)
        System.out.println("El número mayor es: " + arreglo[arreglo.length - 1]);
    }
}