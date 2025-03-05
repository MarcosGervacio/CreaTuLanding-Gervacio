import './App.css'
import NavBar from './components/NavBar'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer'
import ProductDetail from './components/ProductDetail'
import ErrorComponent from './components/ErrorComponent'
import CartComponent from './components/CartComponent'
import CheckoutComponent from './components/CheckoutComponent'
import LoginComponent from './components/LoginComponent'

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<ItemListContainer text="Bienvenidos a GamerShop" />}/>
          <Route exact path='/category/:catId' element={<ItemListContainer text="Bienvenidos a GamerShop" />}/>
          <Route exact path='/product/:id' element={<ProductDetail />}/>
          <Route exact path='/cart' element={<CartComponent />}/>
          <Route exact path='/checkout' element={<CheckoutComponent />}/>
          <Route exact path='/login' element={<LoginComponent />}/>
          <Route exact path='*' element={<ErrorComponent />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
