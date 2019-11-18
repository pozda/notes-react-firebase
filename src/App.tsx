import React from 'react'
import List from './UI/components/ListOfNotes/List'
import firebase from './utils/firebase'
import {Note} from './interfaces/Note'
import {Loader} from './UI/components/Loader/Loader'
import Button from './UI/components/Button/Button'
import Icon from './UI/components/Icon/Icon'
import styles from './UI/styles/values'
import Layout from './UI/Layout/Layout'
import GlobalStyles from './UI/styles/globalStyles/globalStyles'
import { Redirect, Route, RouteComponentProps, Switch, withRouter } from 'react-router'
import routes from './routes'
import {Link} from 'react-router-dom'
import AddNotePage from './UI/pages/AddNotePage'
import EditNotePage from './UI/pages/EditNotePage'

interface State {
    notes: Array<Note>;
    loading: boolean;
    selectedNote: string | null;
}

interface Props extends RouteComponentProps {
    history: any;
}

class App extends React.Component<RouteComponentProps, State> {
    state = {
        notes: [],
        loading: true,
        selectedNote: null
    }

    componentDidMount() {
        const notesRef = firebase.firestore().collection('notes')
        notesRef.onSnapshot((querySnapshot: any): void => {
            const notes: Array<any> = []
            querySnapshot.forEach((doc: any): void => {
                const data = doc.data()
                const note = {id: doc.id, title: data.title, note: data.note}
                notes.push(note)
            })
            this.setState({notes: [...notes], loading: false})
        })
    }


    saveNote = () => {

    }

    updateNote = () => {

    }

    selectSingleNote = (id: string): void => {
        this.props.history.push(`/note/edit/${id}`)
    }

    render() {
        const sidebarData = this.state.loading ?
            <Loader /> :
            <List
                onClick={this.selectSingleNote}
                notes={this.state.notes}
            />

        return (

            <>
                <GlobalStyles />
                <Layout
                    sidebar={sidebarData}
                    actionButton={
                        <Link to={routes.noteAdd.path}>
                            <Button
                                onClick={undefined}
                                text={'Create'}
                                icon={ <Icon d={Icon.res.ADD_NOTE} width={16} height={16} color={styles.color.brand.PRIMARY} /> }
                            />
                        </Link>
                    }
                >
                    <Switch>
                        <Route {...routes.noteAdd} component={AddNotePage} />
                        <Route {...routes.noteEdit} component={EditNotePage} />
                        <Redirect to={routes.notes.path} />
                    </Switch>
                </Layout>
            </>
        )
    }
}

export default withRouter(App)