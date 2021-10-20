
import React, {useState} from 'react'
import './App.css';
import Main from './components/Main/Main';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailCotaainer/ItemDetailContainer';





function App() {

  const [items, setItems] = useState(0)

  return (
    <BrowserRouter>
      <NavBar items={items}/>
      <Switch/>
      <Route exact path="/">
        <h1>ACA VA LA SECCION HOME</h1>
      </Route>
      <Route exact path="/tienda">
        <Main/>
      </Route>
      <Route exact path="/nosotros">
        <h1>ACA VA LA SECCION NOSOTROS</h1>
      </Route>
      <Route exact path="/contacto">
        <h1>ACA VA LA SECCION CONTACTO</h1>
      </Route>
      <Route exact path="/tienda/item/:id">
        <ItemDetailContainer items={items} setItems={setItems}/>
      </Route>
    </BrowserRouter>
  );
}

export default App;
