import React from 'react'
import List from './UI/components/ListOfNotes/List'
import firebase from './utils/firebase'
import {Note} from './interfaces/Note'
import {Loader} from './UI/components/Loader/Loader'
import Button from './UI/components/Button/Button'
import Icon from './UI/components/Icon/Icon'
import AddNoteEditor from './UI/components/NoteEditor/AddNoteEditor'
import EditNoteEditor from './UI/components/NoteEditor/EditNoteEditor'
import styles from './UI/styles/values'
import Layout from './UI/Layout/Layout'
import GlobalStyles from './UI/styles/globalStyles/globalStyles'

interface State {
    notes: Array<Note>;
    loading: boolean;
    isNewNote: boolean;
    selectedNote: Note | null;
}

class App extends React.Component<{}, State> {
    state = {
        notes: [],
        loading: true,
        isNewNote: false,
        selectedNote: null
    }

    componentDidMount() {
        const notesRef = firebase.firestore().collection('notes')
        notesRef.get().then((querySnapshot: any) => {
            querySnapshot.forEach((doc: any) => {
                const data = doc.data()
                const note = {id: doc.id, title: data.title, note: data.note}
                this.setState({notes: [...this.state.notes, note], loading: false})
            })
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

            <>
                <GlobalStyles />
                <Layout>
                    <Layout.TopBar>
                        <Layout.Logo>
                            <Icon d={Icon.res.APP_LOGO} color={styles.color.brand.PRIMARY} />
                            Notes
                        </Layout.Logo>
                        <Button
                            onClick={this.createNewNote}
                            text={'Create'}
                            icon={ <Icon d={Icon.res.ADD_NOTE} width={16} height={16} color={styles.color.brand.PRIMARY} /> }
                        />
                    </Layout.TopBar>
                    <Layout.SectionsWrapper>
                        <Layout.Sidebar>
                            {
                                this.state.loading ?
                                    <Loader /> :
                                    <List
                                        onClick={this.selectSingleNote}
                                        notes={this.state.notes}
                                    />
                            }
                        </Layout.Sidebar>
                        <Layout.Main>
                            {
                                true ?
                                    <AddNoteEditor /> :
                                    <EditNoteEditor
                                        updateNote={this.editNote}
                                        note={this.state.selectedNote}
                                    />
                            }
                        </Layout.Main>
                    </Layout.SectionsWrapper>
                </Layout>
            </>
        )
    }
}

export default App