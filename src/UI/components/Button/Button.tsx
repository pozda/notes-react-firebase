import * as React from 'react'
import {StyledButton} from './ButtonStyles'
import Icon from '../Icon/Icon'
import styles from '../../styles/values'

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
                {!!icon && 
                <Icon d={icon} width={16} height={16} color={styles.color.brand.PRIMARY} />    
                }
                {!!text && text}
            </StyledButton>
        )
    }
}

export default Button