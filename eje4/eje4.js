window.addEventListener("load", function() {
	var boton = document.getElementById("calcular");
	boton.addEventListener("click", function() {
		var precio = parseFloat(document.getElementById("numero1").value);
		var cantidad = parseFloat(document.getElementById("numero2").value);
		var descuento = parseFloat(document.getElementById("numero3").value);

		var resultado = document.getElementById("resultado");
		resultado.innerHTML = "<p>El resultado es " + descuent(precio,cantidad,descuento) + "</p>";
	});

	function descuent(numero1, numero2,numero3) {
		for (numero1==true && numero==true && numero3==false) {
	        return ((numero1 *numero2)*numero3/100).toFixed(2);
	    }
	    }
	}
});