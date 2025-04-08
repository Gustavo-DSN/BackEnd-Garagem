# 🚗 Vehicle API

API RESTful para cadastro, busca, atualização e remoção de veículos, com autenticação de usuários via JWT.

---

## 🛠️ Tecnologias

-   Node.js
-   Express
-   MongoDB + Mongoose
-   Joi (validação de dados)
-   JWT (autenticação)
-   Bcrypt (hash de senha)
-   Nodemon (ambiente de desenvolvimento)

---

## 📦 Instalação

1. **Clone o repositório**

```bash
git clone https://github.com/Gustavo-DSN/BackEnd-Garagem.git
cd vehicle-api
```

2. **Instale as dependências**

```bash
npm install
```

3. **Crie o arquivo `.env`**

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

---

## ▶️ Executando o Projeto

```bash
npm run dev
```

A API será iniciada em: `http://localhost:3000`

---

## 📌 Endpoints

### 🔐 Autenticação

| Método | Rota        | Descrição           |
| ------ | ----------- | ------------------- |
| POST   | `/register` | Registro de usuário |
| POST   | `/login`    | Login do usuário    |

> **Nota**: O login retorna um token JWT que deve ser enviado no header `Authorization` como `Bearer {token}` para rotas protegidas.

---

### 🚘 Veículos

#### 📖 Públicos

| Método | Rota        | Descrição                              |
| ------ | ----------- | -------------------------------------- |
| GET    | `/vehicles` | Lista todos os veículos                |
| GET    | `/vehicle`  | Busca veículos com filtros via `query` |

Exemplo de filtros:

```bash
GET /vehicle?brand=Fiat&priceMax=50000
```

#### 🔒 Protegidos (requer token JWT)

| Método | Rota           | Descrição                     |
| ------ | -------------- | ----------------------------- |
| POST   | `/vehicle`     | Cadastra novo veículo         |
| PATCH  | `/vehicle/:id` | Atualiza um veículo existente |
| DELETE | `/vehicle/:id` | Remove um veículo             |

Header necessário:

```http
Authorization: Bearer seu_token_jwt
```

---

## ✅ Validações

Todos os campos dos veículos são validados com **Joi**. Veja o modelo básico de um veículo:

```json
{
	"brand": "Fiat",
	"model": "Uno",
	"year": 2015,
	"price": 25000,
	"fuelType": "flex",
	"transmission": "manual",
	"mileage": 120000,
	"color": "Prata",
	"isUsed": true,
	"description": "Carro bem conservado"
}
```

---

## 🧠 Estrutura de Pastas

```
src/
│
├── api/               # Controllers dos veículos
├── auth/              # Registro/Login
├── middlewares/       # Middleware de autenticação
├── models/            # Modelos do Mongoose
├── services/          # Lógica de negócio
├── utils/             # Utilitários (queryBuilder, regex)
├── validations/       # Validações com Joi
├── routes/            # Rotas da aplicação
└── server.js          # Ponto de entrada
```

---

## 📬 Contato

Se tiver dúvidas ou sugestões, entre em contato:

-   Nome: **Gustavo Nascimento**
-   Email: **gustavodasilveiranascimento@gmail.com**
-   GitHub: [Gustavo-DSN](https://github.com/Gustavo-DSN)
