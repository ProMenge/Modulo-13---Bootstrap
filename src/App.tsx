import { GlobalCss } from './styles'
import { Header } from './components/Header/Header'
import { ImageCarousel } from './components/ImageCarousel/ImageCarousel'
import { CardSection } from './components/CardSection/CardSection'

function App() {
  return (
    <>
      <GlobalCss />
      <Header />
      <ImageCarousel />
      <CardSection />
    </>
  )
}

export default App
