import { Header } from './components/Header'
import { WhatsAppFloat } from './components/WhatsAppFloat'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Differentials } from './sections/Differentials'
import { FAQ } from './sections/FAQ'
import { Footer } from './sections/Footer'
import { Hero } from './sections/Hero'
import { PracticeAreas } from './sections/PracticeAreas'
import { Process } from './sections/Process'
import { useScrollReveal } from './hooks/useScrollReveal'

function App() {
  useScrollReveal()

  return (
    <>
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
      <Header />
      <main id="conteudo">
        <Hero />
        <About />
        <PracticeAreas />
        <Process />
        <Differentials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}

export default App
