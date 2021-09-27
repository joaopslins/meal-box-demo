import React from "react";
import ReactStars from "react-stars";
import { useMealRater } from "../redux/hooks";

interface Props {
  mealId: number;
  size?: number;
}

const MealRater = ({ mealId, size }: Props) => {
  const { rating, setRating } = useMealRater(mealId);

  return (
    <ReactStars count={5} value={rating} size={size} onChange={setRating} />
  );
};

export default MealRater;
