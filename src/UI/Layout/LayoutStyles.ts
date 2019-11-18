import styled from 'styled-components'
import styles from '../styles/values'

const StyledLayout = styled.div`
    display: block;
`

const StyledLayoutSectionsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`

const StyledLayoutTopBar = styled.div`
    height: 60px;
    width: 100%;
    border-bottom: 1px solid ${styles.color.shade.DARK};
    padding: 10px 20px;
`

const StyledLayoutSidebar = styled.div`
    max-width: 380px;
    max-height: calc(100vh - 60px);
    min-height: 320px;
    overflow-y: auto;
    width: 100%;
`

const StyledLayoutMain = styled.div`
    width: calc(100vh - 380px);
    min-width: 380px;
`

const StyledLayoutLogo = styled.div`
    display: inline-block;
    color: ${styles.color.brand.PRIMARY};
`

export {
    StyledLayout,
    StyledLayoutLogo,
    StyledLayoutMain,
    StyledLayoutTopBar,
    StyledLayoutSidebar,
    StyledLayoutSectionsWrapper
}