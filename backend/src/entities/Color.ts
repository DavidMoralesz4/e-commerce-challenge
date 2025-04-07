import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Color {
  @PrimaryGeneratedColumn()
  declare id: number;

  @Column({ type: "varchar", unique: true })
  declare name: string;
}
