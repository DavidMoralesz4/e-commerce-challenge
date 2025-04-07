import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Product } from "./Product";

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  declare id: number;

  @Column({ type: "varchar" }) // 👈 tipo explícito
  declare name: string;

  @OneToMany(() => Product, (product) => product.category)
  declare products: Product[];
}
