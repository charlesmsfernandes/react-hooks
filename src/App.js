import { Component } from 'react';
import { Container, Typography } from '@material-ui/core'
import 'fontsource-roboto'

import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" align='center' component="h1">Formulário de cadastro</Typography>
        <FormularioCadastro aoEnviar={aoEnviarForm} validaCPF={validaCPF} />
      </Container>
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}

function validaCPF(cpf) {
  if (cpf.length !== 11) {
    return ({
      valido: false,
      texto: "Cpf deve ter 11 digitos"
    })
  } else {
    return ({
      valido: true,
      texto: ""
    })    
  }
}

export default App;
