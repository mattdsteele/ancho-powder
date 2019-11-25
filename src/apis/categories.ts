export interface CategoriesResponse {
  result: Result[];
}

export interface Result {
  name: string;
  uid: string;
  parent_uid: null;
  order_flag: number;
}
