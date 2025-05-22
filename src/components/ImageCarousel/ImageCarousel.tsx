import { Carousel } from 'react-bootstrap'
import { DescInfo, DescTitle } from './styles'

function getRandomSeed() {
  return Math.floor(Math.random() * 1000) // número entre 0 e 999
}

export function ImageCarousel() {
  const images = Array.from({ length: 3 }, () => getRandomSeed())

  return (
    <Carousel id="carousel">
      {images.map((seed, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={`https://picsum.photos/seed/${seed}/1000/400`}
          />
          <Carousel.Caption>
            <DescTitle>Imagem Aleatória {index + 1}</DescTitle>
            <DescInfo>seed: {seed}</DescInfo>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}
