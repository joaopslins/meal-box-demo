import React from "react";
import { BlockButton } from "./BaseButton";
import { applyRecomendation } from "../redux/slice";
import { useAppDispatch } from "../redux/hooks";

const WidgetRecomendationButton = () => {
  const dispatch = useAppDispatch();

  const handleApplyRecommendation = () => {
    dispatch(applyRecomendation());
  };

  return (
    <BlockButton onClick={handleApplyRecommendation}>
      Get chef's recommendation!
    </BlockButton>
  );
};

export default WidgetRecomendationButton;
