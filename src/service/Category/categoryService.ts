import api from "../api";

export async function getCategories() {
  try {
    const payload = await api.get('/store/product-categories');
    return payload.data.product_categories;
  } catch (error) {
    console.log("Error fetching categories:", error);
  }
}