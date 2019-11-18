import styled, {keyframes} from 'styled-components'
import styles from '../../styles/values'

const boxAnimation = keyframes`
  0% {opacity: 0.2;}
  50% {opacity: 1;}
  100% {opacity: 0.2;}
`

const StyledLoaderBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${styles.color.shade.DARK07};
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledLoaderWrapper = styled.div`
    display: flex;
    border: 2px solid ${styles.color.shade.WHITE};
    padding: 2px;
    margin: 1px;
    justify-content: space-between;
    width: 60px;
`

const StyledLoaderItem = styled.div`
    background: ${styles.color.shade.WHITE};
    width: 10px;
    height: 10px;
    animation: 1000ms ${boxAnimation} infinite;
    &:nth-of-type(2) {
      animation-delay: 200ms;
    }
    &:nth-of-type(3) {
      animation-delay: 400ms;
    }
    &:nth-of-type(4) {
      animation-delay: 600ms;
    }
    &:nth-of-type(5) {
      animation-delay: 800ms;
    }
`

export {
    StyledLoaderBackground,
    StyledLoaderItem,
    StyledLoaderWrapper
}