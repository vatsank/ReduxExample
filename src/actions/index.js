import axios from 'axios';

export const addMedicine =() => {

	return {
		type: "ADD_MEDICINE",
		
	}
}

export const handleInputChange = (name, value) => {
	return {

		type: "HANDLE_INPUT_CHANGE",
		payload: { [name]: value}
	}
}

export const toggleMedicineForm = () => {

	return {
		type: "TOGGLE_MEDICINE_FORM",
	}
}


export const requestMedicines = () => {
	console.log("inside requestMedicines");
	return {
		type: "REQUEST_MEDICINE",
		payload: true
	}
}

export const receiveMedicines = (json) => {
	return {
		type: "RECEIVE_MEDICINES",
		payload: json.medicines
	}
}

export const receiveMedicinesError = (err) => {
	return {
		type: "ERROR",
		payload: err
	}
}

export const fetchMedicines = () => {
	return (dispatch) => {

		dispatch(requestMedicines());
		return axios
			.get('http://localhost:4040/medicines')
			.then(response => {
				dispatch(receiveMedicines(response.data))
			})
			.catch ( err => {
				dispatch(receiveMedicinesError(err))
			})
	}
}

export const searchMedicines = (searchText) => {
	return (dispatch) => {
		dispatch(handleSearchInput(searchText));
		return {
			type: "SEARCH_MEDICINES"
		}
	}
}

export const handleSearchInput = (searchText) => {
	return { 
		type: "HANDLE_SEARCH_INPUT", 
		payload: searchText
	};
}


