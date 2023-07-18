import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64b58d89f3dbab5a95c77653.mockapi.io/api/v1/';

export const fetchContacts = createAsyncThunk(
	'contacts/FetchAll',
	
  async (_, thunkAPI) => {
    try {
			const response = await axios.get('/contacts');
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const addContact = createAsyncThunk(
	'contacts/addContact',
	
  async (newContact, thunkAPI) => {
    try {
			const response = await axios.post('/contacts', newContact);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
	'contacts/deleteContact',
	
  async (contactId, thunkAPI) => {
    try {
			const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const toggleCompleted = createAsyncThunk(
  "contacts/toggleCompleted",
  async (contact, thunkAPI) => {
    try {
      const response = await axios.put(`/tasks/${contact.Id}`, {
        completed: !contact.completed,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);