class Atleta {

  constructor(nome, idade, peso, altura, notas) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
    this.notas = notas;
    this.categoria = this.calculaCategoria();
    this.imc = this.calculaIMC();
    this.mediaValida = this.calculaMediaValida();
  }

  // calcula a categoria do atleta pela idade
  calculaCategoria() {
    if (this.idade >= 9 && this.idade <= 11) {
      return "Infantil";
    } else if (this.idade == 12 || this.idade == 13) {
      return "Juvenil";
    } else if (this.idade == 14 || this.idade == 15) {
      return "Intermediário";
    } else if (this.idade >= 16 && this.idade <= 30) {
      return "Adulto";
    } else {
      return "Sem categoria";
    }
  }

  // calcula o imc do atleta
  calculaIMC() {
    let imc = this.peso / (this.altura * this.altura);
    return imc;
  }

  // calcula a media valida sem a maior e menor nota
  calculaMediaValida() {
    let notas = this.notas.slice();

    notas = notas.sort(function(a, b) {
      return a - b;
    });

    let notasComputadas = notas.slice(1, 4);

    let soma = 0;
    notasComputadas.forEach(function(nota) {
      soma = soma + nota;
    });

    let media = soma / notasComputadas.length;
    return media;
  }

  // metodos que retornam os atributos do atleta
  obtemNomeAtleta() {
    return this.nome;
  }

  obtemIdadeAtleta() {
    return this.idade;
  }

  obtemPesoAtleta() {
    return this.peso;
  }

  obtemAltura() {
    return this.altura;
  }

  obtemNotasAtleta() {
    return this.notas;
  }

  obtemCategoria() {
    return this.categoria;
  }

  obtemIMC() {
    return this.imc;
  }

  obtemMediaValida() {
    return this.mediaValida;
  }
}

// declarando o atleta
const atleta = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);

// mostrando os dados do atleta
console.log("Nome: " + atleta.obtemNomeAtleta());
console.log("Idade: " + atleta.obtemIdadeAtleta());
console.log("Peso: " + atleta.obtemPesoAtleta());
console.log("Altura: " + atleta.obtemAltura());
console.log("Notas: " + atleta.obtemNotasAtleta());
console.log("Categoria: " + atleta.obtemCategoria());
console.log("IMC: " + atleta.obtemIMC());
console.log("Média válida: " + atleta.obtemMediaValida());