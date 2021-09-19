import React from "react";
import { useAppSelector } from "../redux/hooks";

const MealListPage = () => {
  const categories = useAppSelector(state => state.categories);
  return <div>{JSON.stringify(categories)}</div>;
};

export default MealListPage;
