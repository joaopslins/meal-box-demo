import React from "react";
import { Link, useParams } from "react-router-dom";
import { useMealInfo } from "../redux/hooks";
import MainCard from "../components/shared/MainCard";
import styled from "styled-components";
import Image from "../components/shared/Image";
import MealRater from "../components/shared/MealRater";
import { MealDetailBoxManager } from "../components/meal-detail/MealDetailBoxManager";

const Container = styled.div`
  max-width: 680px;
  margin: 0 auto;
`;

const Content = styled.div`
  padding: 16px;
`;

const SectionWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

const MealInfo = styled.div`
  flex: 0 0 220px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BackLink = styled(Link)`
  margin-top: 8px;
  display: inline-block;

  font-weight: 500;
  color: ${({ theme }) => theme.colors.secondary600};
  text-decoration: none;

  :hover,
  :active {
    color: ${({ theme }) => theme.colors.secondary400};
    text-decoration: underline;
  }
`;

const MealDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const mealId = Number(id);
  const { name, image } = useMealInfo(mealId);

  if (!name) return null;

  return (
    <Container>
      <MainCard header={name}>
        <Content>
          <SectionWrapper>
            <MealInfo>
              <Image size={220} url={image} roundBorder />
              <MealRater mealId={mealId} size={32} />
              <MealDetailBoxManager mealId={mealId} />
            </MealInfo>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              blandit leo diam, a semper nisi rhoncus et. Sed at luctus purus.
              Maecenas pretium, ligula vel posuere malesuada, libero lorem
              mattis libero, lobortis pulvinar ligula turpis eu nulla. Morbi nec
              accumsan tortor, et lacinia justo. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia curae; Duis
              auctor eros eget dui dictum feugiat. Nunc cursus justo vel lacus
              molestie laoreet. Duis eu euismod dui. Fusce risus est,
              pellentesque sed purus quis, blandit lobortis orci. Aliquam ut
              lacinia lectus, a volutpat arcu. Nam tincidunt consequat faucibus.
              Ut nec dictum ante, sed sollicitudin orci. Suspendisse suscipit
              nisi eu erat faucibus, id ultricies nunc posuere.
            </div>
          </SectionWrapper>
          <BackLink to="/">{"<< Back to list"}</BackLink>
        </Content>
      </MainCard>
    </Container>
  );
};

export default MealDetailPage;
