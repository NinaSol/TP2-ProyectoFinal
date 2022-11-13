import ServiceFunciones from '../service/Funciones.js'


class ControladorFunciones {

    constructor() {
        this.funcionesService = new ServiceFunciones()
    }


    getFunciones = async (req,res) => {
        const { id } = req.params
        res.json(  await this.funcionesService.getFunciones(id) )
    }

    getFuncionesPorFecha = async (req,res) => {
        const { fecha } = req.params
        res.json( await this.funcionesService.getFuncionesPorFecha(fecha) )
    }

    getFuncionsMasVendida = async (req,res) => {
        res.json( await this.funcionesService.getFuncionMasVendida() )
    }

    getFuncionsmenosVendida = async (req,res) => {
        res.json( await this.funcionesService.getFuncionMenosVendida() )
    }


    saveFuncion = async (req,res) => {
        const funcion = req.body
        res.json(await this.funcionesService.saveFuncion(funcion))
        //res.redirect('/')
    }

    updateFuncion = async (req,res) => {
        const { id } = req.params
        const funcion = req.body
    
        res.json(await this.funcionesService.updateFuncion(funcion,id))
    }

    deleteFuncion = async (req,res) => {
        const { id } = req.params
    
        res.json(await this.funcionesService.deleteFuncion(id))
    }

    calcularCapacidad = async (req,res) => {
        console.log("en controlador calcular")
        const { nro } = req.params
        res.json( await this.funcionesService.calcularCapacidad(nro) )
    }
}

export default ControladorFunciones