import React from 'react'
import List from './UI/components/ListOfNotes/List'
import firebase from './utils/firebase'
import {Note} from './interfaces/Note'
import {Loader} from './UI/components/Loader/Loader'
import Button from './UI/components/Button/Button'
import Icon from './UI/components/Icon/Icon'
import AddNoteEditor from "./UI/components/NoteEditor/AddNoteEditor";
import EditNoteEditor from "./UI/components/NoteEditor/EditNoteEditor";

interface State {
    notes: Array<Note>
    loading: boolean,
    isNewNote: boolean,
    selectedNote: Note | null
}

class App extends React.Component<{}, State> {
    state = {
        notes: [],
        loading: true,
        isNewNote: false,
        selectedNote: null
    }
    // componentDidMount() {
    //     const notesRef = firebase.firestore().collection('notes');
    //     notesRef.get('value', (snapshot) => {
    //         this.setState({notes: snapshot.val(), loading: false})
    //     })
    // }

    componentDidMount() {
        const notesRef = firebase.firestore().collection('notes');
        notesRef.get().then((querySnapshot) => {
            // @ts-ignore
            this.setState({notes: querySnapshot, loading: false})
        })
    }

    createNewNote = () => {
        this.setState({isNewNote: true})
    }

    saveNote = () => {

    }

    editNote = () => {

    }

    selectSingleNote = (id: string) => {
        const selectedNote = this.state.notes.find((note: Note) => note.id === id) || null
        console.log(selectedNote)
        this.setState({isNewNote: false, selectedNote: selectedNote})
    }

    render() {
        return (
            <div className="App">
                <Button onClick={this.createNewNote} text={'Create'} icon={Icon.res.ADD_NOTE}/>
                {
                    // this.state.loading ?
                    //     <Loader /> :
                    //     <List onClick={this.selectSingleNote} notes={this.state.notes}/>
                    console.log(this.state.notes)
                }
                {
                    this.state.isNewNote && !!this.state.selectedNote ?
                        <AddNoteEditor /> :
                        <EditNoteEditor editNote={this.editNote} note={this.state.selectedNote}  />
                }
            </div>
        )
    }
}

export default App;
