import { useState } from 'react';
import { useQuery } from 'react-query';
//components
// @ts-ignore
import  Drawer  from "@mui/material/Drawer";
import CircularProgress from '@mui/material/CircularProgress';
//import Grid from '@mui/material/Grid';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Badge from '@mui/material/Badge';

//items and cart components
import Item from './Item/Item';
import Cart from './Cart/Cart';

// Styles
import { Wrapper, StyledButton,LogoMark, Child, Subtitle } from './App.styles';


//Types
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};


//fetch API
const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch('https://fakestoreapi.com/products')).json();

  

const App = () =>  {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);

  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products',
    getProducts
  );

  console.log(data);

  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount, 0);

  const handleAddToCart = (clickedItem: CartItemType) => {
      setCartItems(prev => {
        // 1. Is the item already added in the cart?
        const isItemInCart = prev.find(item => item.id === clickedItem.id);
  
        if (isItemInCart) {
          return prev.map(item =>
            item.id === clickedItem.id
              ? { ...item, amount: item.amount + 1 }
              : item
          );
        }
        // First time the item is added
        return [...prev, { ...clickedItem, amount: 1 }];
      });
    };


    const handleRemoveFromCart = (id: number) => {
      setCartItems(prev =>
        prev.reduce((ack, item) => {
          if (item.id === id) {
            if (item.amount === 1) return ack;
            return [...ack, { ...item, amount: item.amount - 1 }];
          } else {
            return [...ack, item];
          }
        }, [] as CartItemType[])
      );
    };
  


  if (isLoading) return <CircularProgress />;
  if (error) return <div>Oops! Something went wrong ...</div>;




  return (
    
     <Wrapper>
      <LogoMark>MYVENUS</LogoMark>
       <Subtitle>Gentle and Young forever will you be. </Subtitle>
      <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
      </Drawer>

      
      <StyledButton onClick={() => setCartOpen(true)}>
        <p>SHOPPING BAG &nbsp; </p>
        <Badge badgeContent={getTotalItems(cartItems)} color='error'>
          <AddShoppingCartIcon />
          
        </Badge>
      </StyledButton>
    

      <Child>
     
        {data?.map(item => (
          
            <Item item={item} handleAddToCart={handleAddToCart} />
       
        ))}
    
      </Child>
    </Wrapper>
  );
}

export default App;
