import config from "../config.js";
import DataFactory from "../model/DAO/usuarios/dataFactory.js";
import ServiceFunciones from "../service/funciones.js";
import { usuarioDTO } from "../model/DTO/usuarios.js";
import ServiceTicket from "../service/ticket.js";
class ServiceData {
  constructor() {
    this.usuariosModel = DataFactory.get(config.DB);
    this.ticketService = new ServiceTicket();
    this.funcionService = new ServiceFunciones();
  }

  validarAdm = async (user) => {
    const arrayUsers = await this.usuariosModel.getAllData();
    const encontrado = arrayUsers.filter(
      (u) => u.password == user.password && u.isAdmin == true
    );
    return encontrado[0];
  };

  validarUsuario = async (user) => {
    const arrayUsers = await this.usuariosModel.getAllData();
    const encontrado = arrayUsers.filter(
      (u) => u.email === user.email && u.password === user.password
    );
    return encontrado[0];
  };

  obtenerPeliculas = async (id) => {
    const user = await this.usuariosModel.getData(id);
    return user.peliculas;
  };

  obtenerPorNombre = async (nombre) => {
    let clientes = await this.usuariosModel.getAllData();
    let encontrado;
    for (let i = 0; i < clientes.length; i++) {
      if (clientes[i].nombre == nombre) {
        encontrado = clientes[i];
      }
    }
    return encontrado;
  };

  obtenerMenores = async (_) => {
    const clientes = await this.usuariosModel.getAllData();

    const clientesMayores = clientes.filter((e) => e.edad < 18);
    return clientesMayores;
  };

  obtenerMayores = async (_) => {
    const clientes = await this.usuariosModel.getAllData();

    const clientesMayores = clientes.filter((e) => e.edad >= 18);
    return clientesMayores;
  };

  obtenerMejor = async (_) => {
    try {
      let clientes = await this.usuariosModel.getAllData();

      let max = clientes[0].peliculas.length;
      let cant = clientes.length;
      let mejor_cliente = clientes[0];

      for (let i = 0; i < cant; i++) {
        if (clientes[i].peliculas.length > max) {
          max = clientes[i].peliculas.length;
          mejor_cliente = clientes[i];
        }
      }
      return { mejor_cliente };
    } catch (error) {
      console.log("error en el obtener mejor cliente " + error);
    }
  };

  obtenerUsuarios = async (id) => {
    return id
      ? await this.usuariosModel.getData(id)
      : await this.usuariosModel.getAllData();
  };

  guardarUsuario = async (usuario) => {
    return await this.usuariosModel.saveData(usuario);
  };

  agregarPelicula = async (id, pelicula) => {
    const funcion = await this.funcionService.getFuncionesPorPelicula(
      pelicula.peliculas._id
    );
    const idFunc = funcion._id;

    let ticket = usuarioDTO(
      idFunc,
      id,
      pelicula.peliculas._id,
      pelicula.peliculas.fecha
    ); // lo uso para concatenar los id y mandar un unico objeto
    let resultado = "El usuario no existe";
    if (funcion.capacidad < funcion.capacidadMax) {
      await this.ticketService.crearTicket(ticket);
      await this.funcionService.restarCapacidad(idFunc);
      resultado = await this.usuariosModel.updateData(pelicula, id);
    }
    return resultado;
  };

  actualizarUsuario = async (data, id) => {
    return this.usuariosModel.updateData(data, id);
  };

  eliminarUsuario = async (id) => {
    return await this.usuariosModel.deleteData(id);
  };
}

export default ServiceData;
