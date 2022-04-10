import { React, useState } from 'react'
import { Button, Container, Row, Col, Form } from 'react-bootstrap'

const Vigenere = () => {
  const [plaintext, setPlaintext] = useState('')
  const [encodeKey, setEncodeKey] = useState('')
  const [encodedMessage, setEncodedMessage] = useState('')
  const [ciphertext, setCiphertext] = useState('')
  const [decodeKey, setDecodeKey] = useState('')
  const [decodedMessage, setDecodedMessage] = useState('')

  const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
  function vigenereEncode(plaintext, key) {
    let ciphertext = "";
    key = key.toUpperCase();
    let nonLetterShift = 0;
    for (let i = 0; i < plaintext.length; i++) {
      let char = plaintext.charAt(i);
      // Find single key corresponding to character in plaintext
      // Subtract the number of non-letter occurrences, then mod the total key length
      let currKey = key.charAt((i - nonLetterShift) % key.length);
      let shift = upperAlphabet.indexOf(currKey);
      let lowerIndex = lowerAlphabet.indexOf(char);
      let upperIndex = upperAlphabet.indexOf(char);
      if (lowerIndex !== -1) {
        // Sum the indexes of the characters within the plaintext and key, then mod 26
        ciphertext += lowerAlphabet.charAt((lowerIndex + shift) % 26);
      } else if (upperIndex !== -1) {
        ciphertext += upperAlphabet.charAt((upperIndex + shift) % 26);
      } else {
        ciphertext += char;
        nonLetterShift++;
      }
    }
    return ciphertext;
  }
  
  function vigenereDecode(ciphertext, key) {
    key = key.toUpperCase();
    let encodeKey = "";
    // Decoding is the same and encoding, except we need to shift each character of key
    for (let i = 0; i < key.length; i++) {
      let char = key.charAt(i);
      encodeKey += upperAlphabet.charAt(26 - (upperAlphabet.indexOf(char)));
    }
    return vigenereEncode(ciphertext, encodeKey);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <h1>Vigenère Cipher</h1>
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
                  onClick={(e) => setEncodedMessage(vigenereEncode(plaintext, encodeKey))}>
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
                  onClick={(e) => setDecodedMessage(vigenereDecode(ciphertext, decodeKey))}>
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

export default Vigenere