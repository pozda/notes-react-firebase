import React, {ChangeEvent} from 'react'
import {Note} from '../../interfaces/Note'
import firebase from '../../utils/firebase'
import NoteEditor from '../components/NoteEditor/NoteEditor'
import {toast} from 'react-toastify'
import Icon from "../components/Icon/Icon";
import Button from "../components/Button/Button";

interface State {
    note: Note;
    updateDisabled: boolean;
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
        },
        updateDisabled: true
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

    componentDidMount() {
        this.loadNoteData()
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.loadNoteData()
        }
        if ((prevState.note.title !== this.state.note.title) || (prevState.note.note !== this.state.note.note)) {
            this.setState({updateDisabled: false})
        }
    }

    loadNoteData = () => {
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

    updateNote = () => {
        const noteRef = firebase.firestore().collection('notes').doc(this.props.match.params.id)
        return noteRef.update({
            title: this.state.note.title,
            note: this.state.note.note
        }).then(() => {
            this.notify('success', 'Note updated successfuly!')
        })
            .catch((error: string) => {
                this.notify('error', `Error updating document: ${error}`)
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
                <Button
                    fab={true}
                    disabled={this.state.updateDisabled}
                    onClick={this.updateNote}
                    icon={<Icon d={Icon.res.SAVE} />}
                >
                </Button>
            </>
        )
    }
}

export default EditNotePage