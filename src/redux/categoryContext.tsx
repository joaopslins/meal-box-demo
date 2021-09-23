import React, { useContext } from "react";

export const CategoryContext = React.createContext<number | null>(null);

export const useCategoryContext = () => {
  let category = useContext(CategoryContext);

  if (category == null) {
    throw new Error("useCategoryContext used without a provider.");
  }

  return category;
};
