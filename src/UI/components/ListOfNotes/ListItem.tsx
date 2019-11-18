import * as React from 'react'
import Icon from '../Icon/Icon'
import {Note} from '../../../interfaces/Note'
import {StyledListItem, StyledListItemTitle} from './ListStyles'

interface Props {
    note: Note;
    onClick: (noteId: string) => void;
}

class ListItem extends React.Component<Props> {
    render() {
        const {
            note,
            onClick
        } = this.props

        return (
            <StyledListItem onClick={() => onClick(note.id)}>
                <StyledListItemTitle> { note.title } </StyledListItemTitle>
                <Icon d={Icon.res.CHEVRON_RIGHT} />
            </StyledListItem>
        )
    }
}

export default ListItem