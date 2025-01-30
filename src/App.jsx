import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import CarrouselText from './components/CarrouselText/CarrouselText'
import Footer from './components/Footer/Footer'
import HomeContainer from './components/HomeContainer/HomeContainer'
import "./App.css"

import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
        <CarrouselText text={"¡15% OFF EN EFECTIVO!"} repetitions={20} />
      <BrowserRouter >
        <Navbar />
        <Routes>
          <Route path='/' element={<HomeContainer/>} />
          <Route path="/productos" element={<ItemListContainer message={"Todos los productos"} />} /> {/* cambiar a categorias */}
          <Route path='/detalle/:productId' element={<ItemDetailContainer />} />
          <Route path='/servicios' element={<h1>Servicios</h1>} />
          <Route path='/tips' element={<h1>Tips</h1>} />
          <Route path='/contacto' element={<h1>Contacto</h1>} />
          <Route path='/como-comprar' element={<h1>Como comprar</h1>} />
          <Route path='*' element={<h1>404 Página no encontrada :( </h1>} />

          <Route path="/category/:categoryId" element={<ItemListContainer message={"CATEGORIA AQUI ej. sofas"} />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
