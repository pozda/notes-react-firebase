import React from 'react'
import {StyledButton} from './ButtonStyles'

interface Props {
    fab?: boolean;
    onClick?: () => void;
    icon?: React.ReactNode;
    text?: string;
    disabled?: boolean;
}

class Button extends React.Component<Props> {
    render() {
        const {
            fab,
            onClick,
            icon,
            text,
            disabled
        } = this.props

        return (
            <StyledButton fab={fab ? fab : false} onClick={onClick} disabled={disabled}>
                {!!icon && icon}
                {!!text && text}
            </StyledButton>
        )
    }
}

export default Button