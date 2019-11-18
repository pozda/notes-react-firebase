import React from 'react'
import Icon from '../components/Icon/Icon'
import AppLayout from '../components/AppLayout/AppLayout'

interface Props {
    children: React.ReactNode;
    sidebar: React.ReactNode;
    actionButton: React.ReactNode;
}

class Layout extends React.Component<Props, {}> {
    render() {
        const {children, actionButton, sidebar} = this.props
        return (
            <AppLayout>
                <AppLayout.TopBar>
                    <AppLayout.Logo>
                        <Icon d={Icon.res.APP_LOGO} />
                        Notes
                    </AppLayout.Logo>
                    {actionButton}
                </AppLayout.TopBar>
                <AppLayout.SectionsWrapper>
                    <AppLayout.Sidebar>
                        {sidebar}
                    </AppLayout.Sidebar>
                    <AppLayout.Main>
                        {children}
                    </AppLayout.Main>
                </AppLayout.SectionsWrapper>
            </AppLayout>
        )
    }
}

export default Layout