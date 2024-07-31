# Convenções

**Variáveis, Constantes e Funções e Métodos:** `camelCase`
**Propriedades:** `snake_case`

---

# Estruturas dos Dados

## Usuários:
- id (PK)
- name
- description
- email
- pass
- profile_picture

## Mensagens:
- id (PK)
- body
- time_stamp
- author_id (FK)
- chat_id (FK)

## MembrosChats:
- member_id
- chat_id

## MembrosOrganização:
- member_id
- organization_id

## Chats:
- id (PK)
- name
- read_only

## Organizações:
- id (PK)
- name

## Categorias:
- id (PK)
- organization_id (FK)

## Administrando:
- admin_id (FK)
- organization_id (FK)