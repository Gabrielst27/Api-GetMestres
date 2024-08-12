import { AppDataSource } from "../data-source"
import { Request, Response, NextFunction } from "express"
import { Repository } from "typeorm"
import { BaseNotification } from "../entity/BaseNotification"

export abstract class BaseController<T> extends BaseNotification{

    private _repository:Repository<T>

    constructor(entityName: any) {
        super()
        this._repository = AppDataSource.getRepository<T>(entityName)
    }

    async all() {
        return this._repository.find()
    }

    async one(request: Request) {
        return this._repository.findOne(request.params.id)
    }

    async save(model: any) {
        if (model.uid){
            let _modelInDB = await this._repository.findOne(model.uid)
            if (_modelInDB){
                Object.assign(_modelInDB, model)
            }
        }

        if (this.valid()){
            return this._repository.save(model)
        } else{
            return{
                status: 400,
                errors: this.allNotifications
            }
        }
    }

    async remove(request: Request) {
        let model:any = await this._repository.findOne(request.params.id)
        if (model){
            model.deleted = true
        }

        return await this._repository.save(model)
    }

}