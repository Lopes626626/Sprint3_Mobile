# 🏭 Metaindústria - Sistema de Monitoramento Industrial

A **Metaindústria** é uma plataforma integrada de monitoramento desenvolvida para o gerenciamento de registros e ocorrências em linhas de produção e maquinários industriais.

O projeto foi construído utilizando uma arquitetura moderna com **microsserviços**, integração completa entre **backend e frontend**, persistência de dados local e comunicação via API REST.

Este projeto compõe os requisitos de entrega da **Sprint 3** da **FIAP**, unindo o Backend (construído na Sprint 1) com o App Mobile (construído na Sprint 2).

---

# 🎯 O que foi feito na Sprint 3 (Integração)

Nesta etapa, o mock de dados do aplicativo foi totalmente removido. Realizamos a integração real entre as aplicações aplicando os seguintes requisitos:

- **CORS Habilitado:** Configuração de `@CrossOrigin` no Spring Boot.
- **Axios Configurado:** Instância base (`api.ts`) configurada com URL dinâmica, headers e timeout.
- **Camada de Serviços:** Separação da lógica de rede no frontend (`ocorrenciaService.ts`).
- **Navegação (Stack):** Fluxo configurado no `App.tsx` conectando Lista, Cadastro e Detalhes.
- **Assincronicidade:** Uso de `Promise.all` na listagem inicial, `useEffect` e `try/catch/finally` para tratamento de erros e resiliência.
- **Tratamento de erros:** O aplicativo não quebra caso o backend esteja indisponível.

---

# 🛠️ Arquitetura e Tecnologias

## 🔙 Backend (API REST)

- Java 17
- Spring Boot
- Spring Data JPA
- Banco de Dados H2 (File)
- Maven

## 🌐 Frontend (Mobile)

- React Native
- Expo Framework
- TypeScript
- Axios (Requisições HTTP)
- React Navigation (Native Stack)

---

# 📂 Estrutura Completa do Projeto

O ecossistema foi dividido em dois repositórios principais seguindo boas práticas de desenvolvimento corporativo.

# 1️⃣ Backend (Pasta: `sprint1_API`)

```text
src/main/java/com/fiap/sprint1/backend_consultas/
├── BackendConsultasApplication.java
├── controller/
│   └── OcorrenciaController.java
├── model/
│   └── Ocorrencia.java
├── repository/
│   └── OcorrenciaRepository.java
└── service/
    └── OcorrenciaService.java
```

## 📌 Descrição dos Arquivos - Backend

| Arquivo | Função |
|---|---|
| `BackendConsultasApplication.java` | Classe principal responsável pela inicialização da aplicação |
| `OcorrenciaController.java` | Rotas REST para cadastro e listagem (com `@CrossOrigin`) |
| `Ocorrencia.java` | Entidade JPA mapeada no banco de dados H2 |
| `OcorrenciaRepository.java` | Interface responsável pela persistência |
| `OcorrenciaService.java` | Camada de regras de negócio e CRUD |

---

# 2️⃣ Frontend (Pasta: `sprint_2`)

```text
sprint_2/
├── App.tsx
└── src/
    ├── components/
    │   └── RegistroCard.tsx
    ├── screens/
    │   ├── CadastroRegistroScreen.tsx
    │   ├── DetalheRegistroScreen.tsx
    │   └── ListaRegistrosScreen.tsx
    ├── services/
    │   ├── api.ts
    │   └── ocorrenciaService.ts
    └── types/
        └── RegistroIndustrial.ts
```

## 📌 Descrição dos Arquivos - Frontend

| Arquivo | Função |
|---|---|
| `App.tsx` | Ponto de entrada do App, configurando o `NavigationContainer` e as rotas |
| `RegistroCard.tsx` | Componente visual de UI para os cards de listagem |
| `ListaRegistrosScreen.tsx` | Tela inicial (GET + `useEffect` + `Promise.all`) listando dados reais |
| `CadastroRegistroScreen.tsx` | Tela de formulário via POST usando tipagem `Omit` para omitir o ID |
| `DetalheRegistroScreen.tsx` | Tela de exibição detalhada baseada no ID (GET by ID) |
| `api.ts` | Configuração da instância Axios com tratamento de IP/Localhost |
| `ocorrenciaService.ts` | Centraliza as chamadas à API isolando a regra da interface |
| `RegistroIndustrial.ts` | Interface do contrato de dados alinhada com o JSON da API |

---

# ⚡ Configuração e Execução

# ▶️ Executando o Backend

## 📋 Pré-requisitos

Certifique-se de possuir instalado:

- JDK 17
- Maven

## ▶️ Passos para Execução

### 1. Abra o projeto `sprint1_API` em uma IDE

Exemplos:

- IntelliJ IDEA
- VS Code

### 2. Localize o arquivo principal

```text
BackendConsultasApplication.java
```

### 3. Execute a aplicação

Clique com o botão direito no arquivo e selecione **Run**.

### 4. O servidor iniciará em:

```text
http://localhost:8080
```

---

# 🗄️ Banco de Dados H2

Após iniciar o backend, acesse o console:

```text
http://localhost:8080/h2-console
```

## 🔗 Configuração da Conexão

```text
JDBC URL: jdbc:h2:file:./data/metaindustria_db
User Name: sa
Password:
```

> **Nota:** A senha deve ser deixada em branco.

A tabela `OCORRENCIA` é criada automaticamente pelo Hibernate na inicialização.

---

# 🌐 Executando o Frontend

Abra o terminal na pasta `sprint_2`.

## 📦 Instalação das Dependências

```bash
npm install
```

## 🔗 Instalação das Bibliotecas (Axios e Navegação)

```bash
npx expo install axios @react-navigation/native @react-navigation/native-stack react-native-safe-area-context react-native-screens
```

## ▶️ Inicialização do Projeto

```bash
npx expo start
```

## 💻 Execução no Emulador/Navegador

Após iniciar o Expo, pressione no terminal:

- `a` para abrir no emulador Android
- `w` para abrir no Expo Web
- Ou leia o QR Code no app Expo Go (celular físico)
