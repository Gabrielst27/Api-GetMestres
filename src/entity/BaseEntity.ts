import { Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

export abstract class BaseEntity{

    @PrimaryGeneratedColumn("uuid")
    uid: string

    @Column({ default: true })
    active: boolean

    @Column({ default: false })
    deleted: boolean

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date
}