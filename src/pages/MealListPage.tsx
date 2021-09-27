import React from "react";
import { useAppSelector } from "../redux/hooks";
import CategorySection from "../components/CategorySection";
import { selectCategoriesIds } from "../redux/selectors";

const MealListPage = () => {
  const categoriesIds = useAppSelector(selectCategoriesIds);

  return (
    <div>
      {categoriesIds?.map(id => (
        <CategorySection key={id} id={id} />
      ))}
    </div>
  );
};

export default MealListPage;
