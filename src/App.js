import { Component } from 'react';
import { Container, Typography } from '@material-ui/core'
import 'fontsource-roboto'

import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { validarCPF, validarSenha } from "./models/cadastro"
//importo o meu contexto aqui
import ValidacoesCadastro from "./contexts/ValidacoesCadastro"

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" align='center' component="h1">Formulário de cadastro</Typography>
        {/*
          informo que o contexto usado será o ValidacoesCadastro
          e que ele será o Provedor de informações para o contexto

          Obs: o Provider é declaro caso não tenha sido declaro no contexto o que será feito
          mas é possível definir no contexto e não usar nenhum Provider
          pois o próprio contexto vai ser o Provider
        */}
        <ValidacoesCadastro.Provider value={{
            cpf: validarCPF,
            senha: validarSenha,
            nome: validarSenha
          }}>
          {/*
            Agora todos que estão dentro de FormularioCadastro podem conhecer esse contexto
            se precisarem conhecer se não é só não usar
          */}            
          <FormularioCadastro aoEnviar={aoEnviarForm} />
        </ValidacoesCadastro.Provider>
      </Container>
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}

export default App;
