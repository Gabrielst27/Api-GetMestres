import { BaseEntity, Column, Entity } from "typeorm";

@Entity({ name: 'categories' })
export class Category extends BaseEntity{
    
    @Column({ type: 'varchar', length: 100 })
    name: string

    @Column({ type: 'varchar', length: 200 })
    description: string

}