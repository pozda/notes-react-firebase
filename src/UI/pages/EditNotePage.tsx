import React, {ChangeEvent} from 'react'
import {Note} from '../../interfaces/Note'
import firebase from '../../utils/firebase'
import NoteEditor from '../components/NoteEditor/NoteEditor'

interface State {
    note: Note;
}

interface Props {
    match: { params: { id: string } };
}

class EditNotePage extends React.Component<Props, State> {
    state = {
        note: {
            id: '',
            title: '',
            note: ''
        }
    }

    componentDidMount() {
        this.loadNoteData()
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.loadNoteData()
        }
    }

    loadNoteData= () => {
        const {match: {params}} = this.props
        const noteRef = firebase.firestore().collection('notes').doc(params.id)
        noteRef.get().then((doc) => {
            const data = doc.data()
            this.setState({
                note: {
                    id: doc.id,
                    title: data && data.title,
                    note: data && data.note
                }
            })
        })
    }

    onChange = (note: string) => {
        this.setState({
            note: {
                ...this.state.note,
                note: note
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
    updateNote = () => {}


    render() {
        return (
            <>
                <input type="text" defaultValue={this.state.note.title} onChange={this.onTitleChange}/>
                <NoteEditor
                    note={this.state.note}
                    noteTitle={this.state.note.title}
                    noteContent={this.state.note.note}
                    onContentChange={this.onChange}
                    onTitleChange={this.onTitleChange}
                />
                <button onClick={this.updateNote}>UPDATE</button>
            </>
        )
    }
}

export default EditNotePage