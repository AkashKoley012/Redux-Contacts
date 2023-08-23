import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    newContact: {
      Title: '',
      'First Name': '',
      'Last Name': '',
      Email: '',
      Country: '',
      State: '',
      Image: '',
      Phone: '',
    },
    editContact: null,
    contacts: [],
  },
  reducers: {
    initContact(state, action) {
      state.contacts = action.payload.map((user) => {
        return {
          id: user.login.uuid,
          name: user.name.title + ' ' + user.name.first + ' ' + user.name.last,
          place: user.location.country + ' ' + user.location.state,
          email: user.email,
          picture: user.picture.large,
          contact: user.phone,
        };
      });

      return state;
    },
    addContact(state) {
      const newUser = {
        id: Math.random() * 1e15,
        name:
          state.newContact['Title'] +
          ' ' +
          state.newContact['First Name'] +
          ' ' +
          state.newContact['Last Name'],
        email: state.newContact['Email'],
        place: state.newContact['Country'] + ' ' + state.newContact['State'],
        picture: state.newContact['Image'],
        contact: state.newContact['Phone'],
      };
      state.newContact = {
        Title: '',
        'First Name': '',
        'Last Name': '',
        Email: '',
        Country: '',
        State: '',
        Image: '',
        Phone: '',
      };
      state.contacts.push(newUser);
    },
    updateNewContact(state, action) {
      if (action.payload.id) {
        state.contacts.map((contact) => {
          if (action.payload.id === contact.id)
            contact[action.payload.target.toLowerCase()] = action.payload.value;
          return contact;
        });
      } else if (action.payload.target === 'Image')
        state.newContact[action.payload.target] = URL.createObjectURL(
          action.payload.value
        );
      else state.newContact[action.payload.target] = action.payload.value;
    },
    updateContact(state, action) {
      state.editContact = action.payload;
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export default contactSlice.reducer;
export const {
  initContact,
  addContact,
  updateNewContact,
  updateContact,
  deleteContact,
} = contactSlice.actions;
