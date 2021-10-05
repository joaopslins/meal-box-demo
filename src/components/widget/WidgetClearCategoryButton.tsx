import React from "react";
import { clearCategory } from "../../redux/slice";
import styled from "styled-components";
import BaseButton from "../shared/BaseButton";
import { FaTrash } from "react-icons/fa";
import { useAppDispatch } from "../../redux/hooks";

interface Props {
  categoryId: number;
}

const Button = styled(BaseButton)`
  height: 20px;
  width: 20px;
  color: white;
  font-size: 12px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;

  border-radius: 4px;
`;

const WidgetClearCategoryButton = ({ categoryId }: Props) => {
  const dispatch = useAppDispatch();

  const handleClear = () => {
    dispatch(clearCategory(categoryId));
  };

  return (
    <Button onClick={handleClear}>
      <FaTrash />
    </Button>
  );
};

export default WidgetClearCategoryButton;
