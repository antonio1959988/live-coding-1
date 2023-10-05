/*RETROALIMENTACIÓN:
Se resolvio el ejercicio con éxito, como observación solamente hacer falta pulir la forma en que se declaran los nombres de las variables para diferenciar de palabras reservadas. Concimientos base muy solidos y buen manejo de la lógica, se terminó a tiempo y sobró para agregar documentación con comentarios que expliquen mejor el código. El postulante iba explicando como planteaba el problema y como lo resolvia

Status: ¡Contratado!
/

/*
1.- Construye una función que reciba por parámetros un string y un array de strings. La función debe retornar un arreglo de strings con los strings que sean de mayor longitud que el string recibido por parámetros.

Escribe una función que reciba 2 parámetros
Parámetro 1 - Un string
Parámetro 2 - Un array de strings
La función debe devolver todas las palabras del array de entrada (parámetro 2) que sean más largas que el string de entrada (parámetro 1)
Ejemplo:
const myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];
bigWords('bocina', myArray);
Output - ['insecto', 'bootcamp', 'escritorio']
*/

// Función que devuelve un arreglo de palabras más largas que el string dado
function comparacion(unString, unArray) {
    //declarar un array vacio con el resultado
    const resultado = [];

    //Usar un ciclo para recorrer cada elemento del array
    for (const cadena of unArray) {

    //Si la longitud de cada elemento es mayor que la longitud del string a comparar, se agrega con un push al array resultado
      if (cadena.length > unString.length) {
        resultado.push(cadena);
      }
    }
    //retorno del array con el resultado
    return resultado;
  }

  let elementos1 = ["Buenas", "Noches", "Senior", "Sol"];

//Llamado a la función con los parámetros requeridos
console.log(comparacion("Hola", elementos1));


/*2.- Construye una función que reciba por parámetros un array de strings y lo imprima dentro de la lista (

) en el index.html. La función debe mostrar la lista en el HTML manipulando el DOM, cada string del arreglo debe imprimirse en un elemento
. El array que se recibe por parámetros debe ser un array resultante de utilizar la función anterior.
Escribe una función que reciba 1 parámetro
Parámetro 1 - Un array de strings
La función debe mostrar la lista en el HTML, cada string del arreglo debe imprimirse en un elemento
.
Ejemplo:
const myArray = ['insecto', 'bootcamp', 'escritorio'];
printArray(myArray);
Output - <li>insecto</li> <li>bootcamp</li> <li>escritorio</li>  3.- Conecta tu archivo JS con el index.html. Comprueba el funcionamiento del código con diferentes inputs.
*/

//declarar una funcion que reciba un array
function imprimirLista(array){
    //inicializar una variable que obtenga el id de mi documento html
    let lista = document.getElementById("lista");

    //Recorrer array con un ciclo for
    for(nombre in array){
        //Para cada elemento del array se va a crear un <li></li>
        let name = document.createElement("li");

        //dentro de cada elemento se asigna cada nombre del arreglo
        name.innerHTML = array[nombre];

        //Mostrar en el elemento obtenido los datos asignados
        lista.appendChild(name);
    }
}

//asignación de datos y llamada de la función
let array = ["Juan", "Kevin", "Jose"];
imprimirLista(array);

/*1.- Crea un input en el HTML donde el usuario pueda escribir la palabra que se mandará por parámetros a la primera función. 2.- Crea un botón en el HTML. Cuando el usuario de click al botón debe dispararse un evento en el cual se invocará la primera función y recibirá lo que el usuario escriba en el input como el string. Después el array resultante será pasado a la segunda función para mostrarlo en el HTML.*/


function evento() {
    //introducir el valor del input como punto de comparacion para llamar a la funcion
    const inputPalabra = document.getElementById('txtPalabra');
    const valorInputPalabra = inputPalabra.value;
    const arrayFiltrado = comparacion(valorInputPalabra, elementos1);
    imprimirLista(arrayFiltrado);
  }

//Llamar a la funcion evento al darle click al boton
const boton = document.getElementById('btnFiltrar');
boton.addEventListener('click', evento);

