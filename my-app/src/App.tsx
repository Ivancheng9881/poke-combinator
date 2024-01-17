import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PokemonCard from './components/pokemonCard/PokemonCard';
import './App.css';
import { IPokedex } from './types';

function App() {
  const [backendData, setBackendData] = useState<IPokedex[]>([]);

  useEffect(() => {
    fetch('/api')
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  return (
    <div className="App">
      <Container fluid="md">
        <Row>
          <Col>Pokemon Combinator</Col>
        </Row>
        <Row>
          <Col>
            <PokemonCard data={backendData} />
          </Col>
          <Col>Fusion Section</Col>
          <Col>Right Choose</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
