import React from 'react';
import BillCard from "./BillCard"

export default function BillCollection({ bills, addToCast }) {
  
  const renderBills = bills.map(bill => (
    <BillCard 
      key={bill.id}
      bill={bill}
      addToCast={addToCast}
    />
  ))

  return (
    <div className="ui four column grid">
      <div className="row">
        {renderBills}
      </div>
    </div>
  );
}
