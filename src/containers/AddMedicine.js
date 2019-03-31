import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddMedicineForm from '../components/MedicineForm';
import { addMedicine, handleInputChange, toggleMedicineForm } from '../actions';


class AddMedicine extends Component {


	showAddMedicineBox=()=> {

		const { onToggle }  = this.props;
		onToggle();


	}

	handleInputChange = (event) => {
		const target = event.target;
    	const value = target.value;
    	const name = target.name;
    	console.log(name);

   		const { onInputChange } = this.props;
		onInputChange(name,value); 
   	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.onToggle();
		this.props.onFormSubmit();
	}
	renderForm() {
		return(
			<div className="col-sm-8 offset-sm-2">
				<AddMedicineForm onFormSubmit={this.handleSubmit} 
				    onInputChange={this.handleInputChange} />
 			</div>
 		)
	}

	
	render() {
		return(
			<div>
				
				{ this.props.isHidden === false ? 
					this.renderForm(): <button  className="btn btn-secondary" 
					style= {{ "marginLeft": "15px"}} 
					type="submit" onClick={this.showAddMedicineBox} > Add Medicine </button>}
			</div>
			)
	}
}



function mapStateToProps(state) {
    return {
        isHidden : state.ui.isAddMedicineFormHidden,
        newMedicine: state.medicines.newMedicine
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onFormSubmit: (newMedicine) => {
           dispatch(addMedicine(newMedicine));
        },
        onInputChange: (name,value) => {
    
            dispatch(handleInputChange(name,value));
        },

        onToggle: () => {


        	dispatch(toggleMedicineForm());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (AddMedicine)

