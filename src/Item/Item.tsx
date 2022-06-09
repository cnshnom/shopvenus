// @ts-ignore
import Button from '@mui/material/Button';
// Types
import { CartItemType } from '../App';
// Styles
import { Wrapper , Shelf} from './Item.styles';

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};
//react FC to define props {item, handleAddToCart}
// <p>{item.description}</p>
const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
 <Shelf>
  <Wrapper>
    <img src={item.image} alt={item.title} />
    <div>
      <p>{item.title}</p>
     
      <h3>${item.price}</h3>
    </div>
    <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
  </Wrapper>
  </Shelf>

);

export default Item;