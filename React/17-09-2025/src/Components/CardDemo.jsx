import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardDemo({ book }) {
  return (
    <Card style={{ width: '14rem' }} className="shadow-lg m-3 rounded-lg overflow-hidden">
      <Card.Img variant="top" src={book.imgAdd} style={{height:'300px' ,objectFit:'cover'}} alt={book.Name} />
      <Card.Body>
        <Card.Title className="text-lg font-bold">{book.Name}</Card.Title>
        <Card.Text className="text-sm text-gray-600">
          {book.Description}
        </Card.Text>
        <Button variant="primary">Purchase</Button>
      </Card.Body>
    </Card>
  );
}

export default CardDemo;