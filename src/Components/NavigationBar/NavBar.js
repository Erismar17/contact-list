import './style.css';
import { Link, Outlet } from 'react-router-dom';
import logo from './img/logo.png';
import { useState } from 'react';
import Modal from '../Modal/ModalView';

const NavBar = () => {
    let [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    }

    return (
        <div className={'page-content'}>
            <header className={'header'}>
                <div className={'header-views'}>
                    <div>
                        <img className='logo' src={logo} alt='logo'/>
                    </div>

                    <div className={'right-side-header'}>
                        <Link to={'/overview'}><button className={'overview'}>Overview</button></Link>
                        <Link to={'/contacts'}><button className={'contacts'}>Contacts</button></Link>
                        <Link to={'/favorites'}><button className={'favorites'}>Favorites</button></Link>
                        <button className={'new'} onClick={toggleModal}>+ NEW</button>
                    </div>
                </div>
                <hr className={'line-header'}/>
            </header>
            <Modal isOpen={modal} closeModal={() => setModal(false)} />
            <Outlet/>
        </div>
    )
};

export default NavBar;