import styled from 'styled-components';

export const FormContainer = styled.section`
    width: 100%;
    height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const FormBox = styled.form`
    width: 25rem;
    max-width: 90%;
`
export const InputField = styled.input`
    width: 100%;
    height: 2.5rem;
    padding: 10px;
    border: 2px solid #2b2b2b;
    outline: none;
`

export const AddButton = styled.input`
    outline: none;
    border: 2px solid #2b2b2b;
    background-color: #2b2b2b;
    color: #ffffff;
    width: 100%;
    height: 2.5rem;
    padding: 10px;
    margin-top: 20px;
    cursor: pointer;
    transition: all 0.25s;

    &:hover {
        background-color: #ffffff;
        color: #2b2b2b;
    }
`