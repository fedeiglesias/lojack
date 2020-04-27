/**
 * @author Federico Iglesias colombo
 * @Description:	Algoritmo encargado de consultar a la base de datos
 * 					(XML) cada una cantidad de tiempo X, y ejecutar ciertas
 * 					funciones, enviando los datos recogidos como parametros. 
 */



//cuando todo el documento fue cargado
 $(document).ready(function(){
 

    //definimos un timeout para la funcion ajax
	setTimeout("ajax(urlAjaxXML)",2000);

});


 
 function ajax(urlAjaxXML){
 	$.ajax({
	  type: 'GET',
	  url: urlAjaxXML,
	  cache: false,
	  dataType: ($.browser.msie) ? 'text' : 'xml', // Reconocemos el browser.
	  success: function(data){
				    var xml;
				    if(typeof data == 'string'){
				      xml = new
				      ActiveXObject('Microsoft.XMLDOM');
				      xml.async = false;
				      xml.loadXML(data);
				    } else {
				      xml = data;
				    }
				  	
				    $(xml).find('root').each(function(){
						
						/*
						 * Guardamos los valores de los nodos xml en variables
						 */
						 patente = $(this).find('patente').text();
						 vehiculo = $(this).find('vehiculo').text();
						 nroviaje = $(this).find('nroviaje').text();
						 fechaposicion = $(this).find('fechaposicion').text();
						 velocidad = $(this).find('velocidad').text();
						 velocidadmax = $(this).find('velocidadmax').text();
						 rpm = $(this).find('rpm').text();
						 tempmotor = $(this).find('tempmotor').text();
						 presaceite = $(this).find('presaceite').text();
						 kmviaje = $(this).find('kmviaje').text();
						 kmtotal = $(this).find('kmtotal').text();
						 porccombustible = $(this).find('porccombustible').text();
						 consumoviaje = $(this).find('consumoviaje').text();
						 consumototal = $(this).find('consumototal').text();
						 porcacelerador = $(this).find('porcacelerador').text();
						 cantfrenado = $(this).find('cantfrenado').text();
						 chofer = $(this).find('chofer').text();
						 presturbo = $(this).find('presturbo').text();
						 latitud = $(this).find('latitud').text();
						 longitud = $(this).find('longitud').text();
						 georeferencia = $(this).find('georeferencia').text();
						 rumbo = $(this).find('rumbo').text();
						 tmpdetenido = $(this).find('tmpdetenido').text();
						 tmpmarcha = $(this).find('tmpmarcha').text();
						 usocrucero = $(this).find('usocrucero').text();
						 luces = $(this).find('luces').text();
						 

					    });
						
						if(rpm != getValueAgujas('tacometro-aguja1')){
							setValueAgujas('tacometro-aguja1',rpm);
						}
						
						if(tempmotor != getValueAgujas('temperature-aguja1')){
							setValueAgujas('temperature-aguja1',tempmotor);
						}
						
						if(presturbo != getValueAgujas('turbo-aguja1')){
							setValueAgujas('turbo-aguja1',presturbo);
						}

						if(presaceite != getValueAgujas('aceite-aguja1')){
							setValueAgujas('aceite-aguja1',presaceite);
						}
						
						if(porcacelerador != getValueAgujas('acelerator-aguja1')){
							setValueAgujas('acelerator-aguja1',porcacelerador);
						}
						
						
						if(velocidad != getValueAgujas('speedo-aguja1')){
							setValueAgujas('speedo-aguja1',velocidad);
						}

						if(porccombustible != getValueAgujas('gasoil-aguja1')){
							setValueAgujas('gasoil-aguja1',porccombustible);
						}
						
						//actualizamos kilometros parciales
						sIFR.getReplacementByFlashElement($('#kilometros-parciales h1').children('.sIFR-flash')[0]).replaceText(kmviaje);

						//actualizamos kilometros totales
						sIFR.getReplacementByFlashElement($('#kilometros-totales h1').children('.sIFR-flash')[0]).replaceText(kmtotal);
						
						//actualizamos tiempo-detenido
						sIFR.getReplacementByFlashElement($('#tiempo-detenido h1').children('.sIFR-flash')[0]).replaceText(tmpdetenido);

						//actualizamos tiempo-marcha
						sIFR.getReplacementByFlashElement($('#tiempo-marcha h1').children('.sIFR-flash')[0]).replaceText(tmpmarcha);

						//actualizamos consumo-viaje
						sIFR.getReplacementByFlashElement($('#consumo-viaje h1').children('.sIFR-flash')[0]).replaceText(consumoviaje);
						
						//actualizamos consumo-total
						sIFR.getReplacementByFlashElement($('#consumo-total h1').children('.sIFR-flash')[0]).replaceText(consumototal);
						
						//actualizamos uso-crucero
						sIFR.getReplacementByFlashElement($('#uso-crucero h1').children('.sIFR-flash')[0]).replaceText(usocrucero);
						
						//actualizamos vehiculo
						sIFR.getReplacementByFlashElement($('#vehiculo h1').children('.sIFR-flash')[0]).replaceText(vehiculo);
						
						//actualizamos chofer
						sIFR.getReplacementByFlashElement($('#chofer h1').children('.sIFR-flash')[0]).replaceText(chofer);
						
						//actualizamos patente
						sIFR.getReplacementByFlashElement($('#patente h1').children('.sIFR-flash')[0]).replaceText(patente);
						
						//actualizamos latitud
						sIFR.getReplacementByFlashElement($('#latitud h1').children('.sIFR-flash')[0]).replaceText(latitud);
						
						//actualizamos longitud
						sIFR.getReplacementByFlashElement($('#longitud h1').children('.sIFR-flash')[0]).replaceText(longitud);
						
						//actualizamos vehiculo
						sIFR.getReplacementByFlashElement($('#rumbo h1').children('.sIFR-flash')[0]).replaceText(rumbo);
						
						//actualizamos viaje
						sIFR.getReplacementByFlashElement($('#viaje h1').children('.sIFR-flash')[0]).replaceText(nroviaje);
						
						//actualizamos vehiculo
						sIFR.getReplacementByFlashElement($('#fecha-posicion h1').children('.sIFR-flash')[0]).replaceText(fechaposicion);
						
						//actualizamos vehiculo
						sIFR.getReplacementByFlashElement($('#velocidad-maxima h1').children('.sIFR-flash')[0]).replaceText(velocidadmax);
						
						
						//actualizamos vehiculo
						sIFR.getReplacementByFlashElement($('#frenados h1').children('.sIFR-flash')[0]).replaceText(cantfrenado);
						
						//actualizamos luces
						if(luces == 0){
							sIFR.getReplacementByFlashElement($('#luces h1').children('.sIFR-flash')[0]).replaceText("OFF");

						}else{
							sIFR.getReplacementByFlashElement($('#vehiculo h1').children('.sIFR-flash')[0]).replaceText("ON");
						}
						
						//actualizamos Georeferencia
						sIFR.getReplacementByFlashElement($('#georeferencia h1').children('.sIFR-flash')[0]).replaceText(georeferencia);
						
						//corremos de nuevo la funcion
						setTimeout("ajax(urlAjaxXML)",segundos);
				  }
		});
 }
 
function actualizaDigital(){
	sIFR.callbacks["#kilometros-parciales h1"][0].replaceText("200");
}
 
function setValueAgujas(DOMId,valor){

	 //creamos el nuevo texto a reemplazar
	 nuevoValor = '<dial value="'+valor+'"';
	 
	 //obtenemos su XML
	 var aguja = getChartFromId(DOMId);
	 var agujaXML = aguja.getXML();
	 
	 //expresion regular
	 var regex = /<dial value="[^"]+"/gi;
	 
	 //reemplazo el texto
	 var resultado = agujaXML.replace(regex,nuevoValor);
	
	 //Actualizar tacometro
	 if(DOMId == "tacometro-aguja1"){
	 	Tacometro.setDataXML(resultado);
	 }
	 
	 //Actualizar temperatura
	 if(DOMId == "temperature-aguja1"){
	 	Temperature.setDataXML(resultado);
	 }

	//Actualizar turbo
	 if(DOMId == "turbo-aguja1"){
	 	Turbo.setDataXML(resultado);
	 }
	
	//Actualizar aceite
	 if(DOMId == "aceite-aguja1"){
	 	Aceite.setDataXML(resultado);
	 } 
	 
	 //Actualizar acelerator
	 if(DOMId == "acelerator-aguja1"){
	 	Acelerator.setDataXML(resultado);
	 } 

	 //Actualizar velocidad
	 if(DOMId == "speedo-aguja1"){
	 	Speedo.setDataXML(resultado);
	 } 

	 //Actualizar combustible
	 if(DOMId == "gasoil-aguja1"){
	 	Gasoil.setDataXML(resultado);
	 } 
	 
}

function getValueAgujas(DOMId){
	 //obtenemos su XML
	 var aguja = getChartFromId(DOMId);
	 var agujaXML = aguja.getXML();
	 
	 //expresion regular
	 var regex = /<dial value="[^"]+"/gi;
	 
	 //coincidencia
	 var matchx = agujaXML.match(regex);
	 
	 //pasamos a string
	 matchx = matchx.toString();
	 
	 //tamaño total de la cadena
	 var len = matchx.length;

	 //cortamos la cadena
	 var res = matchx.substring(13,len-1);
	
	return res;
}

 	//llamamos a la funcion ajax de una
 	ajax(urlAjaxXML);