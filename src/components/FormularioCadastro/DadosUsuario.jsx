import React, { useContext, useState } from 'react'
import { Button, TextField } from '@material-ui/core'

//importo o meu contexto aqui
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro"
import useErros from '../../hooks/useErros';

const DadosUsuario = ({aoEnviar}) => {
  const [email,setEmail] = useState("");
  const [senha,setSenha] = useState("");
  //primeiro eu informo que vou usar um contexto e qual vai ser ele com useContext(ValidacoesCadastro)
  //depois eu falo que agora o meu contexto é a minha variavel para usar no caso a validacoes
  const validacoes = useContext(ValidacoesCadastro);

  //Hoock customizado
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      if(possoEnviar()){

        aoEnviar({email,senha})
      }
    }}>
      <TextField
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}        
        id="email"
        name="email"
        label="email"
        type="email"
        margin="normal"
        variant="outlined"
        fullWidth
        required
      />
      <TextField
        value={senha}
        onChange={(e) => {
          setSenha(e.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        id="senha"
        name="senha"
        label="senha"
        type="password"
        margin="normal"
        variant="outlined"
        fullWidth
        required        
      />
      <Button type="submit" variant="contained" color="primary">Próximo</Button>
    </form>
  )
}

export default DadosUsuario