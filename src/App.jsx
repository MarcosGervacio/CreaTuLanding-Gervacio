import './App.css'
import NavBar from './components/NavBar'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer'
import ProductDetail from './components/ProductDetail'
import ErrorComponent from './components/ErrorComponent'

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<ItemListContainer text="Bienvenidos a GamerShop" />}/>
          <Route exact path='/category/:catId' element={<ItemListContainer text="Bienvenidos a GamerShop" />}/>
          <Route exact path='/product/:id' element={<ProductDetail />}/>
          <Route exact path='*' element={<ErrorComponent />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
