function cesarCipher() {
  var personReply = prompt("Indique la opcion que necesita:   \n 1) Cifrar   \n 2)Descifrar");  // entregar 2 opciones
  do {
   if(personReply !=="") {
     if(personReply == "1") {  
       cipher();    // se filtra a la persona segun su respuesta
		} else if(personReply == "2") {
		  descipher ();  // se filtra a la persona segun su respuesta 
		} else {
			alert("Por favor ingrese una de las opciones validas"); // advertir que se mentenga dentro de las opciones
		}
	}
}
	while(personReply === "" ||( personReply != "1" && personReply !="2" )); // definir parametros de la respuesta esperada
	
	function cipher() {
	  var string = prompt ("Ingrese la palabra que desea cifrar");  // preguntar por las frase que sera cifrada
	  var output = "";  // crea string vacio para los indices cifrados
	  
	  for (var i=0; i < string.length; i++) {  // variable que itinera en la frase 

	  var indice = string.charCodeAt(1);  // formula para descubrir codigo ASCII 
	  indice = ((((indice - 65) +33) +26) %26) +65;  // formula que indicara el indice 
	  indice = string.fromCharCode(indice); // devolvera en letras el resultado anterior

     output = output + indice; 
     }

     return alert("Su palabra cifrada es" + " " + output); // entrega resultado final al usuario 
 }
  function descipher() {
    var string = prompt ("Ingrese la palabra que desea descifrar");  // preguntar por las frase que sera descifrada
	  var output = ""; // crea string vacio para los indices descifrados

	  for (var i=0; i < string.length; i++); // crea contador que recorrera el string por descifrar
	  
	  var indice = string.fromCharCOde(indice);  //formula para descubrir el codigo ASCII 
	  indice = ((((indice - 65) +33) +26) %26) +65 ; // formula que indicara el indice 
	  indice = string.fromCharCode(indice); // devolvera en letras el resultado anterio
	  
	  
	  output = output + indice; 
    
	  return alert("Su palabra descifrada es" + " " + output); // entrega resultado final al usuario 
}
}

