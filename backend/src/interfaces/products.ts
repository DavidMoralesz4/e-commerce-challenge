export interface IProducts {
    name: string;
    price: number;
    stock: number;
    category: number; // ID de la categoría
    images?: string[]; // URLs de imágenes
    sizes?: number[]; // IDs de tallas
    colors?: number[]; // IDs de colores
}