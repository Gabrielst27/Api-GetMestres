import { Request } from 'express'
import { Category } from "../entity/Category";
import { BaseController } from "./BaseController";

export class CategoryController extends BaseController<Category>{

    constructor(){
        super(Category)
    }

    async save(request: Request){
        let _category = <Category>request.body
        super.isRequired(_category.name, "O nome da categoria é obrigatório")
        super.isRequired(_category.description, "A descrição da categoria é obrigatória")

        return super.save(_category)
    }
}