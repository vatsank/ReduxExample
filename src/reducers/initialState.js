const initialState = {
	medicines: {
		medicineList: [],
		newMedicine: {
				name: '',
				quantity: ''
				
		},
		searchText: 'a'		
	},

	ui: {
			isAddMedicineFormHidden: true
		}
}

export default initialState;