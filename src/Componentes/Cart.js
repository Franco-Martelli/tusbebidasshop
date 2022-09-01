import React, { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import {
  collection,
  getFirestore,
  doc,
  updateDoc,
  increment,
  setDoc,
} from "firebase/firestore";
import FormatNumber from "../Utils/FormatNumber";
import { notify } from "../Utils/Notify";
import { ToastContainer } from "react-toastify";
import { Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Diseños/Cart.css'
import './Diseños/Card.css';


const Cart = () => {
  const test = useContext(CartContext);

  const [buyer, setBuyer] = useState({
    name: "",
    adress: "",
    phone: "",
    email: "",
  });

  const orderDate = new Date().toLocaleDateString();

  const handleSubmitChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  function orderHandler() {
    const orders = {
      buyer,
      items: test.cartList.map((prod) => ({
        id: prod.id,
        title: prod.product_name,
        price: prod.price,
        quantity: prod.quantity,
      })),
      price: test.totalPrice(),
      date: orderDate,
    };

    saveToFirestore(orders);
  }

  const saveToFirestore = async (orders) => {
    const db = getFirestore();
    const createOrderFirestore = async () => {
      const newOrderRef = doc(collection(db, "orders"));
      await setDoc(newOrderRef, orders);
      return newOrderRef;
    };

    createOrderFirestore()
      .then((result) => notify(result.id))
      .catch((e) => console.log(e));

    test.cartList.forEach(async (prod) => {
      const itemRef = doc(db, "products", prod.id);
      await updateDoc(itemRef, {
        stock: increment(-prod.quantity),
      });
    });

    test.clear();
  };

  return (
    <div>
      <h1 className="tienda">BIENVENIDO A LA TIENDA!</h1>
      <hr/>
      {test.cartList.length > 0 &&
          test.cartList.map((prod) => (
            <div className="carttienda">
              <img className="imagen" src={prod.image} />
              <h1>{prod.product_name}</h1>
              <p>Cantidad: {prod.quantity}</p>
              <p>Precio: ${prod.price}</p>
              <p>
                Sub: <FormatNumber number={prod.price * prod.quantity} />
              </p>
              <button
                onClick={() => test.removeItem(prod.id)}
                style={{ cursor: "pointer" }}
                className="btn btn-primary"
              >
                {"Cancelar"}
              </button>
            </div>
          ))}
          <hr />
        {test.cartList.length > 0 ? (
          <>
            <h3 className="tienda">Completar con tu informacion</h3>
            <form className="form">
              <input
                className="inputtext"
                type="text"
                placeholder="NOMBRE"
                name="name"
                required
                onChange={handleSubmitChange}
              />
              <input
                className="inputtext"
                type="text"
                placeholder="EMAIL"
                name="email"
                required
                onChange={handleSubmitChange}
              />
              <input
                className="inputtext"
                type="text"
                placeholder="CELULAR"
                name="phone"
                required
                onChange={handleSubmitChange}
              />
              <input
                className="inputtext"
                type="text"
                placeholder="DIRECCION"
                name="adress"
                required
                onChange={handleSubmitChange}
              />
            </form>
            <hr />

            <div className="carttienda"> ENVIO GRATIS!!</div>
            <div className="total">
              PRECIO TOTAL: <FormatNumber number={test.totalPrice()} />
            </div>

            {buyer.name && buyer.adress && buyer.phone && buyer.email ? (
              <>
                <button className="btn btn-primary">
                  <input
                    onClick={() => {
                      orderHandler();
                    }}
                    type="submit"
                    value="CHECKOUT NOW"
                    style={{
                      background: "none",
                      border: "none",
                      color: "#ee9bff",
                      cursor: "pointer",
                    }}
                  />
                </button>
              </>
            ) : (
              <>
              <div className="carttienda">
                <button >
                  <input
                  className="btn btn-primary"
                    type="submit"
                    value="COMPLETE INFO"
                    disabled
                    style={{ background: "none", border: "none" }}
                  />
                </button>
              </div>
              </>
            )}
            <hr />
            <div className="carttienda">
            <button
              onClick={() => test.clear()}
              style={{ cursor: "pointer" }}
              className="btn btn-primary"
            >
              Limpiar carrito
            </button>
            </div>
          </>
        ) : (
          <>
            <img
              src="https://i.imgur.com/yQKa1Bg.png"
              width="300"
              height="auto"
              alt="empty page"
            />
            <hr />
            <div className="carttienda">
            <Link to="/" style={{ textDecoration: "none" }}>
              <button style={{ cursor: "pointer" }} className="btn btn-primary">← seguir comprando </button>
            </Link>
            </div>
          </>
        )}
    </div>
  )
}

export default Cart