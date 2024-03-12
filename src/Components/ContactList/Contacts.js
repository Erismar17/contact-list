import './style.css'
import Card from '../Card/index.js';

/* Utilizar hooks para cambiar el titulo */

const ContactsList = () => {
    return (
        <div className={'container-general-contacts'}>
            <div className={'head-card-contacts'}>
                <div>
                <h1 className={'title-contacts'}>Contact List</h1>
                </div>
                <div>
                    <div className={'green-line'}></div>
                </div>
            </div>
            <Card />
        </div>
    )
};

export default ContactsList;