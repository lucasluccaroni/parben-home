import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import CarrouselText from './components/CarrouselText/CarrouselText'

import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
      <BrowserRouter >
        <CarrouselText text={"¡15% OFF EN EFECTIVO!"} repetitions={20} />
        <Navbar />
        <Routes>
          <Route path='/' element={<h1>Home</h1>} />
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
      {/* footer aca? */}
    </>
  )
}

export default App
