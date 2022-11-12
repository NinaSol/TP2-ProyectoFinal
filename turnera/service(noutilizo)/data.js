import config from '../config.js'
import DataFactoryDAO from '../model/DAO/dataFactory.js'


class ServiceData {
    constructor() {
        this.dataDAO = DataFactoryDAO.get(config.DB)
    }

    getData = async id => {
        return id? await this.dataDAO.getData(id) : await this.dataDAO.getAllData()
    }

    saveData = async data => {
        return await this.dataDAO.saveData(data)
    }

    updateData = async (data,id) => {
        return await this.dataDAO.updateData(data,id)
    }

    deleteData = async id => {
        return await this.dataDAO.deleteData(id)
    }
}

export default ServiceData