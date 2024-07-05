const team = {
    _players: [
      {
        firstName: 'João', lastName: 'Schwaab', age: 18
    },
    {
      firstName: 'Robert', lastName: 'Adicton', age: 38
    },
    {
      firstName: 'Pietra', lastName: 'Rock', age: 24
    }],
    _games: [{
      opponent: 'Flamengo', teamPoints: 24, opponentPoints: 28},
      {opponent: 'São Paulo', teamPoints: 26, opponentPoints: 22},{
      opponent: 'Banfield', teamPoints: 32, opponentPoints: 16}],
    get getPlayers() {
      return this._players;
    },
    get getGames() {
      return this._games;
    },
    addPlayer(newFirstName,newLastName,newAge){
      let newPlayer = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge
      }
      this._players.push(newPlayer);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints){
      let newGame = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      }
      this._games.push(newGame);
    }
  }
  
  team.addPlayer('Bugs','Bunny', 76);
  console.log(team._players);
  team.addGame('Titans', 100, 98);
  console.log(team._games);
  