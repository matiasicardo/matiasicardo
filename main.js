let menuVisible = false;
// funcion mostrar menu responsive

function mostrarOcultarMenu (){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false; 
    } else {
        document.getElementById("nav").classList="responsive";
        menuVisible = "true"
    }
}

function seleccionar(){
    document.getElementById("nav").classList=""
    menuVisible = false;
}