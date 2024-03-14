import './style.css';
import { Link } from 'react-router-dom';
import logo from './img/logo.png';
import { useState } from 'react';
import Modal from '../Modal/ModalView';
import { Outlet } from 'react-router-dom';

const NavBar = () => {
    let [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    }

    return (
        <div className={'page-content'}>
            <header className={'header'}>
                <div className={'header-views'}>
                    {/* meter el logo en un div */}
                    {/* crear media query para el logo y botones, cambiar header view a dblock, flex direction: column*/}
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