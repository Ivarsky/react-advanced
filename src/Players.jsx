/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import withData from './withData';

function Players({data: players, backgroundColor}) {
    

  return <>
  <h2>Players</h2>
  <ul style={{backgroundColor}}>
    {players.map(player => <li key={player.id}>{player.first_name} {player.last_name}</li>)}
  </ul>
  </>
}

const configuredWithData = withData({url:'https://www.balldontlie.io/api/v1/players'})

const PlayersWithData = configuredWithData(Players)

export default PlayersWithData;