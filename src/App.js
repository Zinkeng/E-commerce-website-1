import Navbar from "./Components/Navbar/Navbar";
import Slider from "./Components/Slider/Slider";
import Screen from "./Components/Screen";
import Cards from "./Components/Cards/Cards";
import Footer from "./Components/Footer/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Shoes from "./Components/Pages/Shoes";
import Phone from "./Components/Pages/Phone";
import Rain from "./Components/Pages/Rain";
import Games from "./Components/Pages/Game";
import Tv from "./Components/Pages/Tv";
import Kitchen from "./Components/Pages/Kitchen";
import Movie from "./Components/Pages/Movie";
import School from "./Components/Pages/School";
import Dress from "./Components/Pages/Dress";
import data from "./data";
import { useState, useEffect } from "react";
import Cart from "./Components/Cart/Cart";
import Cosmetics from "./Components/Pages/Cosmetics";
import CartFooter from "./Components/CartFooter/CartFooter";
import Checkout from "./Components/Checkout/Checkout";
import Signup from "./Components/signup/signup";
import Login from "./Components/Login/Login";
import validation from "./Components/Validation";
import axios from "axios";

function App() {
  const {
    DressProducts,
    GameProducts,
    TvProducts,
    phoneProducts,
    rainProducts,
    shoeProducts,
    movieProducts,
    schoolProducts,
    kitchenProducts,
    cosmeticProducts,
    colors,
  } = data;
  const [cartItems, setCartItems] = useState([]);
  //Sign States
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Cpassword, setCpassword] = useState("");

  const [errors, setErrors] = useState({});
  const [DataIsCorrect, setDataIsCorrect] = useState(false);

  let navigate = useNavigate();

  const onSignUp = (e) => {
    const user = { firstName, lastName, email, password };
    console.log(user);
    console.log(firstName + lastName);
    e.preventDefault();
    setErrors(validation(firstName, lastName, email, password, Cpassword));
    navigate("/homepage");

    setDataIsCorrect(true);

    // axios.post(
    //   "http://localhost/priangan/api/user/login",
    //   {
    //     userna: this.state.username,
    //     password: this.state.password,
    //   },
    //   {
    //     headers: {
    //       "Content-type": "application/json; charset=UTF-8",
    //     }
    //   }
    // )
  };

  const display = (e) => {
    console.log(email, password);
    e.preventDefault();
    setErrors(validation(email, password));
    console.log(password);
  };

  // useEffect(()=>{
  //     if(Object.keys(errors).length === 0){
  //       navigate('/homepage')

  //     }
  // },[errors])

  var Total = cartItems.reduce((a, c) => a + c.qty * c.price, 0);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  const onDelete = (product) => {
    setCartItems(cartItems.filter((x) => x.id !== product.id));
  };
  return (
    <>
      <Routes>
        <Route
          exact
          path="/Signup"
          element={
            <>
              <Signup
                firstName={firstName}
                lastName={lastName}
                password={password}
                Cpassword={Cpassword}
                email={email}
                setfirstName={setfirstName}
                setlastName={setlastName}
                setEmail={setEmail}
                setPassword={setPassword}
                setCpassword={setCpassword}
                errors={errors}
                setErrors={setErrors}
                onSignup={onSignUp}
              />
            </>
          }
        />

        <Route
          path="/"
          element={
            <>
              {" "}
              <Navbar
                cartItems={cartItems}
                colors={colors}
                firstName={firstName}
              />
              <Slider />
              <Screen />
              <Cards />
              <Footer />
            </>
          }
        />

        <Route
          path="/shoes"
          element={
            <>
              <Navbar
                cartItems={cartItems}
                colors={colors}
                firstName={firstName}
              />
              <Shoes
                shoeProducts={shoeProducts}
                onAdd={onAdd}
                onRemove={onRemove}
              />
              <Footer />
            </>
          }
        />

        <Route
          path="/phones"
          element={
            <>
              {" "}
              <Navbar
                cartItems={cartItems}
                colors={colors}
                firstName={firstName}
              />
              <Phone
                phoneProducts={phoneProducts}
                onAdd={onAdd}
                onRemove={onRemove}
              />
              <Footer />
            </>
          }
        />

        <Route
          path="/rain"
          element={
            <>
              <Navbar
                cartItems={cartItems}
                colors={colors}
                firstName={firstName}
              />
              <Rain
                rainProducts={rainProducts}
                onAdd={onAdd}
                onRemove={onRemove}
              />
              <Footer />
            </>
          }
        />

        <Route
          path="/games"
          element={
            <>
              <Navbar
                cartItems={cartItems}
                colors={colors}
                firstName={firstName}
              />
              <Games
                GameProducts={GameProducts}
                onAdd={onAdd}
                onRemove={onRemove}
              />
              <Footer />
            </>
          }
        />

        <Route
          path="/tv"
          element={
            <>
              <Navbar
                cartItems={cartItems}
                colors={colors}
                firstName={firstName}
              />
              <Tv TvProducts={TvProducts} onAdd={onAdd} onRemove={onRemove} />{" "}
              <Footer />
            </>
          }
        />

        <Route
          path="/kitchen"
          element={
            <>
              <Navbar
                cartItems={cartItems}
                colors={colors}
                firstName={firstName}
              />
              <Kitchen
                kitchenProducts={kitchenProducts}
                onAdd={onAdd}
                onRemove={onRemove}
              />
              <Footer />
            </>
          }
        />

        <Route
          path="/movies"
          element={
            <>
              <Navbar
                cartItems={cartItems}
                colors={colors}
                firstName={firstName}
              />{" "}
              <Movie
                movieProducts={movieProducts}
                onAdd={onAdd}
                onRemove={onRemove}
              />{" "}
              <Footer />
            </>
          }
        />

        <Route
          path="/school"
          element={
            <>
              <Navbar
                cartItems={cartItems}
                colors={colors}
                firstName={firstName}
              />
              <School
                schoolProducts={schoolProducts}
                onAdd={onAdd}
                onRemove={onRemove}
              />{" "}
              <Footer />
            </>
          }
        />

        <Route
          path="/dresses"
          element={
            <>
              <Navbar
                cartItems={cartItems}
                colors={colors}
                firstName={firstName}
              />
              <Dress
                DressProducts={DressProducts}
                onAdd={onAdd}
                onRemove={onRemove}
              />
              <Footer />
            </>
          }
        />

        <Route
          path="/cart"
          element={
            <>
              <Navbar
                cartItems={cartItems}
                colors={colors}
                firstName={firstName}
              />
              <Cart
                cartItems={cartItems}
                onAdd={onAdd}
                onRemove={onRemove}
                onDelete={onDelete}
              />
              <CartFooter />
            </>
          }
        />

        <Route
          path="/cosmetics"
          element={
            <>
              <Navbar
                cartItems={cartItems}
                colors={colors}
                firstName={firstName}
              />
              <Cosmetics
                cosmeticProducts={cosmeticProducts}
                onAdd={onAdd}
                onRemove={onRemove}
              />
              <Footer />
            </>
          }
        />

        <Route
          path="/Checkout"
          element={
            <>
              {" "}
              <Navbar
                cartItems={cartItems}
                colors={colors}
                firstName={firstName}
              />{" "}
              <Checkout Total={Total} />{" "}
            </>
          }
        />

        <Route
          path="/login"
          element={
            <Login
              setPassword={setPassword}
              setEmail={setEmail}
              errors={errors}
              display={display}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
