import './style.css'
import Card from '../Card/Card.js';

/* Utilizar hooks para cambiar el titulo */

const Favorites = () => {
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

            <div><Card type="favorite"/></div>
        </div>
    )
};
export default Favorites;