import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
${normalize};

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    }

html {
    font-size: 62.5%;

    @media screen and (max-width: 450px) {
        font-size: 50%;
    }
}

body {
    font-family: "Montserrat", sans-serif;
}



a {
    color: inherit;
    text-decoration: none;
}


`;

export default GlobalStyles;
