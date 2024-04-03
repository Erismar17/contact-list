import './style.css';
import { Link, Outlet } from 'react-router-dom';
import logo from './img/logo.png';
import { useState } from 'react';
import Modal from '../Modal/ModalView';
import Menu from './Menu/Menu';

const NavBar = () => {
    
    let [menu, setMenu] = useState(false);
    const toggleMenu = () => {
        setMenu(!menu);
    }

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

                        <button className={'menu'} onClick={toggleMenu}>
                            <span className="material-symbols-rounded">menu</span>
                        </button>
                    </div>
                </div>
                <hr className={'line-header'}/>
            </header>
            <Menu isOpen={menu} closeMenu={() => setMenu(false)} />
            <Modal isOpen={modal} closeModal={() => setModal(false)} />
            <Outlet/>
        </div>
    )
};

export default NavBar;