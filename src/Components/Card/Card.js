import { removeContact, toggleFavorite } from '../../Redux/contactSlice';
import { updateContactAPI } from '../../API';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.css'

const Card = (props) => {
    const contacts = props.contacts;
    const dispatch = useDispatch();

    const handleFavorite = async(user) => {
      dispatch(toggleFavorite(user.id));
      await updateContactAPI({...user, isFavorite: !user.isFavorite});
    }

    const removeUser = async(user) => {
      dispatch(removeContact(user.id));
      await updateContactAPI({...user, isDeleted: true});
    }

       return (
        <div className='row'>
          {contacts.map((user, index) => (
            <div className='cards' key={index}>
              <img className={`avatar ${user.isFavorite ? 'favorite' : ''}`} src={user.avatar} alt='avatar' />
              <div className='contact-information'>
                <Link to={`/details/${user.id}`} style={{textDecoration:'none'}}>
                  <p className='full-name'>{user.first_name} {user.last_name}</p>
                </Link>
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
                ><span className="material-symbols-rounded">delete</span></button>
                  }
              </div>
            </div>
          ))}
        </div>
      );
    }

export default Card;