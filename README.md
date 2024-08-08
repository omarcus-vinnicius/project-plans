## Pré-requisitos

- PHP >= 7.4
- MySQL

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


