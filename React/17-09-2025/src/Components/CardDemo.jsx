import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function BookCard({ book }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const previewText = book.Description.slice(0, 100);

  return (
    <Card className="h-full flex flex-col shadow-md">
      <Card.Img
        variant="top"
        src={book.imgAdd}
        className="h-[250px] w-full object-cover"
        alt={book.Name}
      />
      <Card.Body className="flex flex-col flex-grow">
        <Card.Title className="text-lg font-bold">{book.Name}</Card.Title>

        <Card.Text className="flex-grow">
          {isExpanded
            ? book.Description
            : previewText + (book.Description.length > 100 ? "..." : "")}
        </Card.Text>

        {book.Description.length > 100 && (
          <Button
            variant="link"
            className="p-0 text-blue-600 hover:underline self-start"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Read Less" : "Read More"}
          </Button>
        )}

        <Button variant="primary" className="mt-2 self-start">
          Purchase
        </Button>
      </Card.Body>
    </Card>
  );
}

export default BookCard;
