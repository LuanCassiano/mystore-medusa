import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../service/Category/categoryService";

export function useCategories() {
  return useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const categories = await getCategories();
      return categories;
    },
  })
}
