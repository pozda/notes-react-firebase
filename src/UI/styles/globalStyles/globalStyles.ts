import { createGlobalStyle } from 'styled-components'

import styles from '../values'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Alata&display=swap');
  body {
    font-family: ${styles.font.PRIMARY};
    margin: 0;
    color: ${styles.color.shade.DARK};
    overflow: hidden;
    font-weight: ${styles.fontWeight.REGULAR};
  }
  * {
    box-sizing: border-box;
  }
`

export default GlobalStyles