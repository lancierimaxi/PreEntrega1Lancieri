let nombreUsuario= prompt ("Ingresa tu nombre");
alert("Bienvenido/a" + " "+ nombreUsuario);

let edad = prompt("Ingrese su edad");

if (edad>=18){
    alert("Bienvenido a Fury Tech");
}
else{
    alert("Usted no posee la edad para ingresar a este sitio");
}

let saldo = prompt("Ingrese su saldo en pesos argentinos")
console.log (saldo)

const catalogo= [
    {
      id:1,
      marca: "Mouse Logitech",
      modelo: "Lightsync G203",
      precio: 8000
    },
    {
      id:2,
      marca: "Teclado Soul",
      modelo: "XK800 QWERTY",
      precio: 4000
    },
    {
      id:3,
      marca: "Auriculares Hyperx",
      modelo: "CLoud II",
      precio: 10000
    }
  ];

const catalogoServicios =[
    {
        id:1,
        tipo: "Matenimiento",
        precio: 1500
    },
    {
        id:2,
        tipo: "Actualizacion de Hardware",
        precio: 2000
    },
    {
        id:3,
        tipo: "Instalacion de Sistema Operativo",
        precio: 1800
    }
  ]


function mostrarCatalogo() {
  console.log("Catalogo Productos");
  for (let i = 0; i < catalogo.length; i++) {
    console.log(`${i + 1}. ${catalogo[i].marca} ${catalogo[i].modelo} - $${catalogo[i].precio}`);
  }
}

function mostrarCatalogoServicios(){
  console.log("Catalogo Servicios");
  for (let i = 0; i < catalogoServicios.length; i++) {
    console.log(`${i + 1}. ${catalogoServicios[i].tipo} ${catalogoServicios[i].precio} `);
  }
}

let opcion = prompt("Selecciona que desea adquirir \n1-Productos \n2- Servicios");
switch (opcion) {
  case "1":
    alert("Seleccionaste Productos");
    mostrarCatalogo();
    const catalogo = [
      { id: 1, nombre: 'Mouse Logitech Lightsync G203', precio: 8000 },
      { id: 2, nombre: 'Teclado Soul XK800 QWERTY', precio: 4000 },
      { id: 3, nombre: 'Auricular Hyperx CLoud II', precio: 10000 },
    ];
    const catalogos = prompt("¿Qué producto desea? Recuerde ingresar el nombre tal cual ve en el catalogo")
    const productoBuscado = catalogo.find( c => c.nombre == catalogos );
        console.log(productoBuscado);
    break;
  case "2":
    alert("Seleccionaste Servicios");
    mostrarCatalogoServicios();
    const catalogoServicios = [
      { id: 1, nombre: 'Mantenimiento', precio: 1500 },
      { id: 2, nombre: 'Actualizacion de Hardware', precio: 2000 },
      { id: 3, nombre: 'Instalacion de Sistema Operativo', precio: 1800 },
    ];
    const catalogoServicioss = prompt("¿Qué servicio desea? Recuerde ingresar el nombre tal cual ve en el catalogo")
    const servicioBuscado = catalogoServicios.find( sc => sc.nombre == catalogoServicioss );
        console.log(servicioBuscado);
    break;
  
  default:
    alert("La opcion que intentas elegir es incorrecta");
    break;
}

