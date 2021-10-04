import styled from "styled-components";
import { getThemeBorder } from "../theme";

const BaseButton = styled.button`
  border: 0;
  background-color: ${({ theme }) => theme.colors.primary500};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary400};
  }

  &:disabled {
    background-color: silver;
    cursor: not-allowed;
  }

  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const BlockButton = styled(BaseButton)`
  width: 100%;
  margin-top: 8px;
  padding: 8px;

  justify-content: space-between;

  color: white;
  font-weight: 500;
  font-size: 1.125em;
  ${getThemeBorder}
`;

export default BaseButton;
