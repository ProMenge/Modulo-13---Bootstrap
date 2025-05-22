import { Card, Col, Container, Row } from 'react-bootstrap'

const cardData = [
  {
    title: 'Card 1',
    text: 'Primeiro Card Aleatório.',
    img: 'https://picsum.photos/300/200?random=1'
  },
  {
    title: 'Card 2',
    text: 'Segundo Card Aleatório',
    img: 'https://picsum.photos/300/200?random=2'
  },
  {
    title: 'Card 3',
    text: 'Terceiro Card Aleatório.',
    img: 'https://picsum.photos/300/200?random=3'
  },
  {
    title: 'Card 4',
    text: 'Quarto Card Aleatório',
    img: 'https://picsum.photos/300/200?random=4'
  },
  {
    title: 'Card 5',
    text: 'Quinto Card Aleatório',
    img: 'https://picsum.photos/300/200?random=5'
  },
  {
    title: 'Card 6',
    text: 'Sexto Card Aleatório',
    img: 'https://picsum.photos/300/200?random=6'
  }
]

export function CardSection() {
  return (
    <Container className="my-5" id="cards">
      <Row>
        {cardData.map((card, index) => (
          <Col key={index} xs={12} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={card.img} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}
