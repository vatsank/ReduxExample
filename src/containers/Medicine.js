import React, { Component } from 'react';
import '../medicine.css';
import AddMedicine from './AddMedicine';
import MedicineList from '../components/MedicineList';
import { connect } from 'react-redux'; 
import {fetchMedicines} from '../actions';

class Medicine extends Component {

 
  returnMedicineList =()=> {
    return this.props.medicineList;
  }


  render() {

   
    return (
    	<div>
         	<AddMedicine/>
          <MedicineList medicineList= {this.returnMedicineList()} />
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    medicineList : state.medicines.medicineList,
    searchText: state.medicines.searchText,
   
    
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAllMedicines: () => dispatch(fetchMedicines())
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Medicine);

