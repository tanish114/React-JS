import axios from "axios";
import React, { useEffect, useState } from "react";
const Datashow = () => {
  const [hotel,sethotel] = useState([]);
  useEffect(() => {

    axios.get("http://localhost:3000/hotel")
      .then((res) => {
        sethotel( res.data);
      })
      .catch((error) => {
        console.error("API Error:", error);
      });

  }, []);

  return (
    <>
      <div>
        <h1>Hotel </h1>
        
          <table border='2'>
            <thead>
              <tr>
                <th>Name</th>
                <th>age</th>
                <th>aadharnumber</th>
                <th>checkin</th>
                <th>checkout</th>
                <th>people</th>
                <th>total</th>
              </tr>
            </thead>
            <tbody >
            {hotel.map((e) =>(
              <tr ke={e.id}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.age}</td>
                <td>{e.aadharnumber}</td>
                
                <td>{e.checkin}</td>
                <td>{e.checkout}</td>
                <td>{e.people}</td>
                <table>{e.total}</table>
              </tr>
            ))}

            </tbody>

          </table>
          </div>
       

     
    </>
  );
};

export default Datashow;