export interface Category {
  id: number;
  name: string;
  meals: number[];
}

export interface Meal {
  id: number;
  name: string;
  image: string;
}

export interface CategoryAPI {
  data: {
    id: number;
    name: string;
    meals: {
      id: number;
      name: string;
      image: string;
    }[];
  };
}

export interface MyPlanAPI {
  data: {
    category: number;
    quantity: number;
  }[];
}
