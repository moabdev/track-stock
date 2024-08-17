# 📦 StockControl - é uma aplicação de controle de estoque moderna e segura, desenvolvida para ajudar empresas a gerenciar seus produtos de maneira eficiente. Com um painel de controle intuitivo e autenticação de dois fatores via e-mail, oferece uma solução robusta e fácil de usar para monitorar, atualizar e visualizar o estoque em tempo real.

## 🚀 Funcionalidades Principais-**📊 Dashboard Intuitivo**: Visualize rapidamente o status do estoque, com gráficos e estatísticas detalhadas.
-**🔐 Autenticação de 2 Fatores**: Segurança aprimorada com autenticação via e-mail para proteger suas informações.
-**🔍 Gestão de Produtos**: Adicione, edite e remova produtos do estoque com facilidade.
-**📦 Rastreamento de Movimentações**: Acompanhe todas as entradas e saídas de estoque em tempo real.
-**🔄 Integração com Banco de Dados PostgreSQL**: Armazenamento seguro e escalável com PostgreSQL.
-**⚙️ API RESTful**: Integração completa para operações CRUD utilizando Node.js e Express.js.

## 🛠️ Tecnologias Utilizadas-**Frontend**:
  -**Next.js**: Framework React para renderização estática e dinâmica.
  -**Tailwind CSS**: Estilização moderna e responsiva com utilitários CSS.
  -**Aeternity UI** e **shadcn/ui**: Componentes de UI elegantes e reutilizáveis.

-**Backend**:
  -**Node.js**: Ambiente de execução para JavaScript no servidor.
  -**Express.js**: Framework web minimalista e flexível para Node.js.
  -**Prisma ORM**: Gerenciamento de banco de dados com mapeamento objeto-relacional (ORM).
  -**PostgreSQL**: Sistema de gerenciamento de banco de dados relacional.

## 🏗️ Arquitetura da Aplicação
├── frontend/
│   ├── components/        # Componentes reutilizáveis da interface de usuário
│   ├── pages/             # Páginas da aplicação (rotas do Next.js)
│   ├── styles/            # Arquivos de estilo utilizando Tailwind CSS
│   ├── public/            # Arquivos públicos (imagens, ícones, etc.)
│   └── ...                # Outros arquivos de configuração do Next.js
│
├── backend/
│   ├── controllers/       # Lógica de negócios e controle de fluxo das rotas
│   ├── models/            # Modelos de dados definidos com Prisma ORM
│   ├── routes/            # Definição das rotas da API utilizando Express.js
│   ├── services/          # Serviços auxiliares (e.g., envio de e-mails, autenticação)
│   ├── middleware/        # Middleware para autenticação e outras validações
│   └── ...                # Outros arquivos de configuração do servidor
│
├── prisma/
│   ├── schema.prisma      # Definição do schema do banco de dados Prisma
│   └── migrations/        # Migrações do banco de dados geradas pelo Prisma
│
├── .env# Arquivo de variáveis de ambiente (não incluído no controle de versão)
├── package.json           # Arquivo de configuração do npm/yarn
├── README.md              # Documentação do projeto
└── ...                    # Outros arquivos de configuração e documentação
## 📝 Como Executar o Projeto### Pré-requisitos-**Node.js** e **npm/yarn**-**PostgreSQL**### Passos1.**Clone o repositório**:
    ```bash
    git clone https://github.com/seu-usuario/stockcontrol.git
    cd stockcontrol
    ```
2.**Instale as dependências**:
    ```bash
    npm install
    # ou
    yarn install
    ```
3.**Configure as variáveis de ambiente**:
   - Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
     ```bash
     DATABASE_URL=postgresql://usuario:senha@localhost:5432/nomedobanco
     JWT_SECRET=sua_chave_secreta
     EMAIL_HOST=smtp.seuprovedor.com
     EMAIL_PORT=587
     EMAIL_USER=seu_email@provedor.com
     EMAIL_PASS=sua_senha
     ```
4.**Execute as migrações do banco de dados**:
    ```bash
    npx prisma migrate dev
    ```
5.**Inicie o servidor**:
    ```bash
    npm run dev
    # ou
    yarn dev
    ```
6.**Acesse a aplicação**:
    - Acesse `http://localhost:3000` no seu navegador.

## 🔒 Autenticação

O sistema implementa autenticação de dois fatores utilizando e-mail. Após o login, um código é enviado para o e-mail cadastrado do usuário, que deve ser inserido para concluir o processo de autenticação.

## 🛠️ Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## 📄 Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Feito com ❤️ por [Moab Macena](https://github.com/moabdev)
