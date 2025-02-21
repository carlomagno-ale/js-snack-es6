/*
Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

const soccerTeams = [
    { nome: "Blue Lock Eleven", punti: 0, falliSubiti: 0 },
    { nome: "Japan U-20", punti: 0, falliSubiti: 0 },
    { nome: "Manshine City", punti: 0, falliSubiti: 0 },
    { nome: "FC Barcha", punti: 0, falliSubiti: 0 },
    { nome: "Bastard München", punti: 0, falliSubiti: 0 },
    { nome: "Ubers", punti: 0, falliSubiti: 0 }
  ];

const teamsFalli = [];

for (let i = 0; i < soccerTeams.length; i++) {
    
    soccerTeams[i].punti = Math.floor(Math.random() * 20)
    soccerTeams[i].falliSubiti = Math.floor(Math.random() * 20)
    teamsFalli.push(soccerTeams[i].nome, soccerTeams[i].falliSubiti)

}

console.log(soccerTeams)
console.log(teamsFalli)