import React from 'react'
import {
    StyledLayout,
    StyledLayoutLogo,
    StyledLayoutMain,
    StyledLayoutTopBar,
    StyledLayoutSidebar,
    StyledLayoutSectionsWrapper
} from './LayoutStyles'

interface Props {children: React.ReactNode}

const Layout = ({ children }: Props) => (<StyledLayout> {children} </StyledLayout>)

Layout.Logo = StyledLayoutLogo
Layout.Main = StyledLayoutMain
Layout.TopBar = StyledLayoutTopBar
Layout.Sidebar = StyledLayoutSidebar
Layout.SectionsWrapper = StyledLayoutSectionsWrapper

export default Layout