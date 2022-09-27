import { useState } from 'react'
import Checkbox from '../../shared/Checkbox'
import AppContainer from '../AppContainer'
import Header from '../Header'
import { Wrapper, Container } from './App.styles'

function App () {
  const [lettuce, setLettuce] = useState(false)

  return (
    <Wrapper>
      <Container>
        <Header/>
        <AppContainer  
          left={
            <div>Produtos disponívels: 
              <Checkbox title="Alface" value={lettuce} onClick={() => {setLettuce(!lettuce)}}/>
            </div>}
          middle={<div>Sua lista de compras</div>}
          right={<div>Estatísticas</div>}
        />

      </Container>
    </Wrapper>
  )
}

export default App