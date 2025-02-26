import TopSideText from './components/TopSideText/TopSideText'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Navbar from './components/Navbar/Navbar'
import HomeView from './components/HomeView/HomeView'
import ProductsCategoryContainer from './components/ProductsCategoryContainer/ProductsCategoryContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ServicesView from './components/ServicesView/ServicesView'
import TipsView from './components/TipsView/TipsView'
import ContactView from './components/ContactView/ContactView'
import ComoComprar from './components/ComoComprar/ComoComprar'
import Footer from './components/Footer/Footer'
import "./App.css"

import { ToastContainer } from 'react-toastify'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <div className="App" >
      <TopSideText text={"🔥 ¡15% OFF EN EFECTIVO! 🔥"} />
      <BrowserRouter >
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<HomeView />} />
          <Route path="/productos" element={<ProductsCategoryContainer variantValidation={true} />} />
          <Route path='/detalle/:productId' element={<ItemDetailContainer />} />
          <Route path='/servicios' element={<ServicesView />} />
          <Route path='/tips' element={<TipsView />} />
          <Route path='/contacto' element={<ContactView />} />
          <Route path='/como-comprar' element={<ComoComprar />} />
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
