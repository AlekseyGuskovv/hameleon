import Header from './sections/Header/Header'
import Hero from './sections/Hero/Hero'
import Calculator from './sections/Calculator/Calculator'
import Promotions from './sections/Promotions/Promotions'
import Advantages from './sections/Advantages/Advantages'
import Portfolio from './sections/Portfolio/Portfolio'
import Price from './sections/Price/Price'
import Production from './sections/Production/Production'

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Calculator />
        <Promotions />
        <Advantages />
        <Portfolio />
        <Price />
        <Production />
      </main>
    </>
  )
}

export default App