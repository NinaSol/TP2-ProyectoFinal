import express from 'express'
import dataController from '../controller/data.js'


export class DataRouter {
    constructor() {
        this.router = express.Router()
        this.dataController = new dataController()
    }

    start() {
        this.router.get('/mayores', this.dataController.getMayores)
        this.router.get('/mejorcliente', this.dataController.getMejor)
        this.router.get('/:id?', this.dataController.getData)
        this.router.post('/', this.dataController.saveData)
        this.router.put('/:id', this.dataController.updateData)
        this.router.delete('/:id', this.dataController.deleteData)

        return this.router
    }
}

