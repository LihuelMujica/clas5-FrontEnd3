import React from "react";
import ListaDeClientes from "./components/ListaDeClientes"

const listaDeClientes = [
  {
      nombre:"Firulais",
      edad:"11",
      sexo:"Macho",
      raza:"Pastor alemán",
      tamaño:"Grande"
  },
  {
    nombre:"Firulais",
    edad:"11",
    sexo:"Macho",
    raza:"Pastor alemán",
    tamaño:"Grande"
},
{
  nombre:"Firulais",
  edad:"11",
  sexo:"Macho",
  raza:"Pastor alemán",
  tamaño:"Grande"
}
]

function App() {
  return (
    <div className="App">
      <h1>Hola</h1>
      <ListaDeClientes listaClientes={listaDeClientes}></ListaDeClientes>
    </div>
  );
}

export default App;
