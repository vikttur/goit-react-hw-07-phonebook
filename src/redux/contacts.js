import { createSlice} from '@reduxjs/toolkit';

const contactsInitialState = {
    items: [],
    isLoading: false,
    error: null,
  };
	
const contactsSlice = createSlice({
  name: 'contacts',
	initialState: contactsInitialState,
	
  reducers: {
		addContact: {
			reducer(state, action) {
				console.log(state);
				console.log(action);
				console.log(action.payload);

        return [...state, action.payload];
      },
			prepare(name, phone) {
				console.log( name);
				console.log(phone);

        return {
          payload: {
            // id: nanoid(),
            name,
            phone,
          },
        };
      },
		},
		
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;
