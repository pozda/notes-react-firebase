import styled from 'styled-components'
import styles from '../../styles/values'

const StyledAppLayout = styled.div`
    display: block;
`

const StyledAppLayoutSectionsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    overflow-y: auto;
    @media (max-width: 763px) {
        flex-direction: column;
    }
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
    transition: ${styles.transition.PRIMARY};
    @media (max-width: 763px) {
        max-width: 100%;
        min-height: 150px;
        height: calc(40vh - 60px);
        border-bottom: 3px solid ${styles.color.shade.DARK};
    }
`

const StyledAppLayoutMain = styled.div`
    width: calc(100% - 380px);
    min-width: 380px;
    transition: ${styles.transition.PRIMARY};
    @media (max-width: 763px) {
        max-width: 100%;
        min-width: 320px;
        min-height: 280px;
        height: calc(50vh);
        width: 100%;
        .ql-container {
            max-height: calc(50vh - 85px);
            overflow-y: auto;
        }
    }
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