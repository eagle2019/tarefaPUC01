import { useState } from "react";
import './write-down.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function WriteDown(props) {
  const [nome, setNome] = useState("");

  const nomeChangeHandler = (event) => {
    setNome(event.target.value);
};

  const submitHandler = () => {
    props.onAdicionaAnota(nome);
    setNome('');
  };
  // key enter
  const handleKeypress = e => {
    console.log(`Pressed keyCode ${e.key}`);
    if (e.key === 'Enter') {
      submitHandler();
    }
  }

  return (
    <div className="row">
        <div>
        <TextField 
            id="outlined-basic" 
            label="Anota:" 
            variant="outlined"
            onChange={nomeChangeHandler}
            onKeyPress={handleKeypress} 
            value={nome} 
            />
          {/* <input type="text" onChange={nomeChangeHandler} value={nome} /> */}
        </div>
        <div className="bts">
          <Button 
            variant="contained"
            onClick={submitHandler}
            >Adicionar</Button>
        </div>
    </div>
  );
}

export default WriteDown;