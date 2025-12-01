import { apiClient } from "../api";
import { CategoryResponse } from "./types/categoryPayload";

export async function getCategories() {
  const response = await apiClient.get<CategoryResponse>('/store/product-categories');
  return response.product_categories;
}