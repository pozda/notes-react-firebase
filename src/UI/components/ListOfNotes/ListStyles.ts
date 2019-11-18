import styled from 'styled-components'
import styles from '../../styles/values'

const StyledList = styled.ul`
    margin: 0;
    padding: 0;
    list-style-type: none;
`

const StyledListItem = styled.li`
    display: flex;
    justify-content: space-between;
    padding: 8px 4px 8px 16px;
    border: 1px solid ${styles.color.shade.DARK01};
    box-shadow: ${styles.shadow.card.PRIMARY};
    transition: ${styles.transition.PRIMARY};
    cursor: pointer;
    &:hover {
        box-shadow: ${styles.shadow.card.SECONDARY};
    }
`

const StyledListItemTitle = styled.span`

`

export {
    StyledList,
    StyledListItem,
    StyledListItemTitle
}