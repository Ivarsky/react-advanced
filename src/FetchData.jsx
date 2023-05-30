/* eslint-disable react/prop-types */
//creamos un componente de manejar la logica, y delegamos en el omponente players y team la manera de rendenderizar los datos.

import { useEffect, useState } from 'react';

function FetchData({url, children}){ // pasamos la url y la funcion render por props

  const [data, setData] = useState([]);
      
  useEffect(()=> {
    fetch(url)
    .then(response => response.json())
    .then(results => setData(results.data));
  },[url]);


  return children(data) //usamos render pasandole la data
}

export default FetchData