import { React, useState } from 'react'
import { Button, Container, Row, Col, Form } from 'react-bootstrap'

const Railfence = () => {
  const [plaintext, setPlaintext] = useState('')
  const [encodeKey, setEncodeKey] = useState('')
  const [encodedMessage, setEncodedMessage] = useState('')
  const [ciphertext, setCiphertext] = useState('')
  const [decodeKey, setDecodeKey] = useState('')
  const [decodedMessage, setDecodedMessage] = useState('')

  function railfenceEncode(plaintext, key) {
    console.log("Entered with plaintext " + plaintext + " and key " +  key)
    if (!key) return "";
    plaintext = plaintext.toUpperCase().replace(/[^A-Z]/g, "");
    let ciphertext = "";
    let row = 0;
    // Loop to go through all rows except the final one
    while (row < key - 1) {
      // Gap to next plaintext character to be appended to ciphertext
      let gap = 2 * (key - row - 1);
      // Due to changes in direction, the gap may be reset (every 2 times)
      let reset = 0;
      for (let i = row; i < plaintext.length;) {
        ciphertext += plaintext.charAt(i);
        if ((row === 0) || (reset % 2 === 0)) {
          i += gap;
        } else {
          i += 2 * (key - 1) - gap;
        }
        reset++;
      }
      row++;
    }
    // Append the characters in the final row
    for (let i = row; i < plaintext.length; i += 2 * (key - 1)) {
      ciphertext += plaintext.charAt(i);
    }
    return ciphertext;
  }

  function railfenceDecode(ciphertext, key) {
    // Follow same logic as encoding using Rail Fence cipher except
    // Construct an array to fill up characters by index (rather than concatenation)
    if (!key) return "";
    ciphertext = ciphertext.toUpperCase().replace(/[^A-Z]/g, "");
    let plaintext = new Array(ciphertext.length);
    let keyChar = 0;
    let row = 0;
    while (row < key - 1) {
      let skip = 2 * (key - row - 1);
      let reset = 0;
      for (let i = row; i < ciphertext.length;) {
        plaintext[i] = ciphertext.charAt(keyChar++);
        if ((row === 0) || (reset % 2 === 0)) {
          i += skip;
        } else {
          i += 2 * (key - 1) - skip;
        }
        reset++;
      }
      row++;
    }
    for (let i = row; i < ciphertext.length; i += 2 * (key - 1)) {
      plaintext[i] = ciphertext.charAt(keyChar++);
    }
    return plaintext.join("");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <h1>Railfence Cipher</h1>
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
                    type="number"
                    placeholder="Enter your key"
                    autoComplete="off"
                    value={encodeKey}
                    onChange={(e) => setEncodeKey(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col />
              <Col style={{textAlign: 'right'}}>
                <Button
                  variant="primary"
                  type="submit"
                  size="lg"
                  onClick={(e) => setEncodedMessage(railfenceEncode(plaintext, parseInt(encodeKey)))}>
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
                    type="number"
                    placeholder="Enter your key"
                    autoComplete="off"
                    value={decodeKey}
                    onChange={(e) => setDecodeKey(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col />
              <Col style={{textAlign: 'right'}}>
                <Button
                  variant="primary"
                  type="submit"
                  size="lg"
                  onClick={(e) => setDecodedMessage(railfenceDecode(ciphertext, parseInt(decodeKey)))}>
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

export default Railfence