// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    colors: {
      primary: string;
      primary2: string;
      secondary: string;
      tertiary: string;
      tertiary2: string;
    };
  }
}
