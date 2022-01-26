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
import Admin from "./Admin";
import UserList from "./UserList";
import Edit from "./Edit"

function App() {
  const [items, setItems] = useState([]);
  const [user, setUser] = useState(null);
  const [contact, setContacts] = useState([])
  const [cartItems, setCartItems] = useState([]);
  const [admin, setAdmin] = useState(false)

  // const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch('/items')
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

  const onAdd = (item, e) => {
    e.preventDefault();

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

  function handleDeleteUser(id) {
    const updatedUsersArray = user.filter((user) => user.id !== id);
    setUser(updatedUsersArray)
  }

  function handleUpdatedUser(updatedUser) {
    const updatedUsersArray = user.map((user) => {
      if (user.id === updatedUser.id) {
        return updatedUser;
      } else {
        return user;
      }
    });
    setUser(updatedUsersArray)
  }


  return (
    <div className="d-flex flex-column vh-100">

      <Navbar
        user={user} setUser={setUser} countCartItems={cartItems.length} admin={admin} setAdmin={setAdmin}
      />

      <main className="container-fluid bg-light mt-md-5 mt-lg-0">
        {user ? (

          <Switch>

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

            <Route path="/home">
              <HomePage />
              <Testimonial />
            </Route>



            <Route path="/">
              <Home />
            </Route>

          </Switch>
        ) : admin ? (
          <Switch>
            {/* 
            <Route path='/admin/user'>
              <UserPage />
            </Route> */}

            <Route path="/admin/edit">
              <Edit handleUpdatedUser={handleUpdatedUser} user={user} />
            </Route>

            <Route path="/admin">
              <UserList user={user} setUser={setUser} handleDeleteUser={handleDeleteUser}  />
            </Route>

          </Switch>
        ) : (
          <Switch>

            <Route path="/home/pickup/contact">
              <Contact handleContact={handleContact} />
            </Route>

            <Route path="/home/pickup/cart">
              <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
            </Route>

            <Route path="/home/pickup">
              <div >
                <ItemList items={items} onAdd={onAdd} />
              </div>
            </Route>

            <Route path="/signup">
              <SignUp setUser={setUser} />
            </Route>

            <Route path="/login">
              <Login setUser={setUser} />
            </Route>

            <Route path="/admin">
              <Admin admin={admin} setAdmin={setAdmin} />
            </Route>

            <Route path="/home">
              <HomePage />
              <Testimonial />
            </Route>

            <Route path="/">
              <Home />
            </Route>

          </Switch>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
