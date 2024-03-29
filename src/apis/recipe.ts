export interface Recipe {
  rating: number;
  photo_hash: string;
  on_favorites: boolean;
  photo: string;
  uid: string;
  scale: string;
  ingredients: string;
  is_pinned: boolean;
  source: string;
  total_time: string;
  hash: string;
  description: string;
  source_url: string;
  difficulty: string;
  on_grocery_list: boolean;
  in_trash: boolean;
  directions: string;
  categories: string[];
  photo_url: string;
  cook_time: string;
  name: string;
  created: Date;
  notes: string;
  photo_large: null;
  image_url: string;
  prep_time: string;
  servings: string;
  nutritional_info: string;
}
