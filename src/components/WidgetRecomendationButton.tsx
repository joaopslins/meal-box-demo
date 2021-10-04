import React from "react";
import { BlockButton } from "./BaseButton";
import { useDispatch } from "react-redux";
import { applyRecomendation } from "../redux/slice";

const WidgetRecomendationButton = () => {
  const dispatch = useDispatch();

  const handleApplyRecommendation = () => {
    dispatch(applyRecomendation());
  };

  return (
    <BlockButton onClick={handleApplyRecommendation}>
      Chef's recommendation!
    </BlockButton>
  );
};

export default WidgetRecomendationButton;
