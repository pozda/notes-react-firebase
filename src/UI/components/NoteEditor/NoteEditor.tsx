import * as React from 'react'
import ReactQuill from 'react-quill'
import {Note} from '../../../interfaces/Note'
import {ChangeEvent} from 'react'
import {
    StyledNoteEditorTitle,
    StyledNoteEditorWrapper
} from './NoteEditorStyles'

interface Props {
    note?: Note;
    noteTitle?: string;
    noteContent?: string;
    onContentChange: (noteContent: string) => void;
    onTitleChange: (noteTitle: ChangeEvent<HTMLInputElement>) => void;
}

interface State {
    noteTitle: string;
    noteHTML: string;
    theme: string;
}

class NoteEditor extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = { noteHTML: '', noteTitle: '', theme: 'snow' }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount(): void {
        this.loadNoteData()
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
        if ((prevProps.note !== undefined && prevProps.note.id) !==
            (this.props.note !== undefined && this.props.note.id)) {
            this.loadNoteData()
        }
    }

    loadNoteData = () => {
        if (this.props.note) {
            this.setState({
                noteTitle: this.props.note.title,
                noteHTML: this.props.note.note
            })
        }
    }

    handleChange(html: string) {
        this.setState({ noteHTML: html })
        console.log(this.state.noteHTML)
    }

    render() {
        const formats = [
            'header',
            'bold', 'italic', 'underline', 'strike', 'blockquote',
            'list', 'bullet', 'indent'
        ]

        const modules = {
            toolbar: [
                [{ header: '1'}, {header: '2'}, 'bold', 'italic', 'underline', 'strike', 'blockquote'],
                [{list: 'ordered'}, {list: 'bullet'},
                    {indent: '-1'}, {indent: '+1'}, 'clean']
            ],
            clipboard: {
                matchVisual: false
            }
        }
        console.log(this.state)
        return (
            <StyledNoteEditorWrapper>
                <StyledNoteEditorTitle
                    type={'text'}
                    placeholder={'Enter title'}
                    value={this.props.noteTitle}
                    onChange={this.props.onTitleChange}
                />
                <ReactQuill
                    theme={this.state.theme}
                    value={this.props.noteContent || ''}
                    onChange={this.props.onContentChange}
                    modules={modules}
                    formats={formats}
                    bounds={'.app'}
                    placeholder={'Enter your note'}
                />
            </StyledNoteEditorWrapper>
        )
    }
}

export default NoteEditor