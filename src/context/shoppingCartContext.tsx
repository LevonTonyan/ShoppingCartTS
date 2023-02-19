import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";
import { StoreItem } from "./../models";
import ShoppingCart from "./../components/ShoppingCart";

type ShoppingCartProviderPops = {
  children: ReactNode;
};

type ShoppingCartContext = {
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  items: StoreItem[];
  cartItems: CartItem[];
  openCart: () => void;
  closeCart: () => void;
  cartQuantity: number;
  isOpen: boolean;
};

export type CartItem = {
  id: number;
  quantity: number;
};

//////Creating context
const ShoppingCartContext = createContext({} as ShoppingCartContext);

///////Custom hook returning the context///////////
export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

//////Context Provider/////////
export function ShoppingCartProvider({
  children,
}: ShoppingCartProviderPops): JSX.Element {
  const [items, setItems] = useState<StoreItem[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  function closeCart() {
    setIsOpen(false);
  }

  function openCart() {
    setIsOpen(true);
  }

  ////////////////GET ITEM QUANTITY/////////////////
  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  /////////////encrease item quantity/////////
  function increaseCartQuantity(id: number) {
    setCartItems((cartItems) => {
      if (cartItems.find((item) => item.id === id) == null) {
        return [...cartItems, { id, quantity: 1 }];
      } else {
        return cartItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  /////////////encrease item quantity/////////
  function decreaseCartQuantity(id: number) {
    setCartItems((cartItems) => {
      if (cartItems.find((item) => item.id === id)?.quantity === 1) {
        return cartItems.filter((item) => item.id !== id);
      } else {
        return cartItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  //////Remove item from cart/////////
  function removeFromCart(id: number) {
    setCartItems(cartItems.filter((item) => item.id !== id));
  }
  ////////quantity////////
  const cartQuantity = cartItems.reduce(
    (quantity, item) => quantity + item.quantity,
    0
  );

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((r) => setItems(r));
  }, []);

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartItems,
        items,
        openCart,
        closeCart,
        cartQuantity,
        isOpen,
      }}
    >
      {children}
      {isOpen && (
        <ShoppingCart
                  isOpen={isOpen}
                  closeCart={closeCart}
                  cartItems={cartItems}
                  items={items }
        />
      )}
    </ShoppingCartContext.Provider>
  );
}
