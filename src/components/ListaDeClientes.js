import React from "react";
import Perro from "./Perro";

class ListaDeClientes extends React.Component {
  render() {
    return (
      <div>
        <h1>Clientes caninos de Veterinaria</h1>
        <ul>
            {this.props.listaClientes.map(({ nombre, edad, sexo, raza, tamaño}) => (
                <li><Perro nombre={nombre} edad={edad} sexo={sexo} raza={raza} tamaño={raza}></Perro></li>
            ))}
        </ul>
      </div>
    );
  }
}

export default ListaDeClientes;