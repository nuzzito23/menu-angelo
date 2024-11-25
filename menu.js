// realizar una calculadora que tenga las opciones
// 1. SUMAR
// 2. RESTAR 
// 3. MULTIPLICAR
// 4. DIVIDIR
// 5. SALIR

// TENER EN CUENTA QUE EL MENU SE VA A REPETIR 
// HASTA QUE EL USUARIO INDIQUE LA OPCION DE SALIR  

var op;
var rep = true;
var num1, num2;
var resultado1 = (num1 + num2);  
var resultado2 = (num1 - num2);
var resultado3 = (num1 * num2);
var resultado4 = (num1 / num2);

do{
    op = parseInt(prompt("Calculadora: \n1.Suma\n2.Resta\n3.Multplicacion\n4.Division\n5.Salir"))
    //console.log(op);

    
    switch(op){
        case 1:
            //suma
            console.log("opcion suma");  
            num1 = parseInt(prompt("Ingrese el valor 1"))
            num2 = parseInt(prompt("Ingrese el valor 2"))
            let resultado1 = num1 + num2;
            alert(resultado1)
            break;
        case 2:
            //resta
            console.log("opcion resta"); 
            num1 = parseInt(prompt("Ingrese el valor 1"))
            num2 = parseInt(prompt("Ingrese el valor 2"))
            let  resultado2 = num1 - num2;
            alert(resultado2)
            break;
        case 3:
            //multiplicacion
            console.log("opcion multiplicacion"); 
            num1 = parseInt(prompt("Ingrese el valor 1"))
            num2 = parseInt(prompt("Ingrese el valor 2"))
            let  resultado3 = num1 * num2;
            alert(resultado3)
            break;
        case 4:
            //dividir
            console.log("opcion dividir"); 
            num1 = parseInt(prompt("Ingrese el valor 1"))
            num2 = parseInt(prompt("Ingrese el valor 2"))
            let resultado4 = num1 / num2;
            alert(resultado4)
            break;
        case 5:
            //salir
            console.log("opcion salir"); 
            rep = false;
            break;
        default:
            console.log("ingrese la opcion correcta");
            break;
    }
    
}while(rep)