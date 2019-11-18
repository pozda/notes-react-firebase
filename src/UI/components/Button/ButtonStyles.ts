import styled from 'styled-components'
import styles from '../../styles/values'

const StyledButton = styled.button<{fab?: boolean}>`
    display: flex;
    border: 2px solid ${styles.color.brand.PRIMARY};
    padding: 2px;
    justify-content: space-between;
    background-color: ${styles.color.shade.WHITE};
`

export {
    StyledButton
}