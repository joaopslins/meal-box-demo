import React from "react";
import { useBoxInfo } from "../../redux/hooks";
import { BlockButton } from "../shared/BaseButton";

const WidgetSubmit = () => {
  const { selectedQuantity, totalQuantity } = useBoxInfo();

  const handleSubmit = () => {
    alert("Order Submitted!");
  };

  return (
    <BlockButton
      disabled={selectedQuantity !== totalQuantity}
      onClick={() => handleSubmit()}
    >
      <span>Submit Meals</span>
      <span>
        {selectedQuantity} / {totalQuantity}
      </span>
    </BlockButton>
  );
};

export default WidgetSubmit;
