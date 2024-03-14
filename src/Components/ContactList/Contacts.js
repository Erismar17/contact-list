import './style.css'
import Card from '../Card/Card.js';

/* Utilizar hooks para cambiar el titulo */

const ContactsList = () => {
    return (
        <div className={'container-general-contacts'}>
            <div className={'head-card-contacts'}>
                <div>
                <h1 className={'title-contacts'}>Contact List</h1>
                </div>
                <div className='container-green-line'>
                    <div className={'green-line'}></div>
                </div>
            </div>
            <Card type="contact"/>
        </div>
    )
};

export default ContactsList;