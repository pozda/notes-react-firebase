import * as React from 'react'
import {
    StyledLoaderBackground,
    StyledLoaderItem,
    StyledLoaderWrapper
} from './LoaderStyles'

export const Loader = () =>
    <StyledLoaderBackground>
        <StyledLoaderWrapper>
            <StyledLoaderItem />
            <StyledLoaderItem />
            <StyledLoaderItem />
            <StyledLoaderItem />
            <StyledLoaderItem />
        </StyledLoaderWrapper>
    </StyledLoaderBackground>
