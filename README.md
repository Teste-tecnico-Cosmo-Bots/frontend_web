## README - Como Usar a Aplicação

Este README fornece instruções básicas sobre como configurar e utilizar a aplicação **CosmoBots**. A seguir, são apresentados os passos para configurar o ambiente de desenvolvimento, executar a aplicação e realizar operações básicas.

### Requisitos

Antes de começar, certifique-se de ter instalado o seguinte:

- Node.js (versão LTS recomendada)
- NPM (gerenciador de pacotes do Node.js) ou Yarn (opcional)

### Instalação

1. **Clone o repositório**

   ```bash
   git clone git@github.com:Teste-tecnico-Cosmo-Bots/frontend_web.git
   cd cosmobots
   ```

2. **Instale as dependências**

   Com npm:

   ```bash
   npm install
   ```

   Com Yarn:

   ```bash
   yarn install
   ```

### Configuração do Backend (API)

Certifique-se de que o backend da aplicação está configurado corretamente. Isso pode envolver a configuração de um servidor local ou o uso de um ambiente de desenvolvimento fornecido pelo projeto.

### Configuração do Ambiente Frontend

1. **Variáveis de Ambiente**

   Crie um arquivo `.env` na raiz do projeto para configurar variáveis de ambiente necessárias (exemplo abaixo):

   ```
   VUE_APP_API_URL=http://localhost:3000/api/v1
   ```

   Substitua `http://localhost:3000/api/v1` pela URL do backend da sua aplicação.

2. **Configuração do Cliente da API**

   Para facilitar o uso da API, configure o cliente Axios para utilizar uma rota base. Isto ajuda a centralizar a URL base para todas as requisições, simplificando o código e a manutenção.

   No arquivo `src/services/api.js`, configure o cliente Axios da seguinte forma:

   ```javascript
   import axios from "axios";

   const API_URL = "http://localhost:3000/api/v1";

   export const apiClient = axios.create({
     baseURL: API_URL,
   });
   ```

### Execução da Aplicação

1. **Desenvolvimento**

   Para iniciar a aplicação em modo de desenvolvimento:

   Com npm:

   ```bash
   npm run serve
   ```

   Com Yarn:

   ```bash
   yarn serve
   ```

   O servidor de desenvolvimento será iniciado e a aplicação estará disponível em `http://localhost:8080` (ou outra porta, dependendo da configuração padrão do Vue CLI).

2. **Produção**

   Para compilar a aplicação para produção:

   Com npm:

   ```bash
   npm run build
   ```

   Com Yarn:

   ```bash
   yarn build
   ```

   Os arquivos compilados estarão na pasta `dist/` e podem ser servidos por qualquer servidor HTTP compatível.

### Funcionalidades

- **Login e Registro:** Acesse a aplicação usando credenciais válidas ou registre uma nova conta.
- **Publicação de Posts:** Crie novos posts e compartilhe informações com outros usuários.
- **Validação de Token:** O sistema verifica periodicamente a validade do token de autenticação para melhor segurança.
- **Navegação:** Use a barra de navegação para explorar diferentes seções da aplicação.
