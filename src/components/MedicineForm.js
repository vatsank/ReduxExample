
import React from 'react';

const AddMedicineForm = ({onInputChange, onFormSubmit}) => 
	(
		<form>
			<div className="form-group">
			    <label htmlFor="medicineName">Medicine Name</label>
				<input type="text" className="form-control" name="name" 
				    onChange={onInputChange} placeholder="crocin" />
			</div>
			
			<div className="form-group class-sm-3">
			    <label htmlFor="quantity">Quantity</label>
				<input type="text" className="form-control" name="quantity" onChange={onInputChange} 
				            placeholder="1 or 2 " />
			</div>
			
			<button className="btn btn-primary" type="submit" onClick={onFormSubmit}> Submit </button>
		</form>
	)

export default AddMedicineForm;