import React from 'react'
import { Container, CardGroup, Card } from 'react-bootstrap'
import { BrowserRouter as Routes, Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
      <Container id="container-home">
        <CardGroup>
          <Card id="gap">
            <Card.Img variant="top" src={require("../assets/atbash.jpg")} />
            <Card.Body>
              <Card.Title>Atbash Cipher</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Substitution</Card.Subtitle>
              <Card.Text>
                Each letter of the alphabet is mapped to its reverse, such that A
                becomes Z, B becomes Y and so on. Thus, no key is required.
              </Card.Text>
            </Card.Body>
            <Card.Footer as={Link} to={"/atbash"}>
              <small className="text-muted">Start encoding/decoding</small>
            </Card.Footer>
          </Card>
          <Card id="gap">
            <Card.Img variant="top" src={require("../assets/caesar.png")} />
            <Card.Body>
              <Card.Title>Caesar Cipher</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Substitution</Card.Subtitle>
              <Card.Text>
                Each letter is replaced by the letter that is a fixed offset away down
                the alphabet, such that this shift (key) remains constant for the ciphertext.
              </Card.Text>
            </Card.Body>
            <Card.Footer as={Link} to={"/caesar"}>
              <small className="text-muted">Start encoding/decoding</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={require("../assets/monoalphabetic.jpeg")} />
            <Card.Body>
              <Card.Title>Monoalphabetic Cipher</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Substitution</Card.Subtitle>
              <Card.Text>
                Each letter of the plaintext is mapped to the corresponding letter
                within a fixed, unordered alphabet (key).
              </Card.Text>
            </Card.Body>
            <Card.Footer as={Link} to={"/monoalphabetic"}>
              <small className="text-muted">Start encoding/decoding</small>
            </Card.Footer>
          </Card>
        </CardGroup>
        <CardGroup>
          <Card id="gap">
            <Card.Img variant="top" src={require("../assets/railfence.png")} />
            <Card.Body>
              <Card.Title>Railfence Cipher</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Transposition</Card.Subtitle>
              <Card.Text>
                The plaintext is written downwards diagonally in a zigzag over a
                certain number of rows (key) and then bouncing back up diagonally
                to the top row. This process is repeated and the ciphertext is read off
                row by row.
              </Card.Text>
            </Card.Body>
            <Card.Footer as={Link} to={"/railfence"}>
              <small className="text-muted">Start encoding/decoding</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={require("../assets/vigenere.png")} />
            <Card.Body>
              <Card.Title>Vigenère Cipher</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Polyalphabetic</Card.Subtitle>
              <Card.Text>
                Each letter is mapped to a different letter according to the Vigenère
                Square, based on a key that repeats for the entire length of the plaintext.
                Alternatively, taking the sum between the plaintext letter and key values
                will also encrypt the message.
              </Card.Text>
            </Card.Body>
            <Card.Footer as={Link} to={"/vigenere"}>
              <small className="text-muted">Start encoding/decoding</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </Container>
    </div>
  )
}

export default Home