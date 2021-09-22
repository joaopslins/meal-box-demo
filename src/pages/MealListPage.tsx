import React from "react";
import { useAppSelector } from "../redux/hooks";
import CategorySection from "../components/CategorySection";
import BoxWidget from "../components/BoxWidget";

const MealListPage = () => {
  const categoriesIds = useAppSelector(state => state.ui.categories);

  return (
    <div>
      {categoriesIds?.map(id => (
        <CategorySection key={id} id={id} />
      ))}
      <BoxWidget />
    </div>
  );
};

export default MealListPage;
