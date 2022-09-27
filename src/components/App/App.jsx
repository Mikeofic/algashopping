import { useState } from 'react'
import LineChart from '../../shared/LineChart.jsx/LineChart'
import AppContainer from '../AppContainer'
import Header from '../Header'
import ShoppingList from '../ShoppingList/ShoppingList'
import { Wrapper, Container } from './App.styles'
import productsMock from '../../mocks/products.json'

function App () {
  const [products, setProducts] = useState(productsMock.products)
  const colors = ["#62CBC6", "#00ABAD", "#00858C", "#004D61"]

  function handleToggle(id, checked, name) {

  }

  return (
    <Wrapper>
      <Container>
        <Header/>
        <AppContainer  
          left={<ShoppingList title="Produtos disponíveis" products={products}/>}

          middle={<ShoppingList title="Sua lista de compras" products={products}/>}

          right={
            <div>Estatísticas 
              <LineChart color={colors[0]} title="Saudável" percentage={80}/>

              <LineChart color={colors[1]} title="Não tão saudável" percentage={20}/>

              <LineChart color={colors[2]} title="Limpeza" percentage={35}/>

              <LineChart color={colors[3]} title="Outros" percentage={60}/>
            </div>}
        />

      </Container>
    </Wrapper>
  )
}

export default App