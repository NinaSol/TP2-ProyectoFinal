class DataMemDAO {

    constructor() {
        //this.data =[{ id: '1', nombre: 'juan', edad: 23 }, { id: '2', nombre: 'ana', edad: 21 },];
        this.data =[{ id: '1', nombre: 'juan', dni: 23, edad:19, email: "juan@gmail.com", peliculas:['star wars','titanic']},
        { id: '2', nombre: 'ana', dni: 643, edad:22, email: "ana@gmail.com", peliculas:['star wars']},
        { id: '3', nombre: 'maria', dni: 333, edad:17, email: "maria@gmail.com", peliculas:[]}];
    }


    // obtenerMayoresDeEdad = async _ => {
    //     let array = this.data.filter(e => e.edad > 18)
    //     if (array.length == 0) {
    //         array = this.data;
    //     }
    //     return array
    // }

    getData = async id => {
        return this.data.find(d => d.id == id)    
    }

    getAllData = async ()  => {
        try {
            return this.data
        }
        catch {
            return []
        }
    }

    saveData = async d => {
        
        const id = parseInt(this.data[this.data.length-1].id) + 1;
        d.id = String(id)

        this.data.push(d)

        return d    
    }

    updateData = async (d,id) => {
        d.id = id
        const index = this.data.findIndex(d => d.id == id)
        this.data.splice(index, 1, d)

        return d    
    }

    deleteData = async id => {
        const index = this.data.findIndex(d => d.id == id)

        const d = this.data.splice(index, 1)[0]
        
        return d    
    }
}

export default DataMemDAO
