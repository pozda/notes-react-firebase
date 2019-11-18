import React from 'react'
import {StyledButton} from './ButtonStyles'

interface Props {
    fab?: boolean;
    onClick: () => void;
    icon?: React.ReactNode;
    text?: string;
}

class Button extends React.Component<Props> {
    render() {
        const {
            fab,
            onClick,
            icon,
            text
        } = this.props

        return (
            <StyledButton fab={fab ? fab : false} onClick={onClick}>
                {!!icon && icon}
                {!!text && text}
            </StyledButton>
        )
    }
}

export default Button