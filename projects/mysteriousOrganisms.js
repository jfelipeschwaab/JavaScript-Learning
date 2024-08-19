// Função que retorna uma base de DNA aleatória
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G'];
    return dnaBases[Math.floor(Math.random() * 4)];
  };
  
  // Função que gera uma cadeia de DNA com 15 bases aleatórias
  const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase());
    }
    return newStrand;
  };
  
  // Função de fábrica que cria objetos pAequor
  const pAequorFactory = (specimenNum, dna) => {
    return {
      specimenNum: specimenNum,
      dna: dna,
  
      // Método que realiza mutação em uma base aleatória do DNA
      mutate() {
        const index = Math.floor(Math.random() * this.dna.length);
        const currentBase = this.dna[index];
        let newBase;
  
        // Garante que a nova base seja diferente da base atual
        do {
          newBase = returnRandBase();
        } while (newBase === currentBase);
  
        this.dna[index] = newBase;
        return this.dna;
      },
  
      // Método que compara o DNA com outro objeto pAequor
      compareDNA(otherPAequor) {
        let identicalBases = 0;
        for (let i = 0; i < this.dna.length; i++) {
          if (this.dna[i] === otherPAequor.dna[i]) {
            identicalBases++;
          }
        }
        const percentage = (identicalBases / this.dna.length) * 100;
        console.log(`specimen #${this.specimenNum} and specimen #${otherPAequor.specimenNum} have ${percentage.toFixed(2)}% DNA in common.`);
      },
  
      // Método que verifica se o DNA tem pelo menos 60% de bases 'C' ou 'G'
      willLikelySurvive() {
        const countCG = this.dna.filter(base => base === 'C' || base === 'G').length;
        return (countCG / this.dna.length) >= 0.6;
      },
  
      // Método que retorna a cadeia complementar de DNA
      complementStrand() {
        const complementBase = {
          'A': 'T',
          'T': 'A',
          'C': 'G',
          'G': 'C'
        };
        return this.dna.map(base => complementBase[base]);
      }
    };
  };
  
  // Criando 30 instâncias de pAequor que têm alta probabilidade de sobrevivência
  const survivingPAequor = [];
  let specimenNum = 1;
  
  while (survivingPAequor.length < 30) {
    const newPAequor = pAequorFactory(specimenNum, mockUpStrand());
    if (newPAequor.willLikelySurvive()) {
      survivingPAequor.push(newPAequor);
    }
    specimenNum++;
  }
  
  console.log(survivingPAequor);
  