import React, { useContext, useState } from 'react'

import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core'
//importo o meu contexto aqui
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro"
import useErros from '../../hooks/useErros';

const DadosPessoais = ({aoEnviar}) => {
  const [nome,setNome] = useState("");
  const [sobrenome,setSobrenome] = useState("");
  const [cpf,setCpf] = useState("");
  const [promocoes,setPromocoes] = useState(true);
  const [novidades,setNovidades] = useState(true);
  //primeiro eu informo que vou usar um contexto e qual vai ser ele com useContext(ValidacoesCadastro)
  //depois eu falo que agora o meu contexto é a minha variavel para usar no caso a validacoes
  const validacoes = useContext(ValidacoesCadastro);

  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  return (
    <form onSubmit={(e) => {
        e.preventDefault()
        if(possoEnviar()){

          aoEnviar({nome, sobrenome, cpf, promocoes, novidades})
        }
      }}
    >
      <TextField
        value={nome}
        onChange={(e) => {
          setNome(e.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.nome.valido}
        helperText={erros.nome.texto}        
        id="nome"
        name="nome"
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
        name="sobrenome"
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
        onBlur={validarCampos}
        name="cpf"
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
        name="promocoes"
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
        name="novidades"
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

      <Button type="submit" variant="contained" color="primary">Próximo</Button>
    </form>
  )
}

export default DadosPessoais