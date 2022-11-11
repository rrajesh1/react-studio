import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */



function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cartData, setCartData] = useState([])
  console.log(cartData)
  const [price, setPrice] = useState(0.00)

  function addToCart(props) {
    setCartData([...cartData, props])
    const new_price = +((price + props.price).toFixed(2))
    setPrice(new_price)
  }

  return (
    <div className="App">
      <h1>Ria's Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
      <div class="row">
      <div class="Menu">

      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components

      <div class="menu_item">
        <div class="menu_top">
        <h3>{item.name}</h3>
        <img src={item.image}/>
        <p>{item.description}</p>
        </div>
        <div class="bottom_row">
        <p>{item.price}</p>
        <button onClick={() => addToCart(item)} class="button">Add to cart</button>
        </div>
        </div>
      ))}
      </div>

      <div class="Cart">
        <h2>Cart</h2>
        <div class="cart_item">
          <p class="thick">Total: </p>
          <p class="thick">${price}</p>
        </div>
        {cartData.map((item, index) => (
          <div class="cart_item">
          <p>{item.name}</p>
          <p>${item.price}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default App;
