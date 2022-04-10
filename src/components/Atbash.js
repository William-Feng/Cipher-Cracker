import { React, useState } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import './../styles.css'

const Atbash = () => {
  const [plaintext, setPlaintext] = useState('');

  function handleChange(e) {
    setPlaintext(e.target.value);
  }

  const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  function atbash(plaintext) {
    let ciphertext = "";
    for (let i = 0; i < plaintext.length; i++) {
      let char = plaintext.charAt(i);
      if (lowerAlphabet.indexOf(char) !== -1) {
        ciphertext += lowerAlphabet.charAt(26 - lowerAlphabet.indexOf(char) - 1);
      } else if (upperAlphabet.indexOf(char) !== -1) {
        ciphertext += upperAlphabet.charAt(26 - upperAlphabet.indexOf(char) - 1);
      } else {
        ciphertext += char;
      }
    }
    return ciphertext;
  }

  return (
    <div>
      <h1>Atbash Cipher</h1>
      <Container>
        <h3>Encoder/Decoder</h3>
        <Form>
          <Row>
            <Form.Label column="lg" lg={2}>Plaintext/Ciphertext</Form.Label>
            <Col>
              <Form.Group className="mb-3" controlId="plaintext">
                <Form.Control
                  required
                  as="textarea"
                  rows={3}
                  placeholder="Enter your message"
                  value={plaintext}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>
        <h5>Encrypted/Decrypted Message</h5>
        <p>{atbash(plaintext)}</p>
      </Container>
    </div>
  )
}

export default Atbash