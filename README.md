# Convenções

- **Nomes de Variáveis, Constantes e Funções e Métodos:** `camelCase`

- **Nomes de Propriedades:** `snake_case`

- **Deixar ponto e vírugula ao fim das linhas**

- **Evitar deixar comentários que não sejam documentativos**
```OBS
    Os comentários do codigo nunca devem ser sobre códigos antigos ou um texto sobre o que determinada parte faz no sistema. Comentários são mentirosos, eles podem descrever algo de uma forma que não acontece na prática.

    Ao mesmo tempo, eles são muito úteis para descrever funções, classes, métodos, etc. Podemos usar comentários para descrever parâmetros de uma função, indicar o que exatamente aquela função recebe de parâmetro.
```
**Ex.:**
```js
/*
    somar(num1, num2) - Soma 2 números
    @param num1 <number> - Primeironúmero
    @param num2 <number> - Segundonúmero
    @returns <number> - Soma dos números
*/
function somar(num1, num2) {
    return num1 + num2;
}
```

- **Dar nomes claros para as variáveis**
```js
// Ideias ruins de nome:
const il = [];

function ani(i) {};
function ri(ai) {};

// Veja como fica difícil entender o que o código faz apenas pelos nomes

// Corrigindo esses nomes:

const itemsList = [];

function addNewItem(item) {};
function renderItems(arrayItems);

// Perceba que agora é muito mais simples entender o que cada coisa faz no código
```

- **Evitar "números mágicos"**
```js
// Exemplo ruim de código:

const pesoProva = 6;
const pesoTrabalho = 4;
const notaFinal = (4*pesoProva + 9*pesoTrabalho) / 10 ;

// Perceba que não dá para entender exatamente o que está sendo calculado e qual é a importância de cada número

// Correção do código:

const notaProva = 4;
const notaTrablho = 9;
const pesoProva = 6;
const pesoTrabalho = 4;

const somaPesos = pesoProva + pesoTrabalho;
const notaFinal = (notaProva*pesoProva + notaTrabalho*pesoTrabalho) / somaPesos;

// Perceba como o cálculo fica 100% auto-explicativo e simpes de entender
```

- **Evite condições desnecessárias sempre que possível**
```js
// Exemplos ruins:

// Ex. 1:
// Condição desnecessária para retornar um boolean
function lampadaEstáDesligada(statusLampada) {
    if (statusLampada === true) {
        return false;
    } else {
        return true;
    };
};

// Ex. 2:
// Muitas condições/cases do switch, e temos que atualizar o switch para cada nova cor.
switch (cor) {
    case 'vermelho':
        console.log('Tradução: Red');
        break;
    
    case 'azul':
        console.log('Tradução: Blue');
        break;

    case 'verde':
        console.log('Tradução: Green');
        break;

    default:
        console.log('Outra cor...');
};

// Ex. 3:
// Para cada nova condição de verificação do login, precisariamos de um novo if na estrutura toda.
// Isso facilita muito em erros imprevisíveis e, ainda por cima, difíceis de concertar.
function levarParaInícioApósLogin(usuario) {
    if (usuario.email !== EMAIL_VALIDO) {
        return
    } else if (usuario.senha !== SENHA_VALIDA) {
        return
    } else {
        // Toda a lógica de enviar ele para outra página...
        location.href = 'outra-pagina.html';

        return true
    };
};

// Corrigindo os código:
// Ex. 1 (corrigido):
// Como o parâmetro já recebe um boolean dizendo se a lampada está ligada, para saber se ela está desligada basta inverter esse valor, que é algo simples de se fazer usando o NOT (!).
function lampadaEstáDesligada(statusLampada) {
    return !statusLampada;
};

// Ex. 2 (corrigido):
// Podemos usar os objetos relacionando a palavra em português com a palavra em inglês
const cor = 'azul';
const traduções = {
    'vermelho': 'red',
    'azul': 'blue',
    'verde': 'green',
    'rosa': 'pink',
    'amarelo': 'yellow'
};

const traduçãoCor = traduções[cor];
console.log(`Tradução: ${traduçãoCor}`);

// Ex. 3 (corrigido):
// Podemos usar o conceito de "Early Return" para verificar o email, isso significa que vamos deixar um if separado para cada verificação e o código restante vai ficar livre para fazer o que quiser.

function levarParaInícioApósLogin(usuario) {
    if (usuario.email !== EMAIL_VALIDO) return;
    if (usuario.senha !== SENHA_VALIDA) return;
    
    // Toda a lógica de enviar ele para outra página...
    location.href = 'outra-pagina.html';

    return true;
};

// Perceba como o código ficou mais simples de ler tendo em mente que todas as validações foram feitas logo de cara, sem precisar usar vários else if.
```

- **Todas as funções do código devem ter uma e apenas uma responsabilidade**
```
    Ao invés de fazer uma função que valida os usuários, leva ele para a página principal, renderiza as informações dele na tela, apaga o botão de login (por que ele já está logado) e todas as outras coisas; por que simplesmente não fazemos o seguinte:

    Criamos uma função para validas os usuários
    Criamos uma função para levar ele para a página principal
    Criamos uma função para renderizar as informações
    Criamos uma função para apagar o botão de login

    Isso facilita em concerto de bugs, se o código da erro.
    Sabemos exatamente em qual função mexer para concertar o bug.
    Um código não mancha o outro, eles não se cruzam um com outro e portanto, ao mexer em um, o outro continuará funcionando.
```

- **Todas os nomes de Variáveis, Funções, Constantes, Objetos, etc. Devem ser escritas em Inglês**

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
- author_id (FK) //(USUARIOS)
- chat_id (FK)   //(CHAT)

## MembrosChats:
- member_id (FK)
- chat_id (FK)

## MembrosOrganização:
- member_id (FK)
- organization_id (FK)

## Chats:
- id (PK)
- name
- read_only
- group_id (FK) B

## Organizações:
- id (PK) A
- name

## Group:
- id (PK) B
- organization_id (FK) A

## Administrando:
- admin_id (FK)
- organization_id (FK)