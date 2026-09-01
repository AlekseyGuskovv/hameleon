import Header from './sections/Header/Header'
import Hero from './sections/Hero/Hero'
import Calculator from './sections/Calculator/Calculator'
import Promotions from './sections/Promotions/Promotions'
import Advantages from './sections/Advantages/Advantages'

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Calculator />
        <Promotions />
        <Advantages />
      </main>
    </>
  )
}

export default App