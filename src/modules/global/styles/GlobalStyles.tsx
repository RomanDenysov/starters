import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Ваши глобальные стили здесь */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {

    font-family: 'Arial', sans-serif;
  }

  /* Дополнительные глобальные стили, если необходимо */
`;

export default GlobalStyles;