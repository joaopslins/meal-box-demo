import React from "react";
import ReactStars from "react-stars";
import { useMealRater } from "../../redux/hooks";
import { useTheme } from "styled-components";

interface Props {
  mealId: number;
  size?: number;
}

const MealRater = ({ mealId, size }: Props) => {
  const { rating, setRating } = useMealRater(mealId);
  const {
    colors: { primary500 }
  } = useTheme();

  return (
    <ReactStars
      count={5}
      value={rating}
      size={size}
      color2={primary500}
      onChange={setRating}
    />
  );
};

export default MealRater;
