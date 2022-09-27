import { Wrapper, Title, Array } from './ShoppingList.styles.js' 
import Checkbox from '../../shared/Checkbox/Checkbox.jsx'

function ShoppingList ({ title, products, onToggle }) {
  return (
    <Wrapper>
      {<Title>{title}:</Title>}
      <Array>
        {
        products.map(product => 
        <Checkbox 
        value={product.checked} 
        title={product.name} 
        onClick={() => onToggle(product.id, product.checked, product.name)}
        />)
        }
      </Array>
    </Wrapper>
  )
}

export default ShoppingList