import styled from "styled-components";

export const FormOfContacts = styled.form`
    width: 500px;
    padding: 10px 20px;
    border: 1px solid gray;
`
export const Label = styled.label`
    display: block;
    font-size: 20px;
    font-weight: 600;
    padding-bottom: 10px;
`
export const InputLine = styled.input`
    width: 480px;
    margin-bottom: 10px;
`
export const InputFilter = styled(InputLine)`
    margin-left: 20px;
    margin-top: 10px;
    display: block;
`
export const Button = styled.button`
    display: inline-block;
    box-sizing: border-box;
    padding: 0 25px;
    margin: 0 15px 15px 25px;
    outline: none;
    border: 1px solid #fff;
    border-radius: 30px;
    height: 26px;
    line-height: 16px;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    color: #444;
    background-color: #fff;
    box-shadow: 0 4px 6px rgb(65 132 144 / 10%), 0 1px 3px rgb(0 0 0 / 8%);
    cursor: pointer;
    user-select: none;
    appearance: none;
    touch-action: manipulation;
    vertical-align: top;
    transition: box-shadow 0.2s;

    :focus-visible {
        border: 1px solid #4c51f9;
        outline: none;
    }
    
    :hover {
        transition: all 0.2s;
        box-shadow: 0 7px 14px rgb(65 132 144 / 10%), 0 3px 6px rgb(0 0 0 / 8%);
    }
    
    :active {
        background-color: #808080;
    }

    :disabled {
        background-color: #eee;
        border-color: #eee;
        color: #444;
        cursor: not-allowed;
    }
`

