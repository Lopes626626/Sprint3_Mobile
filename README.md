# Sprint 3 - Integração Frontend e Backend (Projeto Metaindústria / Desafio Aché)

## 📖 Sobre o Projeto
Este repositório contém a entrega da Sprint 3, focada na integração completa entre o aplicativo mobile (React Native/Expo) e a API (Spring Boot/Java 17). 

O sistema faz parte de uma solução de monitoramento industrial para o **desafio Aché**. Ele foi projetado para gerenciar os registros e ocorrências do sistema de inspeção visual automatizada, permitindo o controle de falhas, defeitos em embalagens ou problemas na esteira de produção farmacêutica.

Nesta etapa, o mock de dados foi completamente removido e substituído por requisições HTTP reais consumindo dados persistidos em um banco H2 File.

---

## 🚀 O que foi feito e adicionado nesta Sprint?

Para conectar os projetos desenvolvidos nas Sprints 1 e 2, as seguintes implementações foram realizadas:

**No Backend (Spring Boot):**
- **CORS Habilitado:** Adição da anotação `@CrossOrigin(origins = "*")` no `OcorrenciaController` para permitir requisições do aplicativo.
- **Refatoração do Modelo:** A entidade `Ocorrencia` e o `OcorrenciaService` foram ajustados para receber exatamente o payload JSON esperado pelo frontend (`nome`, `descricao`, `status`, `data`).
- **Limpeza de Banco:** O arquivo antigo do banco H2 (pasta `data`) foi resetado para refletir a nova estrutura da tabela sem conflitos.

**No Frontend (React Native):**
- **Axios Instalado:** Instalação e configuração do Axios (`npx expo install axios`).
- **Nova Camada de Serviços:** Criação da pasta `src/services` para isolar totalmente as chamadas de rede (a interface gráfica não conhece o Axios).
- **Remoção de Mocks:** O arquivo `registrosMock.ts` foi deletado. O fluxo inteiro agora passa pela API.
- **Gerenciamento de Estados Assíncronos:** Telas refatoradas utilizando `useEffect`, `Promise.all` para chamadas múltiplas e blocos `try/catch/finally` para gerenciar os estados de `loading`, `sucesso` e `erro`.

---

## 📂 Estrutura de Diretórios (`src`)

Abaixo está o mapeamento da arquitetura utilizada para manter a separação de responsabilidades (Backend MVC/Camadas e Frontend Componentizado).

### Backend (`sprint1_API/src/main/java/.../backend_consultas`)
```text
📦 src
 ┣ 📂 controller
 ┃ ┗ 📜 OcorrenciaController.java    # Controla os endpoints REST e injeta o service.
 ┣ 📂 model
 ┃ ┗ 📜 Ocorrencia.java              # Entidade JPA (id, nome, descricao, status, data).
 ┣ 📂 repository
 ┃ ┗ 📜 OcorrenciaRepository.java    # Interface Spring Data JPA para o banco H2.
 ┣ 📂 service
 ┃ ┗ 📜 OcorrenciaService.java       # Regras de negócio (listarTodas, buscarPorId, criar).
 ┗ 📜 BackendConsultasApplication.java