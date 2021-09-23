import styled from "styled-components";

const Image = styled.div<{
  url: string;
  size: number;
}>`
  background-size: cover;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background-image: url(${({ url }) => url});
`;

export default Image;
