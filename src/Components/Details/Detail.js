import { Link, useParams } from 'react-router-dom';
import './style.css';
import { useEffect, useState } from 'react';
import { getContactById } from '../../API';

const Detail = () => {
    const { id } = useParams();
    const [contact, setContact] = useState({});

    useEffect(() => {
        (async () => {
          const value = await getContactById(id);
          setContact(value);
        })();
      }, []);

    return (
        <div >
            <div className={'profile-details'}>
                <img className={`avatar-profile ${contact.isFavorite ? 'favorite' : ''}`} src={contact.avatar} alt='avatar' />
                <div className={'right-side-details'}>
                    <p className='full-name-profile'>
                        <span>First Name: </span>{contact.first_name}<br/>
                        <span>Last Name: </span>{contact.last_name}
                    </p>
                    <p className='email-profile'>
                        <span>Email: </span>{contact.email}</p>
                </div>
            </div>
            <Link to={'/'}>
                <button className={'back'}>Back</button>
            </Link>
        </div>
    )
}

export default Detail;