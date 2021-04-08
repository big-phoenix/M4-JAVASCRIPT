/******************************************************* FASE 1 ***********************************************************/

let billet1 = 5; /* Variables con los precios */
let billet2 = 10;
let billet3 = 20;
let billet4 = 50;
let billet5 = 100;
let billet6 = 200;
let billet7 = 500;

let total=0; // Variable para el precio total

let platos = []; // array de platos del menu
let precio = []; // array de precio de los platos

/******************************************************* FASE 2 ***********************************************************/

let menu = new Map(); // Map para guardar los platos y los precios
let pedido = []; // Array para perdios

let contador = 0; 
let letroducir = 1; // controlador para mostrar "que plato desea" en el while

let parar = 1; // controlador para salir de while

/*Si quieres hacer la prueba mas rapido, comentan los "while" */

platos = ["Ensalada","Osobuco","Bacalao","Paella","Flan"];
precio = [5,15,20,15,5];

/*while(letroducir != 0){

    platos.push(prompt("Nombre del plato: "));
    precio.push(prompt("Precio del plato: "));

    menu.set(platos[contador], precio[contador]);

    letroducir = prompt("Quieres seguir letroduciendo Platos en el sistema: 1/SI o 0/NO");
    contador++;

}*/

for(i=0; i<platos.length; i++){ // guradamos el platos con su precio en el Map
    menu.set(platos[i], precio[i]);
}

document.getElementById("respuesta").innerHTML += "************* Nuestro Menu del día es: *************<br><br>";

for(const [key,value] of menu.entries()){ // recorremos y guardamos las entrada del Map
    document.getElementById("respuesta").innerHTML += key+ ": " +value+ "€<br>"; // mosmtramos en pantalla el menu
}

function enviar(){

    let mostrar = false;
    pedido.push(document.getElementById("pedido").value); // guardamos en el plato que pida el usuario

do{

    if(mostrar == true){
        pedido.push(prompt("Que plato deseas: ")); // le pedimos al usuario que letroduzca el plato nuevo que quiere
    }

    parar = prompt("Quieres mas platos 1:SI o 0:NO"); // le pedimos al usuario si quiere mas platos

    mostrar = true;

}
while(parar != 0);

cuenta(); // ejecutamos la funcion cuenta que verificara el pedido con el menu y mostrara precio

}

/******************************************************* FASE 3 ***********************************************************/

function cuenta(){

    for(i=0;i<pedido.length;i++){ // recoremos y verficamos si concide el pedido con el menu

        try{

            if(menu.has(pedido[i])){
                total += menu.get(pedido[i]);
            }

        }catch (err){
            console.error(err);
        }
        
        /*if(menu.has(pedido[i])){
            total += menu.get(pedido[i]);
        } else{
            alert("No exite el Plato");
        }*/

    }

        let num1 = 0; // Guardamos cuantos billetes hay en cada vuelta del bucle hasta que el total este a cero
		let num2 = 0;
		let num3 = 0;
		let num4 = 0;
		let num5 = 0;
		let num6 = 0;
        let num7 = 0;
        let resultado="";

        alert("*** Precio total del pedido son: " +total+ "€"); // Motramos el precio fianl del pedido
        
        while(total != 0) { // Bucle para contar los billetes necesitamos para pagar cuenta
			
			if(total%billet7 == 0) {
				num7++;
				total -= billet7;
			} else if(total%billet6 == 0){
				num6++;
				total -= billet6;
			} else if(total%billet5 == 0){
				num5++;
				total -= billet5;
			} else if(total%billet4 == 0){
				num4++;
				total -= billet4;
			} else if(total%billet3 == 0){
				num3++;
				total -= billet3;
			} else if(total%billet2 == 0){
				num2++;
				total -= billet2;
			} else if(total%billet1 == 0){
				num1++;
				total -= billet1;
			}
			
		}
		
		/******* Guardamos y concatenamos en una variable cuantos billetes necesitamos *******/
		
		if(num7 !=0) {
			resultado += num7+ " de 500€\n"
		}
		if(num6 !=0) {
            resultado += num6+ " de 200€\n"		
        }
		if(num5 !=0) {
            resultado += num5+ " de 100€\n"		
        }
		if(num4 !=0) {
            resultado += num4+ " de 50€\n"		
        }
		if(num3 !=0) {
            resultado += num3+ " de 20€\n"		
        }
		if(num2 !=0) {
            resultado += num2+ " de 10€\n"		
        }
		if(num1 !=0) {
            resultado += num1+ " de 5€\n"		
        }


alert("*** Billetes necesarios ***\n\n" +resultado); // Mostramos los biiletes necesarios para pagar el pedido

}

