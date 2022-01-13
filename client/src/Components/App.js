// import './App.css';
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import Navbar from "./Navbar";



function App() {
  const [items, setItems] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  //  useEffect(() => {
  //    fetch('http://localhost:3000/items',{
  //      headers: {
  //        'Access-Control-Allow-Origin': '*'
  //      }
  //    })

  //    .then(resp => resp.json())
  //    .then(items => {
  //     setItems(items)
  //    })
  //  },[])

  return (
    <>
     <Navbar
        user={user} setUser={setUser}
      />
      <main>
        {user ? (
          <Switch>
            <Route path="/home">
            </Route>
            <Route path="/">
              <Home user={user} />
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Route path="/signup">
              <SignUp setUser={setUser} />
            </Route>
            {/* <Route path="/">
              <Home user={user} />
            </Route> */}
            <Route path="/">
              <Login setUser={setUser} />
            </Route>
          </Switch>
        )}
      </main>
    </>
  );
}

export default App;
