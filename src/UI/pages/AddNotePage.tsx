import React, {ChangeEvent} from 'react'
import firebase from '../../utils/firebase'
import {Note} from '../../interfaces/Note'
import {RouteComponentProps} from 'react-router'
import NoteEditor from '../../UI/components/NoteEditor/NoteEditor'
import {toast} from 'react-toastify'


interface State {
    note: Note;
    saveDisabled: boolean;
}

class AddNotePage extends React.Component<RouteComponentProps, State> {
    state = {
        note: {
            id: '',
            note: '',
            title: ''
        },
        saveDisabled: true
    }

    notify = (type: 'success' | 'warning' | 'info' | 'error', message: string) => {
        switch (type) {
        case 'success':
            return toast.success(message)
        case 'warning':
            return toast.warn(message)
        case 'info':
            return toast.info(message)
        case 'error':
            return toast.error(message)
        }
    }

    componentDidUpdate(prevProps: Readonly<RouteComponentProps>, prevState: Readonly<State>, snapshot?: any): void {
        if ((prevState.note.title !== this.state.note.title) || (prevState.note.note !== this.state.note.note)) {
            this.setState({saveDisabled: false})
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
            .then((docRef: { id: string }) => {
                this.notify('success', 'Note saved successfuly!')
                this.props.history.push(`/note/edit/${docRef.id}`)
            })
            .catch((error: string) => {
                this.notify('error', `Error adding document: ${error}`)
            })
    }

    render() {
        return (
            <>
                <NoteEditor
                    note={this.state.note}
                    noteTitle={this.state.note.title}
                    noteContent={this.state.note.note}
                    onContentChange={this.onChange}
                    onTitleChange={this.onTitleChange}
                />
                <button disabled={this.state.saveDisabled} onClick={this.onSave}>SAVE</button>
            </>
        )
    }
}

export default AddNotePage