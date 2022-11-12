class DataMemDAO {

    constructor() {
        this.data =[{ id: '1', nombre: 'juan', edad: 23 }, { id: '2', nombre: 'ana', edad: 21 },];
    }

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
        d.edad = parseInt(d.edad)
        
        const id = parseInt(this.data[data.length-1].id) + 1
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
