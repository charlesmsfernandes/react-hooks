import { Step, StepLabel, Stepper, Typography } from '@material-ui/core'
import React, { useState, useEffect } from 'react'

import DadosEntrega from './DadosEntrega'
import DadosPessoais from './DadosPessoais'
import DadosUsuario from './DadosUsuario'

const FormularioCadastro = ({aoEnviar}) => {

  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDados] = useState({});

  useEffect(() => {
    if (etapaAtual === formularios.length-1) {
      aoEnviar(dadosColetados)
    }
  });

  const coletarDados = (dados) => {
     setDados({...dadosColetados, ...dados});
     proximo();
  };

  const proximo = () => {
    setEtapaAtual(etapaAtual+1);
  }

  const formularios = [
    <DadosUsuario aoEnviar={coletarDados} />,
    <DadosPessoais aoEnviar={coletarDados}  />,
    <DadosEntrega aoEnviar={coletarDados} />,
    <Typography variant="h5">Obrigado pelo Cadastro!</Typography>
  ]

  //Refatoração para deixar o código mais simples sem o  switch
  //Sempre podemos usar uma abordagem de array no lugar do switch
  // const formularioAtual = (etapa) => {
  //   switch (etapa) {
  //     case 0:
  //       return <DadosUsuario aoEnviar={proximo} />
  //     case 1:
  //       return <DadosPessoais aoEnviar={proximo} validaCPF={validaCPF} />
  //     case 2:
  //       return <DadosEntrega aoEnviar={aoEnviar} />
  //     default:
  //       return <Typography>Erro ao Selecionar Formulário</Typography>
  //   }
  // }

  return (
    <>
      <Stepper activeStep={etapaAtual}>
        <Step><StepLabel>Login</StepLabel></Step>
        <Step><StepLabel>Pessoal</StepLabel></Step>
        <Step><StepLabel>Entrega</StepLabel></Step>
        <Step><StepLabel>Finalização</StepLabel></Step>
      </Stepper>
      {formularios[etapaAtual]}
    </>
  )
}

export default FormularioCadastro