import React from 'react';
import MedicineCard from './MedicineCard';


const MedicineList = (props) => {
  console.log(props);
	return(	<ul className="list-group" id="medicine-list">
           		{props.medicineList.map(
                  (medicine) => 
                  <li key={medicine.name} className="list-group-item"> 
                    <MedicineCard medicine = {medicine}/>
                  </li>
              	)}
            </ul>)
}

export default MedicineList;