import styled from 'styled-components'
import styles from '../../styles/values'

const StyledButton = styled.button<{fab?: boolean}>`
    ${(props: {fab?: boolean}) => props.fab === true ?
        `position: fixed;
        bottom: 16px;
        right: 16px;
        width: 48px;
        height: 48px;
        border: 0;
        border-radius: ${styles.borderRadius.CIRCLE};
        background-color: ${styles.color.brand.SECONDARY};
        & svg path {
            transition: ${styles.transition.PRIMARY};
            fill: ${styles.color.shade.WHITE08};
        }
        &:hover {
            background-color: ${styles.color.brand.PRIMARY};
            svg path {
                fill: ${styles.color.shade.WHITE};
            }
        }
        &:disabled {
            cursor: default;
            background-color: ${styles.color.shade.DARK07};
            & svg path {
                fill: ${styles.color.shade.WHITE02};
            }
            &:hover {
                background-color: ${styles.color.shade.DARK07};
                & svg path {
                    fill: ${styles.color.shade.WHITE02};
                }
            }
        }
       
        
        ` :
        `display: flex;
        border: 2px solid ${styles.color.brand.PRIMARY};
        border-radius: ${styles.borderRadius.PRIMARY};
        padding: 5px 10px;
        justify-content: space-between;
        align-items: center;
        color: ${styles.color.brand.PRIMARY};
        background-color: ${styles.color.shade.WHITE};
        & svg {
            margin-right: 8px;
            path {
                fill: ${styles.color.brand.PRIMARY};
            }
        }
        &:hover {
            color: ${styles.color.shade.WHITE};
            background-color: ${styles.color.brand.PRIMARY};
            & svg {
                path {
                    fill: ${styles.color.shade.WHITE};
                }
            }
        }`
}
    cursor: pointer;
    transition: ${styles.transition.PRIMARY};
    &:focus {
        outline: 0;
    }
`

export {
    StyledButton
}