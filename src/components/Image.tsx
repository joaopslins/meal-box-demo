import styled from "styled-components";

interface ImageProps {
  url: string;
  size: number;
}

const Image = styled.div<ImageProps>`
  background-size: cover;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background-image: url(${({ url }) => url});
  background-position: center;
`;

export default Image;
