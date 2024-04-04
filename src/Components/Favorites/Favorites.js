import { useSelector } from 'react-redux';
import Card from '../Card/Card.js';
import './style.css'

const Favorites = () => {
    const {contacts} = useSelector((state) => state.contacts);
    const favorites = contacts.filter(contact => contact.isFavorite && !contact.isDeleted);
    return (
        <div className={'container-general'}>
            <div className={'head-card-favorites'}>
                <div>
                    <h1 className={'title-favorites'}>Favorites</h1>
                </div>
                <div className='container-green-line'>
                    <div className={'green-line'}></div>
                </div>
            </div>
            <div><Card contacts={favorites} type="favorite"/></div>
        </div>
    )
};
export default Favorites;