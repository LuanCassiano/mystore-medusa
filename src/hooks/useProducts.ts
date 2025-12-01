import { useQuery } from "@tanstack/react-query";
import { getProductCategory } from "../service/Product/productService";

export function useProducts() {
  return useQuery({
    queryKey: ['products_category'],
    queryFn: async () => {
      const response = await getProductCategory();
      return response;
    }
  })
}
