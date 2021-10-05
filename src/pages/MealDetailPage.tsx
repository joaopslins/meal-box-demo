import React from "react";
import { useParams, Link } from "react-router-dom";

const MealDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <Link to="/">{id}</Link>
    </div>
  );
};

export default MealDetailPage;
