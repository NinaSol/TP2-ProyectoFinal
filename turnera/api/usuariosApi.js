import config from "../config.js";
import DataFactory from '../model/DAO/dataFactory.js'

class ApiUsuarios{


    constructor(){
        this.usuariosModel = DataFactory.get(config.DB);
    }


    obtenerMayores = async _ => {
        // let array = await this.usuariosModel.getAllData();
        //return await this.usuariosModel.obtenerMayoresDeEdad();
        let clientes = await this.usuariosModel.getAllData();

        let clientesMayores = clientes.filter(e => e.edad >= 18)
        if (clientesMayores.length == 0) {
            clientesMayores = []
        }

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

    actualizarUsuario = async(usuario,id) =>{
        return this.usuariosModel.updateData(usuario, id);
    }

    eliminarUsuario = async id =>{
        return await this.usuariosModel.deleteData(id);
    }

}

export default ApiUsuarios