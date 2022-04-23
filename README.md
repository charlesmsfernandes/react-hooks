# Resumo do projeto

Componentes baseado em funções (function components)
- Foi criado um formulário simples com o material-ui, para a criação do HTML e parte gráfica.
- A validação simples foi adicionada com exibição de erros na tela.
- Hooks: useState
- Funções passadas como props

# Importante, regra dos HOOKS

- Usar hooks apenas no nível superior, isso quer dizer que, não deve ser usado dentro de loops, regras condicionais ou funções aninhadas (funções dentro de funções).
- Usar hooks apenas dentro de funções React e não dentro de funções comuns javaScript

# useEffect

O useEffect é uma combinação dos *componentDidMount, componentDidUpdate, e componentWillUnmount* para o controle do ciclo de vida do react. 

# useContext Provider

O useContext utiliza um Provider no component pai para passar os dados para os filhos,
evitando assim que seja passado props para muitos níveis.
Então temos:
<ValidacoesCadastro.Provider value={{cpf: validarCPF}}>
  <FormularioCadastro  />
</ValidacoesCadastro.Provider>
- O contexto Provedor é o ValidacoesCadastro
- O dados que os filhos terão acesso é o cpf: validarCPF que foi provideo pelo valeu
- Com isso o componente FormularioCadastro não precisa passar nenhuma propriedade para os filhos, e o filho que precisar do dado ele pode usar o contexto

# useContext nos filhos

- importa o contexto que for usar:
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro"
- e cria a variavel com o contexto desejado:
const validacoes = useContext(ValidacoesCadastro)

# useContext Default valeu
Caso queira que o valor provedor do contexto seja declarado no próprio contexto, 
basta criar o que precisa direto no contexto, aqui no caso é o ValidacoesCadastro
e com isso o pai não precisa passar nenhum provider, exemplo do pai sem contexto:
<FormularioCadastro  />

e o filho que precisar o contexto default basta fazer o importe e o uso do contexto padrão:
- importa o contexto que for usar:
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro"
- e cria a variavel com o contexto desejado:

# Hook customizado

vc pode fazer o seu próprio hook para ser reutilizado em vários locais e diminuir códigos repeditos no projeto.
- A regra para a criação do seu próprio hook é que ele deve começar com `use` assim como os outros hook também começam com `use`.

### `npm start`

Iniciar o projeto em modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) no seu browser.
