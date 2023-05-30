import { useEffect, useState } from 'react';

function Players() {
    const [players, setTeams] = useState([]);

    useEffect(()=> {
      fetch('https://www.balldontlie.io/api/v1/players')
      .then(response => response.json())
      .then(results => setTeams(results.data));
    },[]);

  return <>
  <h2>Players</h2>
  <ul>
    {players.map(player => <li key={player.id}>{player.first_name} {player.last_name}</li>)}
  </ul>
  </>
}

export default Players;