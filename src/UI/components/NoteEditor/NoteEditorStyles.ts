import styled from 'styled-components'
import styles from '../../styles/values'

const StyledNoteEditorTitle = styled.input`
    border: 0;
    border-bottom: 3px solid ${styles.color.shade.DARK};
    width: 100%;
    padding: 8px;
    font-size: ${styles.typographyScale.TYPE30};
    &:focus, :hover {
        outline: 0;
    }
`

const StyledNoteEditorWrapper = styled.div`
    .ql-editor {
        max-height: calc(100vh - 155px);
        overflow-y: auto;
    }
`

export {
    StyledNoteEditorTitle,
    StyledNoteEditorWrapper
}