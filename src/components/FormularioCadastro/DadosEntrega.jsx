import { Button, TextField } from '@material-ui/core'
import React, { useState } from 'react'

const DadosEntrega = ({aoEnviar}) => {
  const [cep,setCep] = useState("");
  const [endereco,setEndereco] = useState("");
  const [numero,setNumero] = useState("");
  const [estado,setEstado] = useState("");
  const [cidade,setCidade] = useState("");
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      aoEnviar({cep,endereco,numero,estado,cidade})
    }}>
      <TextField
        value={cep}
        onChange={(e) => {
          setCep(e.target.value);
        }}      
        id="cep"
        name="cep"
        label="CEP"
        type="number"
        margin="normal"
        variant="outlined"
      />

      <TextField
        value={endereco}
        onChange={(e) => {
          setEndereco(e.target.value);
        }}       
        id="endereco"
        name="endereco"
        label="Endereço"
        type="text"
        margin="normal"
        variant="outlined"
        fullWidth
      />

      <TextField
        value={numero}
        onChange={(e) => {
          setNumero(e.target.value);
        }}      
        id="numero"
        name="numero"
        label="Numero"
        type="number"
        margin="normal"
        variant="outlined"
      />

      <TextField
        value={estado}
        onChange={(e) => {
          setEstado(e.target.value);
        }}
        id="estado"
        name="estado"
        label="Estado"
        type="text"
        margin="normal"
        variant="outlined"
      />

      <TextField
        value={cidade}
        onChange={(e) => {
          setCidade(e.target.value);
        }}      
        id="cidade"
        name="cidade"
        label="Cidade"
        type="text"
        margin="normal"
        variant="outlined"
      />

      <Button type="submit" variant="contained" color="primary" fullWidth>Finalizar Cadastro</Button>
    </form>
  )
}

export default DadosEntrega