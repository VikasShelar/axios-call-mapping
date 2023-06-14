"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function MyComponent() {
  const [data,setData]=useState([]);
  
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res=>{
      setData(res.data);
      console.log(res)
    })
    .catch(error=>{
      console.log("error fetching data",error);
    })
    
  },[]);

  return (
    <div>
     <table  className="table table-bordered border-primary">
      <thead className="table-info">
      <tr>
          <th scope="col">userId</th>
          <th scope="col">Id</th>
          <th scope="col">title</th>
          <th scope="col">body</th>
          </tr>
      </thead>
      <tbody>
        {data.map((item)=>{
        return <tr key={item.id}>
           <td>{item.id}</td>
          <td>{item.userId}</td>
          <td>{item.title}</td>
          <td>{item.body}</td>
          </tr>
})}
      </tbody>
     </table>
     
    </div>
  );
}
export default MyComponent;