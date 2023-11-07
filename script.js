const monedaEl_one = document.getElementById('moneda-uno');
const monedaEl_two = document.getElementById('moneda-dos');
const cantidadEl_one = document.getElementById('cantidad-uno');
const cantidadEl_two = document.getElementById('cantidad-dos');
const cambioEl = document.getElementById('cambio');
const tazaEl = document.getElementById('taza');



function calculate(){
    const moneda_one = monedaEl_one.value;
    const moneda_two = monedaEl_two.value;

    if (moneda_one !== "SELECCIONE" && moneda_two !== "SELECCIONE") {
        fetch(`https://api.exchangerate-api.com/v4/latest/${moneda_one}`)
        .then(res => res.json() )
        .then(data => {
            const taza = data.rates[moneda_two];
            
            cambioEl.innerText = `1 ${moneda_one} = ${taza} ${moneda_two}`;
    
            cantidadEl_two.value = (cantidadEl_one.value * taza).toFixed(2);
        });
    }
}

//Event listeners
monedaEl_one.addEventListener('change', calculate);
cantidadEl_one.addEventListener('input', calculate);
monedaEl_two.addEventListener('change', calculate);
cantidadEl_two.addEventListener('input', calculate);

taza.addEventListener('click', () =>{
    const temp = monedaEl_one.value;
    monedaEl_one.value = monedaEl_two.value;
    monedaEl_two.value = temp;
    calculate();
} );


calculate();


// Función para agregar cotización al DOM
function agregarCotizacion(nombre, compra, venta) {
    const cotizacionElement = document.createElement('div');
    cotizacionElement.classList.add('cotizacion');
    cotizacionElement.innerHTML = `<h2>${nombre}</h2><p>Compra: ${compra}<br>Venta: ${venta}</p>`;
    document.getElementById('cotizaciones-dolar').appendChild(cotizacionElement);
}

// Dólares
fetch("https://dolarapi.com/v1/dolares/oficial")
  .then(response => response.json())
  .then(data => {
    agregarCotizacion('USD Oficial', data.compra, data.venta);
  });

fetch("https://dolarapi.com/v1/dolares/blue")
  .then(response => response.json())
  .then(data => {
    agregarCotizacion('USD Blue', data.compra, data.venta);
  });

fetch("https://dolarapi.com/v1/dolares/bolsa")
  .then(response => response.json())
  .then(data => {
    agregarCotizacion('USD Bolsa', data.compra, data.venta);
  });

fetch("https://dolarapi.com/v1/dolares/contadoconliqui")
  .then(response => response.json())
  .then(data => {
    agregarCotizacion('USD Contado con Liqui', data.compra, data.venta);
  });

fetch("https://dolarapi.com/v1/dolares/solidario")
  .then(response => response.json())
  .then(data => {
    agregarCotizacion('USD Solidario', data.compra, data.venta);
  });

fetch("https://dolarapi.com/v1/dolares/tarjeta")
  .then(response => response.json())
  .then(data => {
    agregarCotizacion('USD Tarjeta', data.compra, data.venta);
  });

fetch("https://dolarapi.com/v1/dolares/mayorista")
  .then(response => response.json())
  .then(data => {
    agregarCotizacion('USD Mayorista', data.compra, data.venta);
  });

// Otras monedas

fetch("https://dolarapi.com/v1/cotizaciones/eur")
  .then(response => response.json())
  .then(data => {
    agregarCotizacion('EUR', data.compra, data.venta);
  });

fetch("https://dolarapi.com/v1/cotizaciones/brl")
  .then(response => response.json())
  .then(data => {
    agregarCotizacion('BRL', data.compra, data.venta);
  });

fetch("https://dolarapi.com/v1/cotizaciones/clp")
  .then(response => response.json())
  .then(data => {
    agregarCotizacion('CLP', data.compra, data.venta);
  });

fetch("https://dolarapi.com/v1/cotizaciones/uyu")
  .then(response => response.json())
  .then(data => {
    agregarCotizacion('UYU', data.compra, data.venta);
  });
