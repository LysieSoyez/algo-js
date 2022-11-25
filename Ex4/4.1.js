///fontion qui calcul la surface du rectangle
function calcSurface (length, width){
    return length*width
}; 
//Demande une langueur et une largeur
let length= prompt("Enter the length");
let width= prompt("Enter a width");

//Renvoie le resultat dans la console
console.log(calcSurface(length, width));
