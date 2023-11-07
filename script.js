
document.addEventListener('DOMContentLoaded', function() {
  const monedaUno = document.getElementById('moneda-uno');
  const monedaDos = document.getElementById('moneda-dos');
  const cantidadUno = document.getElementById('cantidad-uno');
  const cantidadDos = document.getElementById('cantidad-dos');

  const API_URL = 'https://api.exchangerate-api.com/v4/latest/USD';

  function actualizarCambio() {
      const moneda1 = monedaUno.value;
      const moneda2 = monedaDos.value;

      fetch(API_URL)
          .then(response => response.json())
          .then(data => {
              const tipoDeCambio = data.rates[moneda2] / data.rates[moneda1];
              cantidadDos.value = (cantidadUno.value * tipoDeCambio).toFixed(2);
          });
  }

  monedaUno.addEventListener('change', actualizarCambio);
  monedaDos.addEventListener('change', actualizarCambio);
  cantidadUno.addEventListener('input', actualizarCambio);
});

//Add Listen
document.getElementById('intercambiar').addEventListener('click', () => {
  const monedaUnoValue = document.getElementById('moneda-uno').value;
  const monedaDosValue = document.getElementById('moneda-dos').value;

  document.getElementById('moneda-uno').value = monedaDosValue;
  document.getElementById('moneda-dos').value = monedaUnoValue;

  calculate();
});


// Función para agregar cotización Dólares
fetch("https://dolarapi.com/v1/dolares/oficial")
  .then(response => response.json())
  .then(data => {
    document.querySelector('#cotizacion-oficial .card-text').innerHTML = `Compra: ${data.compra}<br>Venta: ${data.venta}`;
  });

fetch("https://dolarapi.com/v1/dolares/blue")
  .then(response => response.json())
  .then(data => {
    document.querySelector('#cotizacion-blue .card-text').innerHTML = `Compra: ${data.compra}<br>Venta: ${data.venta}`;
  });

fetch("https://dolarapi.com/v1/dolares/bolsa")
  .then(response => response.json())
  .then(data => {
    document.querySelector('#cotizacion-bolsa .card-text').innerHTML = `Compra: ${data.compra}<br>Venta: ${data.venta}`;
  });

fetch("https://dolarapi.com/v1/dolares/contadoconliqui")
  .then(response => response.json())
  .then(data => {
    document.querySelector('#cotizacion-contado .card-text').innerHTML = `Compra: ${data.compra}<br>Venta: ${data.venta}`;
  });

fetch("https://dolarapi.com/v1/dolares/solidario")
  .then(response => response.json())
  .then(data => {
    document.querySelector('#cotizacion-solidario .card-text').innerHTML = `Compra: ${data.compra}<br>Venta: ${data.venta}`;
  });

fetch("https://dolarapi.com/v1/dolares/tarjeta")
  .then(response => response.json())
  .then(data => {
    document.querySelector('#cotizacion-tarjeta .card-text').innerHTML = `Compra: ${data.compra}<br>Venta: ${data.venta}`;
  });

fetch("https://dolarapi.com/v1/dolares/mayorista")
  .then(response => response.json())
  .then(data => {
    document.querySelector('#cotizacion-mayorista .card-text').innerHTML = `Compra: ${data.compra}<br>Venta: ${data.venta}`;
  });

  //OTRAS COTIZACIONES

  
  // Obtener cotización de EUR
fetch("https://dolarapi.com/v1/cotizaciones/eur")
.then(response => response.json())
.then(data => {
  document.querySelector('#cotizacion-eur .card-text').innerHTML = `Compra: ${data.compra}<br>Venta: ${data.venta}`;
});

// Obtener cotización de BRL
fetch("https://dolarapi.com/v1/cotizaciones/brl")
.then(response => response.json())
.then(data => {
  document.querySelector('#cotizacion-brl .card-text').innerHTML = `Compra: ${data.compra}<br>Venta: ${data.venta}`;
});

// Obtener cotización de CLP
fetch("https://dolarapi.com/v1/cotizaciones/clp")
.then(response => response.json())
.then(data => {
  document.querySelector('#cotizacion-clp .card-text').innerHTML = `Compra: ${data.compra}<br>Venta: ${data.venta}`;
});

// Obtener cotización de UYU
fetch("https://dolarapi.com/v1/cotizaciones/uyu")
.then(response => response.json())
.then(data => {
  document.querySelector('#cotizacion-uyu .card-text').innerHTML = `Compra: ${data.compra}<br>Venta: ${data.venta}`;
});
