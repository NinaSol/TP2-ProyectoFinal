import config from '../config.js'
import DataFactory from '../model/DAO/usuarios/dataFactory.js'
import TicketFactoryDAO from '../model/DAO/tickets/ticketsFactory.js';


class ServiceData {
    constructor() {
        this.usuariosModel = DataFactory.get(config.DB);
        this.ticketDAO = TicketFactoryDAO.get(config.DB);
    }

    validarAdm = async (user) =>{
        const arrayUsers = await this.usuariosModel.getAllData()
        const encontrado = arrayUsers.filter( u => u.password == user.password && u.isAdmin==true)
        return encontrado[0]
    }

    validarUsuario = async (user) =>{
        const arrayUsers = await this.usuariosModel.getAllData()
        const encontrado = arrayUsers.filter( u => u.email === user.email && u.password === user.password)
        return encontrado[0]
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


    agregarPelicula = async (id, pelicula) => {
        //idFuncion, idUsuario, idPelicula
        //this.ticket.crearTicket(data)
        let ticket = {
            "idFuncion": 3,
            "idUsuario": id,
            "peliculas": pelicula,
        }

        await this.ticketDAO.crearTicket(ticket);
        return this.usuariosModel.updateData(pelicula, id)

    }

    actualizarUsuario = async(data,id) =>{
        return this.usuariosModel.updateData(data, id);
    }

    eliminarUsuario = async id =>{
        return await this.usuariosModel.deleteData(id);
    }

}

export default ServiceData