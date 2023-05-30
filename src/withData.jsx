/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';

function withData({url}){ //funcion con la config
  return function(WrappedComponent){ //funcion con el componente a envolver
    function ComponentWithData(props){ // componente creado con los datos de la config
      const [data, setData] = useState([]);
      
      useEffect(()=> {
        fetch(url)
        .then(response => response.json())
        .then(results => setData(results.data));
      },[]);
      
      return <WrappedComponent data={data} {...props} />;
    }
    return ComponentWithData;
  };
}

export default withData;
