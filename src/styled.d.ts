import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    colors: {
      primary100: string;
      primary200: string;
      primary300: string;
      primary400: string;
      primary500: string;
      primary600: string;
      primary700: string;
      primary800: string;
      secondary100: string;
      secondary200: string;
      secondary300: string;
      secondary400: string;
      secondary500: string;
      secondary600: string;
      secondary700: string;
      secondary800: string;
    };
  }
}
