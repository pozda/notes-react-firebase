// @flow
import React from 'react'

interface Props {
    d: string;
    width?: number;
    height?: number;
    wide?: boolean;
    xWide?: boolean;
    color?: string;
}

const res = {
    ADD_NOTE: '',
    SAVE: '',
    DELETE: '',
    CHEVRON_RIGHT: 'M8.17.32L4.06 4.43l7.64 7.65-7.64 7.65 4.11 4.11 11.77-11.76L8.17.32z',
    APP_LOGO: ''
}

const Icon = ({d, width = 24, height = 24, color}: Props) => (
    <svg
        viewBox='0 0 24 24'
        aria-hidden='true'
        role='presentation'
        width={width}
        height={height}
    >
        <path d={d} fill={color || 'black'}/>
    </svg>
)

Icon.res = res

export default Icon