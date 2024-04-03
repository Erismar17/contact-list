import './style.css'
import Card from '../Card/Card.js';
import { useSelector } from 'react-redux';

const ContactsList = () => {
    const {contacts} = useSelector((state) => state.contacts);
    const contactsList = contacts.filter(contact => contact.isDeleted === false);

    return (
        <div className={'container-general-contacts'}>
            <div className={'head-card-contacts'}>
                <div className={'title'}>
                <h1 className={'title-contacts'}>Contact List</h1>
                </div>
                <div className='container-green-line'>
                    <div className={'green-line'}></div>
                </div>
            </div>
            <Card contacts={contactsList} type="contact"/>
        </div>
    )
};

export default ContactsList;