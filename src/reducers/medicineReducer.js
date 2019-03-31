import initialState from './initialState';

export default function medicineReducer(state = initialState.medicines, action) {
	switch(action.type) {
		case "ADD_MEDICINE": 
			return {
				...state,
				medicineList: [...state.medicineList, state.newMedicine]
			}
		

		case "HANDLE_INPUT_CHANGE": 
			
			return {
				...state, newMedicine: {
					...state.newMedicine, ...action.payload }
			}
		

		case "REQUEST_MEDICINES":
			return {
				...state, isFetching: true
			}
		

		case "RECEIVE_MEDICINES": 
			return {
				...state, isFetching: false, medicineList: action.payload
			}
	
		

		default: return state;
	}
}