import styled from 'styled-components'
import styles from '../../styles/values'

const StyledButton = styled.button<{fab?: boolean}>`
    display: flex;
    border: 2px solid ${styles.color.brand.PRIMARY};
    border-radius: ${styles.borderRadius.PRIMARY};
    padding: 2px 10px;
    justify-content: space-between;
    align-items: center;
    color: ${styles.color.brand.PRIMARY};
    background-color: ${styles.color.shade.WHITE};
    cursor: pointer;
    transition: ${styles.transition.PRIMARY};
    & svg {
        margin-right: 8px;
    }
    &:hover {
        color: ${styles.color.shade.WHITE};
        background-color: ${styles.color.brand.PRIMARY};;
        & svg {
            path {
                fill: ${styles.color.shade.WHITE};
            }
        }
    }
`

export {
    StyledButton
}