import * as React from 'react'
import Icon from '../Icon/Icon'
import {Note} from '../../../interfaces/Note'

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
            <li className={'list__item'} onClick={() => onClick(note.id)}>
                <span> { note.title } </span>
                <Icon d={Icon.res.CHEVRON_RIGHT} />
            </li>
        )
    }
}

export default ListItem