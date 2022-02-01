import styled from 'styled-components';

// icons
import { MdDeleteOutline } from 'react-icons/md';

export const ListContainer = styled.section`
    height: 50vh;
    width: 100%;
    display: flex;
    justify-content: center;
`

export const ListBox = styled.ul`
    width: 25rem;
    max-width: 90%;
    list-style: none;
`

export const Item = styled.li`
    width: 100%;
    height: 2.5rem;
    padding: 10px;
    margin: 10px 0px;
    border: 2px solid #2b2b2b;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const ItemContent = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`

export const ContentCheckBox = styled.input`
    cursor: pointer;
`

export const ContentText = styled.input`
    margin-left: 5px;
    font-weight: 500;
    width: 100%;
    border: none;
    outline: none;
    background-color: #ffffff;
    color: #2b2b2b;
`

export const ItemIcons = styled.div`
    display: flex;
    align-items: center;
`

export const DeleteIcon = styled(MdDeleteOutline)`
    font-size: 1.25rem;
    color: red;
    cursor: pointer;
`