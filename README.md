# 🏭 Metaindústria - Sistema de Monitoramento Industrial

A **Metaindústria** é uma plataforma integrada de monitoramento desenvolvida para o gerenciamento de registros e ocorrências em linhas de produção e maquinários industriais.

**Problema:** Falta de rastreabilidade em tempo real de falhas e paradas em esteiras e equipamentos.
**Entidade Principal:** Registro Industrial (Ocorrência), que armazena os dados de nome, descrição, status de criticidade e data.

O projeto foi construído utilizando uma arquitetura moderna com **microsserviços**, integração completa entre **backend e frontend**, persistência de dados local e comunicação via API REST.

Este projeto compõe os requisitos de **Entrega Final (Sprint 4)** da **FIAP**, unindo o Backend (construído na Sprint 1) com o App Mobile (construído na Sprint 2).

---

# 👥 Integrantes do Grupo

| Nome | RM |
|---|---|
| Rafael Lopes Bestilleiro Benedetti | 554781 |
| Breno Ferreira e Silva | 555503 |
| Vinicius de Abreu Fernandes | 558184 |

---

# 🔗 Links do Projeto

- **Backend (Spring Boot):** [Pasta do Backend](sprint1_API) ou [Repositório do Backend](https://github.com/Lopes626626/sprint1_API)
- **Frontend (Expo):** [Pasta do Frontend](sprint_2) ou [Repositório do Frontend](https://github.com/Lopes626626/sprint_2)

---

# 🎯 O que foi feito na Entrega Final (Integração)

Nesta etapa, o mock de dados do aplicativo foi totalmente removido. Realizamos a integração real entre as aplicações aplicando os seguintes requisitos:

- **CORS Habilitado:** Configuração de `@CrossOrigin` no Spring Boot.
- **Axios Configurado:** Instância base (`api.ts`) configurada com URL dinâmica, headers e timeout.
- **BASE_URL Dinâmica:** Configurada para rodar de acordo com o ambiente (Web/iOS = `localhost:8080`, Emulador Android = `10.0.2.2:8080`, Aparelho Físico = `IP da máquina`).
- **Camada de Serviços:** Separação da lógica de rede no frontend (`ocorrenciaService.ts`).
- **Navegação (Stack):** Fluxo configurado no `App.tsx` conectando Lista, Cadastro e Detalhes.
- **Assincronicidade:** Uso de `Promise.all` na listagem inicial, `useEffect` e `try/catch/finally` para tratamento de erros e resiliência.
- **Tratamento de erros:** O aplicativo não quebra caso o backend esteja indisponível.

---

# 🔄 Fluxo de Telas e Endpoints

O aplicativo segue estritamente a comunicação sem mocks no padrão **Tela ➔ Serviço ➔ Endpoint**:

- **Listagem:** `ListaRegistrosScreen` ➔ `ocorrenciaService.listar()` ➔ **`GET /ocorrencias`**
- **Detalhes:** `DetalheRegistroScreen` ➔ `ocorrenciaService.buscarPorId(id)` ➔ **`GET /ocorrencias/{id}`**
- **Cadastro:** `CadastroRegistroScreen` ➔ `ocorrenciaService.criar(dados)` ➔ **`POST /ocorrencias`**

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
### 2️⃣ Frontend (Pasta: `sprint_2`)

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

---

# 🧪 Como Testar e Comprovar a Integração

### 1. Cadastro no App e Verificação na API
- Com as duas aplicações rodando, abra o aplicativo e adicione um novo registro na tela de Cadastro. 
- O aplicativo salvará o dado com sucesso e recarregará a lista. 
- Acesse o navegador no endereço `http://localhost:8080/ocorrencias` e verifique que o JSON atualizado foi persistido com sucesso na API.

### 2. Tratamento de Falhas (Backend Parado)
- Desligue a aplicação Spring Boot no seu terminal.
- Acesse o aplicativo e tente recarregar a lista ou salvar um novo dado.
- **Resultado:** Os dados não chegarão e o aplicativo não sofrerá *crash*. Em vez disso, mostrará um estado de erro visível (loading/erro), comprovando o fim do uso de mocks.
