import config from '../config.js'
import FuncionesFactoryDAO from '../model/DAO/funciones/funcionesFactory.js'


class ServiceFunciones {
    constructor() {
        this.funcionDAO = FuncionesFactoryDAO.get(config.DB)
    }

    getFunciones = async id => {
        return id? await this.funcionDAO.getFuncion(id) : await this.funcionDAO.getFunciones()
    }

    saveFuncion = async funcion => {
        console.log(funcion)
        return await this.funcionDAO.saveFuncion(funcion)
    }

    updateFuncion = async (funcion,id) => {
        return await this.funcionDAO.updateFuncion(funcion,id)
    }

    deleteFuncion = async id => {
        return await this.funcionDAO.deleteFuncion(id)
    }

    getFuncionesPorFecha = async (fecha) => {
        return await this.funcionDAO.getFuncionesPorFecha(fecha)
    }


    comprar = async (id) => {
        let funcion =  await this.funcionDAO.getFuncion(id)
        funcion.capacidad = funcion.capacidad -1;
        this.funcionDAO.updateFuncion(funcion,id)
    }

    getFuncionMasVendida = async ()  => {     
        let maxCant = -99;
        let cantidadActual = 0;
        let funcionMasVendida;
        let funciones = await this.funcionDAO.getFunciones()
        console.log(funciones)
        for (let index = 0; index < funciones.funciones.length; index++) {
            cantidadActual = funciones.funciones[index].capacidadMax - funciones.funciones[index].capacidad;
            if(cantidadActual > maxCant) {
                maxCant = cantidadActual
                funcionMasVendida = funciones.funciones[index]
            }
        }
        return funcionMasVendida;

    }

    getFuncionMenosVendida = async ()  => {      
        let  minCant = 99999999;
        let cantidadActual = 0;
        let funcionMenosVendida;
        let funciones = await this.funcionDAO.getFunciones()
        for (let index = 0; index < funciones.funciones.length; index++) {
            cantidadActual = funciones.funciones[index].capacidadMax - funciones.funciones[index].capacidad;
            if(cantidadActual < minCant) {
                minCant = cantidadActual
                funcionMenosVendida = funciones.funciones[index]
            }
        }
        return funcionMenosVendida;

    }

    calcularCapacidad = async (nro) => { 
        let funciones = await this.funcionDAO.getFunciones()
        let funcion = funciones.funciones.find(funcion => funcion.nro == nro)
        let capActual = funcion.capacidadMax - funcion.capacidad;
        return `La capacidad actual de la función nro ${nro} es ${capActual}`
        
    }


}

export default ServiceFunciones