import config from "../config.js";
import DataFactory from '../model/DAO/dataFactory.js'

class ApiUsuarios{


    constructor(){
        this.usuariosModel = DataFactory.get(config.DB);
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