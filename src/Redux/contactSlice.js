import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    contacts: [
        {
            "id": 1,
            "email": "george.bluth@reqres.in",
            "first_name": "George",
            "last_name": "Bluth",
            "avatar": "https://reqres.in/img/faces/1-image.jpg",
            "isFavorite": false,
            "isDeleted": false,
            },
            {
            "id": 2,
            "email": "janet.weaver@reqres.in",
            "first_name": "Janet",
            "last_name": "Weaver",
            "avatar": "https://reqres.in/img/faces/2-image.jpg",
            "isFavorite": false,
            "isDeleted": false,
            },
            {
            "id": 3,
            "email": "emma.wong@reqres.in",
            "first_name": "Emma",
            "last_name": "Wong",
            "avatar": "https://reqres.in/img/faces/3-image.jpg",
            "isFavorite": false,
            "isDeleted": false,
            },
            {
            "id": 4,
            "email": "eve.holt@reqres.in",
            "first_name": "Eve",
            "last_name": "Holt",
            "avatar": "https://reqres.in/img/faces/4-image.jpg",
            "isFavorite": false,
            "isDeleted": false,
            },
            {
            "id": 5,
            "email": "charles.morris@reqres.in",
            "first_name": "Charles",
            "last_name": "Morris",
            "avatar": "https://reqres.in/img/faces/5-image.jpg",
            "isFavorite": false,
            "isDeleted": false,
            },
            {
            "id": 6,
            "email": "tracey.ramos@reqres.in",
            "first_name": "Tracey",
            "last_name": "Ramos",
            "avatar": "https://reqres.in/img/faces/6-image.jpg",
            "isFavorite": false,
            "isDeleted": false,
            },
            {
            "id": 7,
            "email": "michael.lawson@reqres.in",
            "first_name": "Michael",
            "last_name": "Lawson",
            "avatar": "https://reqres.in/img/faces/7-image.jpg",
            "isFavorite": false,
            "isDeleted": false,
            },
            {
            "id": 8,
            "email": "lindsay.ferguson@reqres.in",
            "first_name": "Lindsay",
            "last_name": "Ferguson",
            "avatar": "https://reqres.in/img/faces/8-image.jpg",
            "isFavorite": false,
            "isDeleted": false,
            },
            {
            "id": 9,
            "email": "tobias.funke@reqres.in",
            "first_name": "Tobias",
            "last_name": "Funke",
            "avatar": "https://reqres.in/img/faces/9-image.jpg",
            "isFavorite": false,
            "isDeleted": false,
            },
            {
            "id": 10,
            "email": "byron.fields@reqres.in",
            "first_name": "Byron",
            "last_name": "Fields",
            "avatar": "https://reqres.in/img/faces/10-image.jpg",
            "isFavorite": false,
            "isDeleted": false,
            },
            {
            "id": 11,
            "email": "george.edwards@reqres.in",
            "first_name": "George",
            "last_name": "Edwards",
            "avatar": "https://reqres.in/img/faces/11-image.jpg",
            "isFavorite": false,
            "isDeleted": false,
            },
            {
            "id": 12,
            "email": "rachel.howell@reqres.in",
            "first_name": "Rachel",
            "last_name": "Howell",
            "avatar": "https://reqres.in/img/faces/12-image.jpg",
            "isFavorite": false,
            "isDeleted": false,
            }
    ]
}

const contactSlice = createSlice ({
    name: 'contact',
    initialState,
    reducers: {
        addContact: (state, action) => {
            state.contacts.push(action.payload)
        },

        removeContact: (state, action) => {
            const id = action.payload;
            const contactId = state.contacts.findIndex(contact => contact.id === id);
            const newContact = {...state.contacts[contactId], isDeleted: !state.contacts[contactId].isDeleted};
            state.contacts[contactId] = newContact;
        },

        toggleFavorite: (state, action) => {
            const id = action.payload;
            const contactId = state.contacts.findIndex(contact => contact.id === id);
            const newContact = {...state.contacts[contactId], isFavorite: !state.contacts[contactId].isFavorite};
            state.contacts[contactId] = newContact;
        },
    }
})

export const { addContact, removeContact, toggleFavorite } = contactSlice.actions;
export default contactSlice.reducer;