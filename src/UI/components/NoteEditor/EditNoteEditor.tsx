import React, {ChangeEvent} from 'react'
import {Editor, EditorState, RichUtils} from 'draft-js'
import {Note} from '../../../interfaces/Note'

interface State {
    loading: boolean;
    note: Note | null;
}
interface Props {
    updateNote: (noteId: string) => void;
    note: Note | null;
}

class EditNoteEditor extends React.Component<Props, State> {
    state = {
        loading: true,
        note: {
            id:'',
            title:'',
            note: EditorState.createEmpty()
        }
    }

    componentDidMount() {
        this.setState({note: {id: '', title: '', note: EditorState.createEmpty()}})
        this.props.note &&
            this.setState({note: this.props.note, loading: false})
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>): void {
        if((prevState.note && prevState.note.id) !== (prevProps.note && prevProps.note.id)) {
            this.props.note !== null && this.setState({note: this.props.note})
        }
    }

    onChange = (editorState: Object) => {
        this.setState({
            note: {
                ...this.state.note,
                note: editorState
            }
        })
    }

    onTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const title = (e && e.target && e.target.value) || ('')
        this.setState({
            note: {
                ...this.state.note,
                title
            }
        })
    }
    // @ts-ignore
    handleKeyCommand = (command: any) => {
        if (!!this.state.note.note) {
            const newState = RichUtils.handleKeyCommand(this.state.note.note, command)
            if (newState) {
                this.onChange(newState)
                return 'handled'
            }
            return 'not-handled'
        }
    }


    render() {
        const {updateNote, note} = this.props

        return (
            <>
                <input type="text" defaultValue={this.state.note.title} onChange={this.onTitleChange} />
                <Editor
                    editorState={this.state.note.note}
                    onChange={this.onChange}
                    // @ts-ignore
                    handleKeyCommand={this.handleKeyCommand}
                />
                <button onClick={note !== null ? () => updateNote(note.id): undefined}>UPDATE</button>
            </>
        )
    }
}

export default EditNoteEditor