# Dados Atletas 🏅

## Sobre o projeto

Esse projeto foi desenvolvido como parte do curso DEVstart. A aplicação recebe as informações de um atleta, calcula sua categoria, IMC e média válida das notas, e exibe tudo para o usuário.

## Como funciona

O programa utiliza uma classe chamada `Atleta` que recebe o nome, idade, peso, altura e notas do atleta. A partir dessas informações, a classe calcula automaticamente:

- A categoria do atleta com base na idade
- O IMC com base no peso e altura
- A média válida desconsiderando a maior e menor nota

## Categorias por idade

- **Infantil:** 9 a 11 anos
- **Juvenil:** 12 e 13 anos
- **Intermediário:** 14 e 15 anos
- **Adulto:** 16 a 30 anos
- **Sem categoria:** demais idades

## Como executar

1. Ter o Node.js instalado no computador
2. Baixar o arquivo `dados-atletas.js`
3. Abrir o terminal na pasta do arquivo
4. Executar o comando:

```bash
node dados-atletas.js
```

## Exemplo de saída

```
Nome: Cesar Abascal
Idade: 30
Peso: 80
Altura: 1.7
Notas: 10,9.34,8.42,10,7.88
Categoria: Adulto
IMC: 27.68166089965398
Média válida: 9.253333333333332
```

## Tecnologias utilizadas

- JavaScript
