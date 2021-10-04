import React from "react";
import { useDispatch } from "react-redux";
import { clearCategory } from "../redux/slice";
import styled from "styled-components";
import BaseButton from "./BaseButton";
import { FaTrash } from "react-icons/fa";

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
  const dispatch = useDispatch();

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
