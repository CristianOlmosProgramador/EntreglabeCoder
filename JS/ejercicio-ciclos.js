
    let num = parseInt(prompt("Ingrese un número"));

    while(isNaN(num)){

        alert("Número inválido... Ingresa nuevamente por favor!")
        num = parseInt(prompt("Ingrese un número"));

    }

    if(num > 0){
        for(let i=1; i<=num; i++){
          
            alert("Hola " + "tú número de saludo es :"+ " " + i);
            //Probando DOM.
            document.write(`Hola tú número de saludo es ${i}`);
            document.write("<br>");
            //Mostrar por consola
            console.log(`Hola tú número de saludo es ${i}`);
         }
    }else{

        alert("Tú numero debe ser mayor a 0, por mientras no podremos imprimir el número de saludos");
        // acá tengo que ocupar una función para volver a pedir el número con el while. 
        // mientras corto el circuito del programa solamente.
    }



   
 
    


