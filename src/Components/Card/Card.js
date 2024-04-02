import { removeContact, toggleFavorite } from '../../Redux/contactSlice';
import { useDispatch } from 'react-redux';
import './style.css'

const Card = (props) => {
    const contacts = props.contacts;
    const dispatch = useDispatch();

    const handleFavorite = (user) => {
      dispatch(toggleFavorite(user.id));
    }

    const removeUser = (user) => {
      dispatch(removeContact(user.id));
    }

       return (
        <div className='row'>
          {contacts.map((user, index) => (
            <div className='cards' key={index}>
              <img className={`avatar ${user.isFavorite ? 'favorite' : ''}`} src={user.avatar} alt='avatar' />
              <div className='contact-information'>
                <p className='full-name'>{user.first_name} {user.last_name}</p>
                <p className='email'>{user.email}</p>
                <hr />
                <button
                  className={`button ${user.isFavorite ? 'button-favorite' : 'button-contact'}`}
                  onClick={() => handleFavorite(user)}
                >
                  
                  {user.isFavorite ? 'X REMOVE' : <span className="material-symbols-rounded">favorite</span>}
                </button> 
              {!user.isFavorite &&

                <button
                  className={`button ${user.isFavorite ? 'button-contact' : 'button-favorite'}`}
                  onClick={() => removeUser(user)}
                ><span className="material-symbols-outlined">delete</span></button>
                  }
              </div>
            </div>
          ))}
        </div>
      );
    }

export default Card;