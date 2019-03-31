import initialState from './initialState';

export default function uiReducer(state = initialState.ui, action) {
	switch(action.type) {
		case "TOGGLE_MEDICINE_FORM": {
				return {
					...state, isAddMedicineFormHidden: !state.isAddMedicineFormHidden
					}
				
			}
		default: return state;
	}
}
