import styled from "styled-components";
import { getThemeBorder } from "../../theme";

interface ImageProps {
  url: string;
  size: number;
  roundBorder?: boolean;
}

const Image = styled.div<ImageProps>`
  background-size: cover;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background-image: url(${({ url }) => url});
  background-position: center;
  ${({ roundBorder }) => roundBorder && getThemeBorder}
`;

export default Image;
