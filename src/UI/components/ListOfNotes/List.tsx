import React from 'react'
import { Note } from '../../../interfaces/Note'
import ListItem from './ListItem'
import {StyledList} from './ListStyles'

interface Props {
    onClick: (noteId: string) => void;
    notes: Array<Note>;
}

class List extends React.Component<Props> {
    render() {
        const {
            onClick,
            notes
        } = this.props

        const listItems = notes.map((note: Note) =>
            <ListItem
                key={note.id}
                note={note}
                onClick={onClick}
            />
        )
        return (
            <StyledList>
                {listItems}
            </StyledList>
        )
    }
}

export default List