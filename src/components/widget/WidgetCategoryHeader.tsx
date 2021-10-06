import styled from "styled-components";
import { useAppSelector, useCategoryBoxInfo } from "../../redux/hooks";
import { selectCategoryById } from "../../redux/selectors";
import WidgetClearCategoryButton from "./WidgetClearCategoryButton";
import React from "react";

const Header = styled.div`
  padding: 4px 0;
  color: white;
  font-weight: 500;
  font-size: 1.125em;

  display: flex;
  justify-content: space-between;
`;

const HeaderInfo = styled.div`
  display: flex;

  > * + * {
    margin-left: 8px;
  }
`;

interface Props {
  id: number;
}

export const WidgetCategoryHeader = ({ id }: Props) => {
  const { currentMealQuantity, totalMealQuantity } = useCategoryBoxInfo(id);
  const category = useAppSelector(state => selectCategoryById(state, id));

  return (
    <Header>
      <span>{category.name}</span>
      <HeaderInfo>
        {currentMealQuantity > 0 && (
          <WidgetClearCategoryButton categoryId={id} />
        )}
        <span>
          {currentMealQuantity} / {totalMealQuantity}
        </span>
      </HeaderInfo>
    </Header>
  );
};
