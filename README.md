## Pré-requisitos

- PHP >= 7.4
- MySQL
- Node

## Instalação e Configuração BackEnd

1. **Instalar Dependências**:
 - Execute o seguinte comando para instalar as dependências necessárias:  `composer install`

2. **Banco de Dados**:
- A estrutura do banco de dados está disponível no arquivo `structure.sql`. Certifique-se de importar essa estrutura antes de iniciar o aplicativo.

3. **Configuração do Ambiente**:
- Crie um arquivo chamado `env.php` na raiz do projeto.
- Para ajudá-lo a configurar seu arquivo `env.php`, você pode consultar o exemplo fornecido em `env.example.php`.

## Iniciando a Aplicação

Após concluir a instalação e configuração conforme descrito acima, siga os passos abaixo para iniciar a aplicação:

1. **Iniciar o Servidor Local**:
   Para iniciar a aplicação, utilize o seguinte comando:

   php -S 0.0.0.0:8080 ou composer start

> **Nota**: Você pode alterar a porta `8080` para qualquer outra porta disponível de sua preferência. Por exemplo, para usar a porta `4000`, você executaria: `php -S 0.0.0.0:4000`.



## Instalação e Configuração FrontEnd

# Primeiros passos com o aplicativo Create React

Este projeto foi inicializado com [Create React App](https://github.com/facebook/create-react-app).

## Scripts Disponíveis

No diretório do projeto, você pode executar:

### `npm início`

Executa o aplicativo no modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para visualizá-lo no navegador.

A página será recarregada se você fizer edições.\
Você também verá erros de lint no console.

### `teste npm`

Inicia o executor de testes no modo de observação interativo.\
Consulte a seção sobre [execução de testes](https://facebook.github.io/create-react-app/docs/running-tests) para obter mais informações.

### `npm executar compilação`

Cria o aplicativo para produção na pasta `home`.\
Ele agrupa corretamente o React no modo de produção e otimiza a construção para obter o melhor desempenho.

A compilação é reduzida e os nomes dos arquivos incluem os hashes.\
Seu aplicativo está pronto para ser implantado!

Consulte a seção sobre [implantação](https://facebook.github.io/create-react-app/docs/deployment) para obter mais informações.

### `npm executar ejetar`

**Observação: esta é uma operação unidirecional. Depois de `ejetar`, você não pode voltar!**

Se você não estiver satisfeito com a ferramenta de construção e as opções de configuração, você pode `ejetar` a qualquer momento. Este comando removerá a dependência de compilação única do seu projeto.

Em vez disso, ele copiará todos os arquivos de configuração e as dependências transitivas (webpack, Babel, ESLint, etc) diretamente no seu projeto para que você tenha controle total sobre eles. Todos os comandos, exceto `eject`, ainda funcionarão, mas apontarão para os scripts copiados para que você possa ajustá-los. Neste ponto você está sozinho.

Você nunca precisa usar `ejetar`. O conjunto de recursos selecionados é adequado para implantações pequenas e médias e você não deve se sentir obrigado a usar esse recurso. No entanto, entendemos que esta ferramenta não seria útil se você não pudesse personalizá-la quando estiver pronto para isso.

## Saber mais

Você pode saber mais na [documentação sobre criação do aplicativo React](https://facebook.github.io/create-react-app/docs/getting-started).

Para aprender o React, confira a [documentação do React](https://reactjs.org/).

