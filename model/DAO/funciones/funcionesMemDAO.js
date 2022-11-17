
class FuncionesMemDAO{

    constructor(){
        this.funciones =
        [
            {
            id: 1,
            nro:1,
            idPelicula: 1,
            capacidad: 15,
            capacidadMax: 20,
            fecha: "02-11-22",
            idUsuarios: ["Pablo", "Sol"]
            },

            {
            id: 2,
            nro:2,
            idPelicula: 2,
            capacidad: 5,
            capacidadMax: 20,
            fecha: "22-11-22",
            idUsuarios: ["Pablo", "Sol"]
            },
        ]
        this.cantfunciones = 4
    }
   
    getFunciones = async ()  => {      
        return {funciones: this.funciones}
    }

     getFuncion = async id => {
        return this.funciones.find(funcion => funcion.id == id)    
    }
    
     saveFuncion = async funcion => {
        funcion.nro = parseInt(funcion.nro)
        funcion.capacidad = parseInt(funcion.capacidad)
        funcion.capacidadMax = parseInt(funcion.capacidadMax)
        const id = parseInt(this.funciones[this.funciones.length-1].id) + 1
        funcion.id = String(id)
    
        this.funciones.push(funcion)
    
        return funcion    
    }
    
    updateFuncion = async (funcion,id) => {
        /* Actualización total */    
        funcion.id = id
        const index = this.funciones.findIndex(f => f.id == id)
        this.funciones.splice(index, 1, funcion)
    
        return funcion    
    }
    
    deleteFuncion = async id => {
        const index = this.funciones.findIndex(f => f.id == id)
        const funcion = this.funciones.splice(index, 1)[0]
        return funcion    
    }


    getFuncionesPorFecha =  async fecha => {
        console.log(fecha)
        return this.funciones.find(funcion => funcion.fecha == fecha) 
    }
  

}



export default FuncionesMemDAO;