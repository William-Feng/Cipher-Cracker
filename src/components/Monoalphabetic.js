import { React, useState } from 'react'
import { Button, Container, Row, Col, Form } from 'react-bootstrap'

const Monoalphabetic = () => {
  const [plaintext, setPlaintext] = useState('')
  const [encodeKey, setEncodeKey] = useState('')
  const [encodedMessage, setEncodedMessage] = useState('')
  const [ciphertext, setCiphertext] = useState('')
  const [decodeKey, setDecodeKey] = useState('')
  const [decodedMessage, setDecodedMessage] = useState('')

  const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  function monoalphabeticEncode(plaintext, key) {
    let ciphertext = "";
    key = key.toUpperCase();
    for (let i = 0; i < plaintext.length; i++) {
      let char = plaintext.charAt(i);
      // Find the alphabetical index of the plaintext character and
      // append the character in the key with the corresponding index
      let lowerIndex = lowerAlphabet.indexOf(char);
      let upperIndex = upperAlphabet.indexOf(char);
      if (lowerIndex !== -1) {
        ciphertext += key.charAt(lowerIndex).toLowerCase();
      } else if (upperIndex !== -1) {
        ciphertext += key.charAt(upperIndex);
      } else {
        ciphertext += char;
      }
    }
    return ciphertext;
  }

  function monoalphabeticDecode(ciphertext, key) {
    let plaintext = "";
    key = key.toUpperCase();
    for (let i = 0; i < ciphertext.length; i++) {
      let char = ciphertext.charAt(i);
      let upperChar = char.toUpperCase();
      let keyIndex = key.indexOf(upperChar);
      // If the ciphertext character is lowercase, find its index in the key and 
      // output the character at that same index within the lowercase alphabet
      if (lowerAlphabet.indexOf(char) !== -1) {
        plaintext += lowerAlphabet.charAt(keyIndex);
      } else if (upperAlphabet.indexOf(char) !== -1) {
        plaintext += upperAlphabet.charAt(keyIndex);
      } else {
        plaintext += char;
      }
    }
    return plaintext 
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <h1>Monoalphabetic Substitution Cipher</h1>
      <Container>
        <section>
          <h3>Encoder</h3>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Form.Label column="lg" lg={2}>Plaintext</Form.Label>
              <Col>
                <Form.Group className="mb-3" controlId="plaintext">
                  <Form.Control
                    required
                    as="textarea"
                    rows={3}
                    placeholder="Enter your message"
                    value={plaintext}
                    onChange={(e) => setPlaintext(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Form.Label column="lg" lg={2}>Key</Form.Label>
              <Col>
                <Form.Group className="mb-3" controlId="encodeKey">
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter your key"
                    autoComplete="off"
                    value={encodeKey}
                    onChange={(e) => setEncodeKey(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col style={{textAlign: 'right'}}>
                <Button
                  variant="primary"
                  type="submit"
                  size="lg"
                  onClick={(e) => setEncodedMessage(monoalphabeticEncode(plaintext, encodeKey))}>
                    Encrypt
                </Button>
              </Col>
            </Row>
          </Form>
          <h5>Encrypted Ciphertext</h5>
          <p>{encodedMessage}</p>
        </section>
        <section>
          <h3>Decoder</h3>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Form.Label column="lg" lg={2}>Ciphertext</Form.Label>
              <Col>
                <Form.Group className="mb-3" controlId="ciphertext">
                  <Form.Control
                    required
                    as="textarea"
                    rows={3}
                    placeholder="Enter your message"
                    value={ciphertext}
                    onChange={(e) => setCiphertext(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Form.Label column="lg" lg={2}>Key</Form.Label>
              <Col>
                <Form.Group className="mb-3" controlId="decodeKey">
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter your key"
                    autoComplete="off"
                    value={decodeKey}
                    onChange={(e) => setDecodeKey(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col style={{textAlign: 'right'}}>
                <Button
                  variant="primary"
                  type="submit"
                  size="lg"
                  onClick={(e) => setDecodedMessage(monoalphabeticDecode(ciphertext, decodeKey))}>
                    Decrypt
                </Button>
              </Col>
            </Row>
          </Form>
          <h5>Decrypted Plaintext</h5>
          <p>{decodedMessage}</p>
        </section>
      </Container>
    </div>
  )
}

export default Monoalphabetic