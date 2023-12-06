import React, { useState } from 'react';


const fetchInfo = () => { 
    return fetch(url) 
            .then((res) => res.json()) 
            .then((d) => setData(d)) 
    }
    
    useEffect(() => {
        fetchInfo();
    }, [])



const Responses = () => {

    const url = "https://jsonplaceholder.typicode.com/users";
    const [data, setData] = useState([]);


  return (
    <>
      
    </>
  )
}

export default Responses
