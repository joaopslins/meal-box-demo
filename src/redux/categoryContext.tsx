import React, { useContext } from "react";

export const CategoryContext = React.createContext<number | null>(null);

export const useCategoryContext = () => {
  return useContext(CategoryContext);
};
