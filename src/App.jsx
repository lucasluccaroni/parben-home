import TopSideText from './components/TopSideText/TopSideText'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Navbar from './components/Navbar/Navbar'
import HomeView from './components/HomeView/HomeView'
import ProductsCategoryContainer from './components/ProductsCategoryContainer/ProductsCategoryContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ServicesView from './components/ServicesView/ServicesView'
import ComoComprarView from './components/ComoComprarView/ComoComprarView'
import ContactView from './components/ContactView/ContactView'
import QuienesSomos from './components/QuienesSomos/QuienesSomos'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ToastContainer } from 'react-toastify'
import "./App.css"

function App() {

  return (
    <div className="App" >
      <TopSideText text={"🔥 ¡DESCUENTO EN EFECTIVO! 🔥"} />
      <BrowserRouter >
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path='/' element={<HomeView />} />
          <Route path="/productos" element={<ProductsCategoryContainer variantValidation={true} />} />
          <Route path='/detalle/:productId' element={<ItemDetailContainer />} />
          <Route path='/servicios' element={<ServicesView />} />
          <Route path='/quienes-somos' element={<QuienesSomos />} />
          <Route path='/contacto' element={<ContactView />} />
          <Route path='/como-comprar' element={<ComoComprarView />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path='*' element={<h1>404 Página no encontrada</h1>} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
