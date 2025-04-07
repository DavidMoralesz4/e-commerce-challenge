import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
  OneToMany,
} from "typeorm";
import { Category } from "./Category";
import { Size } from "./Size";
import { Color } from "./Color";
import { Image } from "./Images";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  declare id: number;

  @Column({type: "varchar"})
  declare name: string;

  @Column("decimal", { precision: 10, scale: 2 })
  declare price: number;

  @Column({ type: "int" }) // o el tipo que se ajuste (ej: 'numeric' si usas decimales)
  declare stock: number;

  @ManyToOne(() => Category, (category) => category.products)
  declare category: Category;

  @OneToMany(() => Image, (image) => image.product, { cascade: true })
  declare images: Image[];

  @ManyToMany(() => Size)
  @JoinTable({
    name: "product_sizes",
    joinColumn: { name: "product_id" },
    inverseJoinColumn: { name: "size_id" },
  })
  declare sizes: Size[];

  @ManyToMany(() => Color)
  @JoinTable({
    name: "product_colors",
    joinColumn: { name: "product_id" },
    inverseJoinColumn: { name: "color_id" },
  })
  declare colors: Color[];
}
