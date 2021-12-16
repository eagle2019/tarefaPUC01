import './App.css';
import WriteDown from './components/write-down';
import ModelList from './components/model-list';
import { useState } from "react";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';

function App() {

  const demoData = [ 'Arroz', 'Feijão'];

  const [listas, setListas] =  useState(demoData);

  const cadastrarNome = (novoNome) => {
    setListas([novoNome, ...listas]);
    console.log(listas);
  }

  return (
    <>
    <div className="App">
      <Stack direction="row" className="Tema">
      A Lista de Mercado!
      <Avatar src="/broken-image.jpg" />
      </Stack>
      <hr></hr>
      <div className="Adiciona">
      <WriteDown onAdicionaAnota={cadastrarNome} />
      </div>
      <hr></hr>
      <div>
      <ModelList listas={listas} />
      </div>
    </div>
    </>
  );
}

export default App;
