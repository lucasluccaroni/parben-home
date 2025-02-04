import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import CarrouselText from './components/CarrouselText/CarrouselText'
import TopSideText from './components/TopSideText/TopSideText'
import Footer from './components/Footer/Footer'
import HomeContainer from './components/HomeContainer/HomeContainer'
import "./App.css"


import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProductsCategoryContainer from './components/ProductsCategoryContainer/ProductsCategoryContainer'

function App() {

  return (
    <div className="App" >
    <TopSideText text={"🔥 ¡15% OFF EN EFECTIVO! 🔥"} />
      <BrowserRouter >
        <Navbar />
        <Routes>
          <Route path='/' element={<HomeContainer />} />
          <Route path="/productos" element={<ProductsCategoryContainer variantValidation={true} />} />
          <Route path='/detalle/:productId' element={<ItemDetailContainer />} />
          <Route path='/servicios' element={<h1>Servicios</h1>} />
          <Route path='/tips' element={<h1>Tips</h1>} />
          <Route path='/contacto' element={<h1>Contacto</h1>} />
          <Route path='/como-comprar' element={<h1>Como comprar</h1>} />
          <Route path='*' element={<h1>404 Página no encontrada :(</h1>} />

          <Route path="/category/:categoryId" element={<ItemListContainer message={"CATEGORIA AQUI ej. sofas"} />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
