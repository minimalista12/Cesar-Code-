INICIO 
Se crea la funcion cesarCipher 
 Crea una variable que contenga el siguiente prompt "Indique la opcion que necesita:   \n 1) Cifrar   \n 2)Descifrar"
 Aplicar do while solo si la respuesta es 1 o 2
        si la respuesta es una palabra, un espacio o cualquier numero que no sea ni 1 ni 2
          ejecutar la alerta "Por favor ingrese una de las opciones validas"
          repetir la alerta hasta que el usuario responda de acuerdo a las instrucciones 

 Crea la funcion cipher para quienes eligieron la opcion 1 
  crea una variable que contenga el siguiente prompt "Ingrese la palabra que desea cifrar"
   
  para cifrar la respuesta que el usuario ingresara 
          se crea una variable que iterara en la palabra letra por letra
          se crea una variable output que contendra la palabra cifrada al terminar  

          
          se crea la variable indice que entregara el codigo ASCII de la variable anterior  
          se agrega la funcion romCharCode a la variable indice para que transforme los numeros en letras
          se introduce el resultado de la funcion anterior a la variable output 


  devolver al usuario su resultado en forma de un alert que diga ("Su palabra cifrada es" + " " + output)
          

 Crea la funcion descipher para quienes eligieron la opcion 2 
  crea una variable que contenga el siguiente prompt "Ingrese la palabra que desea descifrar"
   
  para descifrar la respuesta que el usuario ingresara 
          se crea una variable que iterara en la palabra letra por letra
          se crea una variable output que contendra la palabra cifrada al terminar  

          
          se crea la variable indice que entregara el codigo ASCII de la variable anterior  
          se agrega la funcion romCharCode a la variable indice para que transforme los numeros en letras
          se introduce el resultado de la funcion anterior a la variable output 


   devolver al usuario su resultado en forma de un alert que diga ("Su palabra descifrada es" + " " + output)
  

FINAL 

