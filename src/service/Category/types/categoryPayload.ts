type CategoryData = {
  id: string;
  name: string;
  description: string;
}

export type CategoryResponse = {
  product_categories: CategoryData[]
}