window.addEventListener("load", function() {
	var boton = document.getElementById("calcular");
	boton.addEventListener("click", function() {
		var tipoCambio = parseFloat(document.getElementById("numero1").value);
		var montoSoles = parseFloat(document.getElementById("numero2").value);

		var resultado = document.getElementById("resultado");
		resultado.innerHTML = "<p>El resultado es " + division(montoSoles,tipoCambio) + "</p>";
	});

	function division(numero2, numero1) {
	   return (numero2 /numero1).toFixed(2);
	}
});