import axios from "axios";

const getContacts = async () => {
    const {data} = await axios.get("https://reqres.in/api/users?per_page=12");
    return data.data;
};

const getContactsAPI = async(contact) => {
    const {data} = await axios.get("http://localhost:8000/contacts", contact);
    return data;
};


const addContactAPI = async(contact) => {
    await axios.post("http://localhost:8000/contacts", contact);
};

const updateContactAPI = async(contact) => {
    await axios.put(`http://localhost:8000/contacts/${contact.id}`, contact);
};

const getContactById = async(id) => {
    const {data} = await axios.get(`http://localhost:8000/contacts/${id}`, id);
    return data;
};

export { getContacts, getContactsAPI, addContactAPI, updateContactAPI, getContactById }