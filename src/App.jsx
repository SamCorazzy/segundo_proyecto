
//var saludo= "Hola a todos";esta es una variable de tipo string
//var saludo= 6;esta es una variable de tipo numerico
//var saludo= true;esta es una variable de tipo booleano
//var saludo= "Hola a todos";esta es una variable de tipo string
//var saludo= null; esta es una variable de tipo nula
//var saludo= undefined;esta es una variable de tipo indefinida
//var saludo= ["Hola", " a todos ", 2, true, null, undefined, 17];esta es una variable de tipo arreglo
/*var saludo= {
  uno: "Hola",
  dos: " a todos",
  tres: 2,
  cuatro: true,
  cinco: undefined,
  seis: 17,
};esta es una variable de tipo objeto*/
// var textoVar = "texto var 1";
// let textoLet = "texto let 1";
// const textoConst = "texto const 1";

// textoVar = "texto var 2";
// textoLet = "texto let 2";
// //textoConst = "texto const 2";

// var textoVar = "texto var 3";
// //let textoLet = "texto let 3";
// //const textoConst = "texto const 3";

// var saludo= ["Hola", " a todos ", 2, "true", null, undefined, 17];
// //console.log(saludo);

// if(true){
//   var textoVar = "texto var 4";
//   let textoLet = "texto let 4";
//   const textoConst = "texto const 4";
//   console.log(textoLet);
//   console.log(textoConst);
// }



function App() {
  const persona = {
    nombre: "Samuel",
    apellidoPaterno: "Perez",
    apellidoMaterno: "Reyes",
    edad: 22,
  };

  const { nombre, apellidoMaterno, apellidoPaterno, edad } = persona;

  // const contactopersona = {
  //   telefono: "281244624",
  //   email: "cora@gmail.com",
  //   empresa: "Anguiano",
  // }

  //const nuevotelefono = "2871248888";

  //const infopersona = { ...persona, ...contactopersona, puesto: "estudiante", telefono: nuevotelefono };

  //console.log(persona);
  //console.log(contactopersona);
  //console.log(infopersona);
  
  const frutas = ["manzana", "naranja", "fresa", "pera"];
  const vegetales = ["lechuga", "zanahoria", "alcachofa"];
  const carne = ["res", "cerdo", "pollo", "pescado"];

  const alimentos = [...frutas, ...vegetales,...carne, "vhjgf"];

  console.log(vegetales);
  console.log(frutas);
  console.log(carne);
  console.log(alimentos);
  
  
  return (<div className="App">
    <h1>
      {`Soy ${nombre} ${apellidoPaterno} 
      ${apellidoMaterno} y tengo ${edad} 
      años `}</h1>;
  </div>
  )
}

export default App;
