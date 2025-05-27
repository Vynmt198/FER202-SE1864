
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

export default function OrchidCard({ orchid }) {
  return (
    <Card style={{ width: '15rem' }} className="m-2 shadow-sm">
      <Card.Img variant="top" src={orchid.image} height="200" />
      <Card.Body>
        <Card.Title>{orchid.name}</Card.Title>
        <Card.Text>
          <strong>Origin:</strong> {orchid.origin}<br />
          <strong>Color:</strong> {orchid.color}<br />
          <strong>Category:</strong> {orchid.category}<br />
          <strong>Rating:</strong> {orchid.rating} ⭐<br />
          <div >
          <strong >Price:</strong> {orchid.numberOfLike}$ 
          <button style={{ marginLeft: '5px' }} variant="warning">Buy now</button>             
          </div><br />
          {orchid.isSpecial && <Badge bg="warning">Special</Badge>}{" "}
          {orchid.isNatural && <Badge bg="success">Natural</Badge>}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
