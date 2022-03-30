import { useState } from 'react'
import { 
  ContainerStyled, 
  ImgStyled, 
  TextAreaStyled, 
  ButtonStyled,
  ListStyled,
  ListItemStyled
 } from './styles'

function App() {
  const [comment, setComment] = useState('')
  const [allComments, setAllComments] = useState([])

  const handleActionButton = () => {

    if(comment === '') {
      alert('Digite algum comentário!')
      return
    }

    const allOldComments = [...allComments, comment]
    setAllComments(allOldComments)
    setComment('')

  }

    return (
    <ContainerStyled>
        <ImgStyled src="/img/people.svg" alt="People" />
          <TextAreaStyled
            name="areatext"
            id="areatext"
            cols="30"
            rows="10"
            value={comment}
            onChange={(e) => setComment(e.target.value)}>
          </TextAreaStyled>
          <ButtonStyled 
              onClick={handleActionButton}
              comment={comment}>
              Comentar
          </ButtonStyled>
          <ListStyled>
            { allComments.map((comment, index) => (
              <ListItemStyled key={index}>
                {comment}
              </ListItemStyled>
            ))}
          </ListStyled>
    </ContainerStyled>
  )
}

export default App;
