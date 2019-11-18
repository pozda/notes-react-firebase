import React from 'react'
import {
    StyledAppLayout,
    StyledAppLayoutLogo,
    StyledAppLayoutMain,
    StyledAppLayoutTopBar,
    StyledAppLayoutSidebar,
    StyledAppLayoutSectionsWrapper
} from './AppLayoutStyles'

interface Props {children: React.ReactNode}

const AppLayout = ({ children }: Props) => (<StyledAppLayout> {children} </StyledAppLayout>)

AppLayout.Logo = StyledAppLayoutLogo
AppLayout.Main = StyledAppLayoutMain
AppLayout.TopBar = StyledAppLayoutTopBar
AppLayout.Sidebar = StyledAppLayoutSidebar
AppLayout.SectionsWrapper = StyledAppLayoutSectionsWrapper

export default AppLayout