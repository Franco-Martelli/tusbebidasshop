import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addItem = (prod, quantity) => {
    if (isInCart(prod.id)) {
      setCartList(
        cartList.map((p) => {
          return p.id === prod.id
            ? { ...p, quantity: p.quantity + quantity }
            : p;
        })
      );
    } else {
      setCartList([...cartList, { ...prod, quantity }]);
    }
  };

  const clear = () => setCartList([]);
  const isInCart = (id) => (cartList.find((p) => p.id === id) ? true : false);
  const removeItem = (id) => setCartList(cartList.filter((p) => p.id !== id));

  const totalPrice = () => {
    return cartList.reduce((prev, act) => prev + act.quantity * act.price, 0);
  };

  const totalProducts = () =>
    cartList.reduce(
      (acumulador, productoActual) => acumulador + productoActual.quantity,
      0
    );

  return (
    <CartContext.Provider
      value={{
        cartList,
        addItem,
        removeItem,
        clear,
        isInCart,
        totalPrice,
        totalProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
