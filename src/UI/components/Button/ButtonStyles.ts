import styled from 'styled-components'

const StyledButton = styled.button<{fab?: boolean}>`
    display: flex;
    border: 2px solid blue;
    padding: 2px;
    justify-content: space-between;
    background-color: white;
`

export {
    StyledButton
}