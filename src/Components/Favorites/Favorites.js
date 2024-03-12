import './style.css'
import Card from '../Card/index.js';

/* Utilizar hooks para cambiar el titulo */

const Favorites = () => {
    return (
        <div className={'container-general'}>
            <div className={'head-card-favorites'}>
                <div>
                    <h1 className={'title-favorites'}>Favorites</h1>
                </div>
                <div>
                    <div className={'green-line'}></div>
                </div>
            </div>

            <div><Card /></div>
        </div>
    )
};
export default Favorites;