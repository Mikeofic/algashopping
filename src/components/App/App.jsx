import AppContainer from '../AppContainer'
import Header from '../Header'
import { Wrapper, Container } from './App.styles'

function App () {
  return (
    <Wrapper>
      <Container>
        <Header/>
        <AppContainer  
          left={<div>Produtos disponívels</div>}
          middle={<div>Sua lista de compras</div>}
          right={<div>Estatísticas</div>}
        />

      </Container>
    </Wrapper>
  )
}

export default App