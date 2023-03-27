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

let catalogo= [
    {
      marca: "Mouse Logitech",
      modelo: "Lightsync G203",
      precio: 8000
    },
    {
      marca: "Teclado Soul",
      modelo: "XK800 QWERTY",
      precio: 4000
    },
    {
      marca: "Auriculares Hyperx",
      modelo: "CLoud II",
      precio: 10000
    }
  ];

  let catalogoServicios =[
    {
        tipo: "Matenimiento",
        precio: 1500
    },
    {
        tipo: "Actualizacion de Hardware",
        precio: 2000
    },
    {
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
    break;
  case "2":
    alert("Seleccionaste Servicios");
    mostrarCatalogoServicios();
    break;
  
  default:
    alert("La opcion que intentas elegir es incorrecta");
    break;
}