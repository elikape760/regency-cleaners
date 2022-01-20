import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import Navbar from "./Navbar";
import HomePage from "./HomePage";
import ItemList from "./ItemList"
import Testimonial from "./Testimonial";
import Contact from "./Contact";
import Cart from "./Cart";
import Footer from "./Footer";



function App() {
  const [items, setItems] = useState([]);
  const [user, setUser] = useState(null);
  const [contact, setContacts] = useState([])
  const [cartItems, setCartItems] = useState([]);
  // const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch('http://localhost:3000/items')
      .then(resp => resp.json())
      .then(items => {
        setItems(items)
      })
  }, [])

  function handleContact(newContact) {
    const updatedContactsArray = [...contact, newContact];
    setContacts(updatedContactsArray);
  }

  //  const displayedItems = items.filter((item) => {
  //   return item.name.toLowerCase().includes(searchTerm.toLowerCase())
  // })

  const onAdd = (item) => {
    const exist = cartItems.find(x => x.id === item.id);
    if (exist) {
      setCartItems(cartItems.map(x =>
        x.id === item.id ? { ...exist, qty: exist.qty + 1 } : x
      )
      );
    } else {
      setCartItems([...cartItems, { ...item, qty: 1 }])
    }
  };

  const onRemove = (item) => {
    const exist = cartItems.find((x) => x.id === item.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== item.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === item.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };


  return (
    <body className="d-flex flex-column vh-100">
      <Navbar
        user={user} setUser={setUser} countCartItems={cartItems.length}
      />
      <main className="container mt-5">
        {user ? (
          <Switch>
            {/* <Route path="/home">
            </Route> */}

            <Route path="/home/pickup/contact">
              <Contact handleContact={handleContact} />
            </Route>

            <Route path="/home/pickup/cart">
              <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
            </Route>

            <Route path="/home/pickup">
              <div className="row">
                <ItemList items={items} onAdd={onAdd} />
              </div>
            </Route>


            <Route path="/">
              <Home user={user} />
              <HomePage />
              <Testimonial />
            </Route>

          </Switch>
        ) : (
          <Switch>
            <Route path="/signup">
              <SignUp setUser={setUser} />
            </Route>

            <Route path="/login">
              <Login setUser={setUser} />
            </Route>

            <Route path="/">
              <Home user={user} />
              <HomePage />
            </Route>
          </Switch>
        )}
      </main>
        <Footer/>
    </body>
  );
}

export default App;
