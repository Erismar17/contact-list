import { useEffect, useState } from 'react'
import './style.css'

const Card = (props) => {
    const type=props.type;
    const [usersList, setUsersList] = useState([]);
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        if (type === 'contact') {
            const obtenerUsers = async () => {
                const res = await fetch('https://reqres.in/api/users?per_page=12');
                const data = await res.json();
                setUsersList([...data.data]);
            }

            obtenerUsers();
        } else if (type === 'favorite') {
            setIsFavorite(true);
            /* localStorage.removeItem('listFavorites') */
            let list = localStorage.getItem("listFavorites");
            if (list != null) {
                const favoritesArray = JSON.parse(list);
                setUsersList(favoritesArray);
            } else {
                setUsersList([]);
            }
        }
    }, [type])
    /* puedo utilizar la lógica de addFavorites */
    /* investigar redux */
    /* implementar useEffect para un rerender */
    const addFavorite = (userDetail) => {
        const storageFavorites = localStorage.getItem('listFavorites');
        if (storageFavorites == null) {
            localStorage.setItem('listFavorites', JSON.stringify([userDetail]));
            window.location.reload();
        } else {
            const favoritesArray = JSON.parse(storageFavorites);
            const newFavorites = [...favoritesArray, userDetail];
            localStorage.setItem('listFavorites', JSON.stringify(newFavorites));
            window.location.reload();
        }
    }

    const removeFavorite = (userDetail) => {
        const storageFavorites = localStorage.getItem('listFavorites');
        let favoritesArray = JSON.parse(storageFavorites);
        favoritesArray = favoritesArray.filter(item => item.id !== userDetail.id);
        localStorage.setItem('listFavorites', JSON.stringify(favoritesArray));
        window.location.reload();
    }

    /* en overview deben aparecer separados favoritos de contactos,
       en favoritos solo son favoritos
       en contactos son ambos */
       return (
        <div className='row'>
          {usersList.map((user, index) => (
            <div className='cards' key={index}>
              <img className={`avatar ${isFavorite ? 'favorite' : ''}`} src={user.avatar} alt='avatar' />
              <div className='contact-information'>
                <p className='full-name'>{user.first_name} {user.last_name}</p>
                <p className='email'>{user.email}</p>
                <hr />
                <button
                  className={`button ${isFavorite ? 'button-favorite' : 'button-contact'} button-contact`}
                  onClick={() => (isFavorite ? removeFavorite(user) : addFavorite(user))}
                >
                  {isFavorite ? 'X REMOVE' : <span className="material-symbols-rounded">favorite</span>}
                </button>
              </div>
            </div>
          ))}
        </div>
      );
    }

export default Card;