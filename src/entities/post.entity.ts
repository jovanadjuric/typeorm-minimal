import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number

  @CreateDateColumn()
  dateCreated: Date

  @UpdateDateColumn()
  dateUpdated: Date

  @Column()
  title: string

  @Column({ nullable: true })
  description: string | null
}
