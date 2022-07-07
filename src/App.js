//fetch the profiles
  //pass them down to bill collection as props
  //get them to render

//add a click event listener to each of the bills
  //add some parameter to the bill so it can only be done once
  //cant disappear from the collection, so needs to be creating a new array maybe?

//add a click event listener to the cast
  //create a new array minus the one clicked on

//add an event listener on the FIRE button
  //needs to remove from both places, unsure how to achieve this tbh (get there when i get there)


  import React, { useEffect, useState } from 'react';
  import BillCollection from './components/BillCollection';
  import BillsCast from './components/BillsCast';
  
  const API = "http://localhost:8002/bills"
  
  export default function App() {
  
    const [bills, setBills] = useState([])
    // const [cast, setCast] = useState([])
    
  
    function addToCast(bill) {
      setBills(bills.map(b => {
        if(b.id === bill.id && bill.casted === true) {
          return {...b, casted: false}
        } else if(b.id === bill.id) {
          return {...b, casted: true}
        } else return b
      }))
    }
    console.log(bills)
  
    useEffect(() => {
      fetch(API).then(res => res.json()).then(setBills)
    }, [])
  
    return (
      <div>
        <BillsCast cast={bills} />
        <BillCollection bills={bills} addToCast={addToCast}/>
      </div>
    );
  }
  