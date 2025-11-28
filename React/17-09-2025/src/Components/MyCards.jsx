import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import CardDemo from './CardDemo';

function MyCards() {

    const books = [
        {
            id: 1,
            Name: "Solo Leveling",
            type: "Manhwa",
            imgAdd: "https://imgs.search.brave.com/-KuzEzFzO81q8A3hD5mTdAPK436bnVLwyP-NqsGmBzc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QllUSXdZemsz/WW1RdFptTXdOUzAw/WkRBd0xUazVZMk10/T1RFd09ERmxabUV4/TXpsaVhrRXlYa0Zx/Y0djQC5qcGc",
            Description: "Action-fantasy manhwa jisme ek weak hunter slowly world-class hunter ban jaata hai after gaining 'system' power. Fast-paced, strong MC, epic boss fights."
        },
        {
            id: 2,
            Name: "Demon Slayer (Kimetsu no Yaiba)",
            type: "Manga / Anime",
            imgAdd: "https://imgs.search.brave.com/SkCkEPdPzpFo18aCip4iM5Bd3XRphv25J5PRKNJpq0s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvZGVt/b24tc2xheWVyLWFu/aW1lLWthbWFkby10/YW5qaXJvLWFuZC1r/eW9qdXJvLXJlbmdv/a3UtbXpscndid2Nm/ZHQ5MGZkYy5qcGc",
            Description: "Period-action fantasy jahan Tanjiro apni behen ko demon se wapas insaan banane ki koshish karta hai. Emotional story + beautiful sword fights."
        },
        
        
        {
            id: 3,
            Name: "Jujutsu Kaisen",
            type: "Manga / Anime",
            imgAdd: "https://imgs.search.brave.com/SnQdZgN6WSxKwT4Il4ZglsUzUkmp1jU8CA6EuJZroCM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93MC5w/ZWFrcHguY29tL3dh/bGxwYXBlci8xMzkv/MzUyL0hELXdhbGxw/YXBlci1nb2pvLWp1/anV0c3Uta2Fpc2Vu/LWdvam8tc2F0b3J1/LWpqay1zYXRvcnUt/Z29qby1qdWp1dHN1/LWthaXNlbi1hbmlt/ZS10aHVtYm5haWwu/anBn",
            Description: "Modern supernatural shounen with strong ensemble cast, curses, and stylish combat choreography."
        },
        {
            id: 4,
            Name: "Attack on Titan",
            type: "Manga / Anime",
            imgAdd: "https://imgs.search.brave.com/elg4MGmfrcc0wtEaZFkp1avn1WXBjFBTAI6piG1GPb8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzM0L2Fi/L2UzLzM0YWJlMzU4/OGRjNzQxNWEyNmUx/NmViNzdiNDhjMDBj/LmpwZw",
            Description: "Dark fantasy jisme humanity giants (Titans) se fight karti hai. Intense plot twists, political drama aur large-scale action."
        },
        
       
    ];



    return (
        <>
            <Container>
                <Row className="grid grid-cols-3 gap-4 items-stretch">
                    {
                        books.map((book)=>
                            <Col ><CardDemo  book={book} /></Col>)
                    }
                </Row>
            </Container>
        </>
    )
}

export default MyCards