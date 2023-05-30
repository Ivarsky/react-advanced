/* eslint-disable react/prop-types */
/* eslint-disable no-undef */

import FetchData from './FetchData';

function Teams({color}) {
  return (
  <>
  <h2>Teams</h2>
  <FetchData //Recibe la url y la funcion render con data (teams)
    url='https://www.balldontlie.io/api/v1/teams'>
    {teams =>(
      <ul style={{color}}>
        {teams.map(team => (<li key={team.id}>{team.full_name}</li>)
        )}
      </ul>
    )} 
  </FetchData>
  </>);
}

export default Teams;