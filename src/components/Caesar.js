import { React, useState } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'

const Caesar = () => {
  const [plaintext, setPlaintext] = useState('')
  const [encodeKey, setEncodeKey] = useState('')
  const [ciphertext, setCiphertext] = useState('')
  const [decodeKey, setDecodeKey] = useState('')

  const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  function caesarEncode(plaintext, shift) {
    if (!shift) shift = 0;
    let ciphertext = "";
    for (let i = 0; i < plaintext.length; i++) {
      let char = plaintext.charAt(i);
      let lowerIndex = lowerAlphabet.indexOf(char);
      let upperIndex = upperAlphabet.indexOf(char);
      // If lowercase, find its index in the alphabet, add the shift and append to ciphertext
      if (lowerIndex !== -1) {
        ciphertext += lowerAlphabet.charAt(((lowerIndex + shift) % 26 + 26) % 26);
      } else if (upperIndex !== -1) {
        ciphertext += upperAlphabet.charAt(((upperIndex + shift) % 26 + 26) % 26);
      } else {
        ciphertext += char;
      }
    }
    return ciphertext;
  }

  function caesarDecode(ciphertext, shift) {
    // Decoding is the same as encoding, except we shift backwards
    return caesarEncode(ciphertext, 26 - shift);
  }
  
  return (
    <div>
      <h1>Caesar Cipher</h1>
      <Container>
        <section>
          <h3>Encoder</h3>
          <Form>
            <Row>
              <Form.Label column="lg" lg={2}>Plaintext</Form.Label>
              <Col>
                <Form.Group className="mb-3" controlId="plaintext">
                  <Form.Control
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
                    type="number"
                    placeholder="Enter your key"
                    autoComplete="off"
                    value={encodeKey}
                    onChange={(e) => setEncodeKey(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col />
              <Col />
            </Row>
          </Form>
          <h5>Encrypted Ciphertext</h5>
          <p>{caesarEncode(plaintext, parseInt(encodeKey))}</p>
        </section>
        <section>
          <h3>Decoder</h3>
          <Form>
            <Row>
              <Form.Label column="lg" lg={2}>Ciphertext</Form.Label>
              <Col>
                <Form.Group className="mb-3" controlId="ciphertext">
                  <Form.Control
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
                    type="number"
                    placeholder="Enter your key"
                    autoComplete="off"
                    value={decodeKey}
                    onChange={(e) => setDecodeKey(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col />
              <Col />
            </Row>
          </Form>
          <h5>Decrypted Plaintext</h5>
          <p>{caesarDecode(ciphertext, parseInt(decodeKey))}</p>
        </section>
      </Container>
    </div>
  )
}

export default Caesar