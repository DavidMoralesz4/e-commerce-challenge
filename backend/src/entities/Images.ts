import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Product } from './Product';

@Entity()
export class Image {
  @PrimaryGeneratedColumn()
  declare id: number;

  @Column('text')
  declare url: string;

  @ManyToOne(() => Product, (product) => product.images, { onDelete: 'CASCADE' })
  declare product: Product;
}
