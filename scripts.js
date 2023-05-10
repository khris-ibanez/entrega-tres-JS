let presupuesto = 0;
let gastos = [];

function agregarGasto() {
  let nombre = document.getElementById("nombre").value;
  let valor = parseInt(document.getElementById("valor").value);
  if (nombre !== "" && !isNaN(valor) && valor > 0) {
    gastos.push({ nombre: nombre, valor: valor });
    actualizarTablaGastos();
    document.getElementById("nombre").value = "";
    document.getElementById("valor").value = "";
  } else {
    alert("Ingrese un nombre y un valor válido.");
  }
}

function borrarGasto(index) {
  gastos.splice(index, 1);
  actualizarTablaGastos();
}

function actualizarTablaPresupuesto() {
  let tabla = document.getElementById("tabla-presupuesto");
  tabla.innerHTML =
    "<tr><th>Presupuesto</th><th>Gastos</th><th>Saldo</th></tr><tr><td>" +
    presupuesto +
    "</td><td>" +
    calcularGastos() +
    "</td><td>" +
    (presupuesto - calcularGastos()) +
    "</td></tr>";
}

function actualizarTablaGastos() {
  let tabla = document.getElementById("tabla-gastos");
  let filas = "<tr><th>Nombre</th><th>Valor</th><th>Borrar</th></tr>";
  for (let i = 0; i < gastos.length; i++) {
    filas +=
      "<tr><td>" +
      gastos[i].nombre +
      "</td><td>" +
      gastos[i].valor +
      "</td><td><button onclick='borrarGasto(" +
      i +
      ")'>Borrar</button></td></tr>";
  }
  tabla.innerHTML = filas;
  actualizarTablaPresupuesto();
}

function calcularGastos() {
  let suma = 0;
  for (let i = 0; i < gastos.length; i++) {
    suma += gastos[i].valor;
  }
  return suma;
}

function calcularPresupuesto() {
  if (parseInt(document.getElementById("presupuesto").value) > 0) {
    presupuesto = parseInt(document.getElementById("presupuesto").value);
  } else {
    alert("Ingrese un presupuesto válido.");
  }

  if (!isNaN(presupuesto) && presupuesto > 0) {
    actualizarTablaPresupuesto();
    document.getElementById("presupuesto").value = "";
  } else {
    alert("Ingrese un presupuesto válido.");
  }
}
