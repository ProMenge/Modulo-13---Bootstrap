import { useEffect, useState } from 'react'
import { Carousel, Spinner } from 'react-bootstrap'
import { DescInfo, DescTitle } from './styles'

function getRandomSeed() {
  return Math.floor(Math.random() * 1000)
}

export function ImageCarousel() {
  const [loadedCount, setLoadedCount] = useState(0)
  const [images, setImages] = useState<number[]>([]) // Estado para armazenar as seeds das imagens

  // Gerar as seeds apenas uma vez quando o componente monta
  useEffect(() => {
    setImages(Array.from({ length: 3 }, () => getRandomSeed()))
  }, []) // Array de dependências vazio para rodar apenas na montagem

  const handleImageLoad = () => {
    setLoadedCount((prev) => prev + 1)
  }

  const allImagesLoaded = loadedCount === images.length && images.length > 0

  return (
    <>
      {!allImagesLoaded && (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: 400 }}
        >
          <Spinner animation="border" role="status" variant="primary">
            <span className="visually-hidden">Carregando...</span>
          </Spinner>
        </div>
      )}

      <Carousel
        id="carousel"
        // Estilo para esconder o carrossel até que todas as imagens carreguem
        style={{
          opacity: allImagesLoaded ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out'
        }}
      >
        {images.map((seed, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={`https://picsum.photos/seed/${seed}/1000/400`}
              onLoad={handleImageLoad}
              onError={() =>
                console.error(`Falha ao carregar imagem com seed: ${seed}`)
              }
              style={{ display: 'block' }} // Garante que a imagem esteja no layout
            />
            <Carousel.Caption>
              <DescTitle>Imagem Aleatória {index + 1}</DescTitle>
              <DescInfo>seed: {seed}</DescInfo>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  )
}
