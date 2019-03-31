import React from 'react';
import '../medicine.css';
const MedicineCard = ({medicine}) => {
	
	return(

	  	<div>
	        <div className="col-xs-4 col-sm-3">
	        
	            {medicine.photo !== undefined ?  <img src={medicine.photo} alt={medicine.name} className="img-fluid rounded-circle" /> :
	            						 <img src="img/tablet.png" alt ={medicine.name} className="img-fluid rounded-circle" />}
	        	
	        </div>
	        <div className="col-xs-8 col-sm-9">
	            <span className="name">{medicine.name}</span><br/>
	            
	            <span className="fa fa-bandcamp text-muted c-info" title={medicine.quantity}></span>
	            <span className="visible-xs"> <span className="text-muted">{medicine.quantity}</span></span>
	            
	        </div>
	        <div className="clearfix"></div>
	      </div>
        
    )
}

export default MedicineCard;