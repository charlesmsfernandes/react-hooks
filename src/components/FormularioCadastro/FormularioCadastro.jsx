import React, { useState } from 'react'

import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core'


const FormularioCadastro = ({aoEnviar,validaCPF}) => {
  const [nome,setNome] = useState("");
  const [sobrenome,setSobrenome] = useState("");
  const [cpf,setCpf] = useState("");
  const [promocoes,setPromocoes] = useState(true);
  const [novidades,setNovidades] = useState(true);
  const [erros,setErros] = useState({cpf:{valido:true, texto:""}});

  return (
    <form onSubmit={(e) => {
        e.preventDefault()
        aoEnviar({nome, sobrenome, cpf, promocoes, novidades})
        //console.log(nome, sobrenome, cpf, promocoes, novidades)
      }}
    >
      <TextField
        value={nome}
        onChange={(e) => {
          setNome(e.target.value);
        }}
        id="nome"
        label="Nome"
        margin="normal"
        variant="outlined"
        fullWidth
      />

      <TextField
        value={sobrenome}
        onChange={(e) => {
          setSobrenome(e.target.value);
        }}      
        id="sobrenome"
        label="Sobrenome"
        margin="normal"
        variant="outlined"
        fullWidth
      />

      <TextField
        value={cpf}
        onChange={(e) => {
          setCpf(e.target.value);
        }}
        onBlur={(e) => {
          const ehValido = validaCPF(cpf);
          setErros({
            cpf: ehValido
          })
        }}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="cpf"
        label="CPF"
        margin="normal"
        variant="outlined"
        fullWidth
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            onChange={(e) => {
              setPromocoes(e.target.checked);
            }}           
            name="promocoes"
            checked={promocoes}
            color="primary"
          />}
      />

      <FormControlLabel
        label="Novidades"
        control={
          <Switch
          onChange={(e) => {
            setNovidades(e.target.checked);
          }}           
            name="novidades"
            checked={novidades}
            color="primary"
          />}
      />      

      <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
    </form>
  )
}

export default FormularioCadastro