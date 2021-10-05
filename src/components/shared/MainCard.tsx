import React from "react";
import styled from "styled-components";
import { getThemeBorder } from "../../theme";

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primary600};
  padding: 0 8px 8px;

  ${getThemeBorder}
`;

const Header = styled.div`
  padding: 8px;
  color: white;
  font-weight: 500;
  font-size: 1.5em;
`;

const Body = styled.div`
  background-color: ${({ theme }) => theme.colors.primary100};
  ${getThemeBorder}
`;

interface Props {
  header: string;
  children: React.ReactNode;
}

const MainCard = ({ header, children }: Props) => {
  return (
    <Container>
      <Header>{header}</Header>
      <Body>{children}</Body>
    </Container>
  );
};

export default MainCard;
