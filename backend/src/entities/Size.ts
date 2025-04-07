import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("sizes")
export class Size {
  @PrimaryGeneratedColumn()
  declare id: number;

  @Column({ type: "varchar" }) // 👈 FORZAMOS el tipo
  declare name: string;
}
