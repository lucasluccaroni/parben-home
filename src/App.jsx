import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import CarrouselText from './components/CarrouselText/CarrouselText'


function App() {

  return (
    <>
      <CarrouselText text={"¡15% OFF EN EFECTIVO!"} repetitions={20}/>
      <Navbar />
      <ItemListContainer message={"ItemListContainer"} />
      <h1>Bienvenido a JJMuebles!</h1>

    </>
  )
}

export default App
