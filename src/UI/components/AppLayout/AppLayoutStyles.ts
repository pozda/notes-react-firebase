import styled from 'styled-components'
import styles from '../../styles/values'

const StyledAppLayout = styled.div`
    display: block;
`

const StyledAppLayoutSectionsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`

const StyledAppLayoutTopBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    width: 100%;
    border-bottom: 1px solid ${styles.color.shade.DARK};
    padding: 10px 20px;
    & a {
        text-decoration: none;
    }
`

const StyledAppLayoutSidebar = styled.div`
    max-width: 380px;
    max-height: calc(100vh - 60px);
    min-height: 320px;
    overflow-y: auto;
    width: 100%;
`

const StyledAppLayoutMain = styled.div`
    width: calc(100vh - 380px);
    min-width: 380px;
`

const StyledAppLayoutLogo = styled.div`
    display: inline-block;
    font-size: ${styles.typographyScale.TYPE30};
    color: ${styles.color.brand.PRIMARY};
    text-transform: uppercase;
    & svg {
        margin-right: 8px;
        }
    }
`

export {
    StyledAppLayout,
    StyledAppLayoutLogo,
    StyledAppLayoutMain,
    StyledAppLayoutTopBar,
    StyledAppLayoutSidebar,
    StyledAppLayoutSectionsWrapper
}