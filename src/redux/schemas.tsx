import { schema } from "normalizr";

export const mealSchema = new schema.Entity("meals");

export const categorySchema = new schema.Entity("categories", {
  meals: [mealSchema]
});
