import config from '../config.js'
import DataFactory from '../model/DAO/usuarios/dataFactory.js'
import ServiceTicket from '../service/ticket.js'

class ServiceData {
    constructor() {
        this.usuariosModel = DataFactory.get(config.DB);
        this.ticket = new ServiceTicket();
    }


    obtenerPeliculas = async (id) =>{
        const user = await this.usuariosModel.getData(id)
        return user.peliculas;
    }

    obtenerPorNombre = async (nombre) =>{
        let clientes = await this.usuariosModel.getAllData();
        let encontrado;
         for(let i =0; i< clientes.length ; i++){
            if(clientes[i].nombre==nombre){encontrado = clientes[i]}
        }
        return encontrado;
    }
  
    obtenerMenores= async _ => {
        const clientes = await this.usuariosModel.getAllData();

        const clientesMayores = clientes.filter(e => e.edad < 18)
        return clientesMayores;
    }

    obtenerMayores = async _ => {
        const clientes = await this.usuariosModel.getAllData();

        const clientesMayores = clientes.filter(e => e.edad >= 18)
        return clientesMayores;
    }


    obtenerMejor = async _ => {
        try {
            let clientes = await this.usuariosModel.getAllData();

            let max = clientes[0].peliculas.length
            let cant = clientes.length
            let mejor_cliente =clientes[0];
        
            for (let i = 0; i < cant; i++) {
                if (clientes[i].peliculas.length > max) {
                    max = clientes[i].peliculas.length
                    mejor_cliente = clientes[i];
                }
            }
            return { mejor_cliente }
        } catch (error) {
            console.log('error en el obtener mejor cliente ' + error);
        }
    }

    obtenerUsuarios = async id=>{
        return id? await this.usuariosModel.getData(id) : await this.usuariosModel.getAllData();
    }

    guardarUsuario= async usuario =>{
        return await this.usuariosModel.saveData(usuario);
    }

    
    agregarPelicula = async(data,id) =>{
       //idFuncion, idUsuario, idPelicula
        //this.ticket.crearTicket(data)
        return this.usuariosModel.updateData(data, id)
    }

    actualizarUsuario = async(data,id) =>{
        return this.usuariosModel.updateData(data, id);
    }

    eliminarUsuario = async id =>{
        return await this.usuariosModel.deleteData(id);
    }

}

export default ServiceData