import { useState } from 'react'
import * as C from './styles'

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
    <C.ContainerStyled>
        <C.ImgStyled src="/img/people.svg" alt="People" />
          <C.TextAreaStyled
            name="areatext"
            id="areatext"
            cols="30"
            rows="10"
            value={comment}
            onChange={(e) => setComment(e.target.value)}>
          </C.TextAreaStyled>
          <C.ButtonStyled 
              onClick={handleActionButton}
              comment={comment}>
              Comentar
          </C.ButtonStyled>
          <C.ListStyled>
            { allComments.map((comment, index) => (
              <C.ListItemStyled key={index}>
                {comment}
              </C.ListItemStyled>
            ))}
          </C.ListStyled>
    </C.ContainerStyled>
  )
}

export default App
