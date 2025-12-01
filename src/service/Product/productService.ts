import { apiClient } from "../api";
import { ProductPayload } from "./types/productPayload";

export async function getProductCategory() {
  const response = await apiClient.get<ProductPayload>('/store/products', {
    params: {
      region_id: 'reg_01KBC2E8Z90MQ2QH8STFC7288P',
      category_id: 'pcat_01KBC10YSH5F1T86V5JRCNDP1B'
    }
  });
  return response.products;
}
