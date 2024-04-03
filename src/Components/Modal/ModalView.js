import { addContact } from '../../Redux/contactSlice';
import { useDispatch } from 'react-redux';
import avatarImg from './img/avatar.png';
import { useState } from 'react';
import './style.css';

const Modal = ({isOpen}) => {
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [isFavorite, setIsFavorite] = useState(false);
    const dispatch = useDispatch();
    
    const addUser = (e) => {
        e.preventDefault();
        const avatar = avatarImg;
        console.log(first_name, last_name, email, isFavorite);
        dispatch(addContact({first_name, last_name, email, isFavorite, avatar}));

        setFirstName('');
        setLastName('');
        setEmail('');
        setIsFavorite(false);

    }
    if (!isOpen) return null;

    return (
        <div className={'form-position'}>
            <div className={'form'}>
                <form onSubmit={addUser}>
                    <input
                        name='firstname' value={first_name} onChange={e => setFirstName(e.target.value)}
                        className={'input-form'} placeholder='First Name' required />

                    <input
                        name='lastname' value={last_name} onChange={e => setLastName(e.target.value)}
                        className={'input-form'} placeholder='Last Name' required />

                    <input
                        name='email' value={email} onChange={e => setEmail(e.target.value)}
                        className={'input-form'} placeholder='Email' type='email' required />

                    <label className={'label-form'} for="check">Enable like favorite: </label>

                    <input
                        value={isFavorite} onChange={e => setIsFavorite(e.target.value)}
                        checked={isFavorite} name='isFavorite' className='checked' type='checkbox' id='check'
                    />
                    <button className={'saved'}type='submit'>Save</button>
                </form>
            </div>
        </div>
    )
};

export default Modal;