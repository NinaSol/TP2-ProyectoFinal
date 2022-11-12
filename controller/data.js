import DataService from '../service/data.js'


class ControladorData {

    constructor() {
        this.dataService = new DataService()
    }

    getData = async (req,res) => {
        const { id } = req.params
        res.json(  await this.dataService.getData(id) )
    }

    saveData = async (req,res) => {
        const data = req.body
        res.json(await this.dataService.saveData(data))
        //res.redirect('/')
    }

    updateData = async (req,res) => {
        const { id } = req.params
        const data = req.body
    
        res.json(await this.dataService.updateData(data,id))
    }

    deleteData = async (req,res) => {
        const { id } = req.params
    
        res.json(await this.dataService.deleteData(id))
    }
}

export default ControladorData