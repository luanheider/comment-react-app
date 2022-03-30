import styled from 'styled-components'

export const ContainerStyled = styled.div `
    width: 414px;
    height: 796px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #3936c0;
    border-radius: 5px;
    padding: 30px 0;

`
export const ImgStyled = styled.img `
    margin-bottom: 50px;
`

export const TextAreaStyled = styled.textarea `
    height: 138px;
    width: 342px;
    resize: none;
    padding: 10px;
    font-size: 17px;
    border-radius: 5px;
    outline: none;
`

export const ButtonStyled = styled.button `
    border-radius: 10px;
    width: 342px;
    height: 64px;
    border: none;
    font-size: 17px;
    cursor: pointer;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    margin-bottom: 30px;
    margin-top: 20px;

    background: ${({ comment }) => comment ? '#000' : 'gray'};
    color: ${({ comment }) => comment ? '#FFF' : 'darkblue'};
`

export const ListStyled = styled.ul `
    list-style: none;
`

export const ListItemStyled = styled.li `
    width: 342px;
    height: 64px;
    background: rgba(255, 255, 255, 0.14);
    border-radius: 5px;
    padding: 5px 10px;
    color: #FFF;
    font-size: 17px;
    margin-top: 10px;
`