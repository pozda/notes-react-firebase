import React, {ChangeEvent} from 'react'
import {Editor, EditorState, RichUtils} from 'draft-js'
import {v1 as uuidv1} from 'uuid'
import {Note} from '../../../interfaces/Note'

interface State {
    note: Note
}

class AddNoteEditor extends React.Component<{}, State> {
    state = {
        note: {
            id: '',
            note: EditorState.createEmpty(),
            title: ''
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

    handleKeyCommand = (command: any) => {
        const newState = RichUtils.handleKeyCommand(this.state.note.note, command)
        if (newState) {
            this.onChange(newState)
            return 'handled'
        }
        return 'not-handled'
    }

    onSave = () => {
        const id = uuidv1()
        // save with this.state.note
    }


    render() {
        return (
            <>
                <input type="text" placeholder={'Enter title'} onChange={this.onTitleChange}/>
                <Editor
                    editorState={this.state.note.note}
                    onChange={this.onChange}
                    handleKeyCommand={this.handleKeyCommand}
                />
                <button onClick={this.onSave}>SAVE</button>
            </>
        )
    }
}

export default AddNoteEditor