/*arreglo con los aciertos
por el momento ponemos la primera opcion
-- cambiar con las correctas en el futuro */
let correctas  = [1,1,1,1,1];
/* arreglo con opciones elegidas del user*/
let opciones_elegidas = [];

let cantidad_correctas = 0;

/*funcion que toma el numero de pregunta y el elegido*/
function respuesta (num_pregunta, seleccionada)
{
    //guardo respueta elegida
    opciones_elegidas[num_pregunta] = seleccionada.value;
    /*busca el nodo seleccionado de cada section*/

    id = "p" + num_pregunta;
    labels = document.getElementById(id).childNodes;
    /* cambiar el color de los inputs */
    labels[3].style.backgroundColor = "green";
    labels[5].style.backgroundColor = "red";
    labels[7].style.backgroundColor = "grey";

    // doy el color de label seleccionado
    seleccionada.parentNode.style.backgroundColor = "#cec0fc";
}
/* compara si las respuestas ingresadas si son correctas*/
function corregir(){
    cantidad_correctas = 0;
    for(i = 0; i <correctas.length;i++){
        if(opciones_elegidas[i] == correctas[i]){
            cantidad_correctas++;
        }
    }
    
    document.getElementById("resultado").innerHTML = cantidad_correctas;
}
function reset(){
    cantidad_correctas = 0;
    seleccionada.parentNode.style.backgroundColor = "red";

}


