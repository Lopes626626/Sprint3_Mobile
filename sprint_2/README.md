# 🏭 App de Monitoramento Industrial (Frontend Mobile)

## 📱 O que o app faz
Este projeto é um aplicativo desenvolvido em React Native com Expo. O objetivo atual nessa Sprint 2 é preparar a interface e a navegação do frontend para o sistema de monitoramento industrial, simulando o funcionamento do sistema utilizando dados mockados sem integração com backend no momento.

O aplicativo permite o gerenciamento de registros através de um fluxo funcional mínimo:
* **Lista de registros:** Visualização de todos os apontamentos (normais, alertas ou críticos).
* **Detalhes do registro:** Tela dedicada para visualizar informações de uma ocorrência.
* **Cadastro de registro:** Formulário para inserção de novos dados.

---

## 📂 Estrutura do Projeto

```text
src/
├── components/
│   └── RegistroCard.tsx
├── data/
│   └── registrosMock.ts
├── screens/
│   ├── CadastroRegistroScreen.tsx
│   ├── DetalheRegistroScreen.tsx
│   └── ListaRegistrosScreen.tsx
└── types/
    └── RegistroIndustrial.ts
```

## 📌 Descrição dos Arquivos

| Arquivo | Função |
| :--- | :--- |
| `RegistroCard.tsx` | Componente visual que exibe o resumo de um registro na lista |
| `registrosMock.ts` | Array de dados simulados (mock) e estados iniciais |
| `CadastroRegistroScreen.tsx` | Tela de formulário para criar um novo apontamento |
| `DetalheRegistroScreen.tsx` | Tela que mostra todas as informações de um registro específico |
| `ListaRegistrosScreen.tsx` | Tela principal que lista todos os registros salvos |
| `RegistroIndustrial.ts` | Tipagem e contrato de dados da entidade no TypeScript |

---

## 🚀 Como rodar o app

1. Certifique-se de ter o Node.js instalado.
2. Clone o repositório, abra a pasta do projeto no terminal e instale as dependências:
```text
   npm install
   ```
3. Para rodar, abra o terminal e escreva:
```text
   npx expo start
   ```
4. Aperte **`w`** no terminal para rodar web (abrirá no seu navegador).
5. Para encerrar o programa, clique no terminal e aperte **`Ctrl + C`**.

---

## 🗄️ Como os dados estão mockados
Nesta etapa, não há comunicação com API externa. O gerenciamento das informações (tipadas pela interface `RegistroIndustrial`) é feito através de **estado local** (`useState`) inicializado com um array fixo presente no arquivo `registrosMock.ts`. Isso garante que a criação, listagem e visualização funcionem fluidamente no frontend.

---
