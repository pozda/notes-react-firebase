import React, {ChangeEvent} from 'react'
import firebase from '../../utils/firebase'
import {Note} from '../../interfaces/Note'
import {RouteComponentProps, withRouter} from 'react-router'
import NoteEditor from '../../UI/components/NoteEditor/NoteEditor'

interface State {
    note: Note;
}

class AddNotePage extends React.Component<RouteComponentProps, State> {
    state = {
        note: {
            id: '',
            note: '',
            title: ''
        }
    }

    onChange = (note: string) => {
        this.setState({
            note: {
                ...this.state.note,
                note
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
        console.log(this.state.note)
    }

    onSave = () => {
        firebase.firestore().collection('notes').add({
            title: this.state.note.title,
            note: this.state.note.note
        })
            .then((docRef: {id: string}) => {
                this.props.history.push(`/note/edit/${docRef.id}`)
            })
            .catch(function(error: {}) {
                console.error('Error adding document: ', error)
            })
    }

    render() {
        return (
            <>
                <input type="text" placeholder={'Enter title'} onChange={this.onTitleChange}/>
                <NoteEditor
                    note={this.state.note}
                    noteTitle={this.state.note.title}
                    noteContent={this.state.note.note}
                    onContentChange={this.onChange}
                    onTitleChange={this.onTitleChange}
                />
                <button onClick={this.onSave}>SAVE</button>
            </>
        )
    }
}

export default withRouter(AddNotePage)