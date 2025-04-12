import { CategoryModel } from "../config/data-source";
import { Category } from "../entities/Category";

export const getCategoryById = async (id: number): Promise<Category | null> => {
  return await CategoryModel.findOneBy({ id });
};

export const createCategoryIfNotExists = async (name: string): Promise<Category> => {
  let category = await CategoryModel.findOneBy({ name });
  
  if (!category) {
    category = CategoryModel.create({ name });
    await CategoryModel.save(category);
  }

  return category;
};

export const getAllCategories = async (): Promise<Category[]> => {
  return await CategoryModel.find();
};