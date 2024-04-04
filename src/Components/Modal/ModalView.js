import { addContact } from '../../Redux/contactSlice';
import { useDispatch } from 'react-redux';
import avatarImg from './img/avatar.png';
import { addContactAPI } from '../../API';
import { useState } from 'react';
import './style.css';

const Modal = ({isOpen, lastId}) => {
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [isFavorite, setIsFavorite] = useState(false);
    const dispatch = useDispatch();
    
    const addUser = async(e) => {
        e.preventDefault();
        const avatar = avatarImg;
        const id = ''+(lastId+1)+'';
        const user = {id, email, first_name, last_name, avatar, isFavorite, isDeleted: false};
        dispatch(addContact(user));
        await addContactAPI(user);

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