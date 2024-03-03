import './style.css';
import logo from './img/logo.png';
const NavBar = () => {
    return (
        <div className={'page-content'}>
            <header className={'header'}>
                <div className={'header-views'}>
                    <img className='logo' src={logo} alt='logo'/>

                    <div className={'right-side-header'}>
                        <button className={'overview'}>Overview</button>
                        <button className={'contacts'}>Contacts</button>
                        <button className={'favorites'}>Favorites</button>
                        <button className={'new'}>+ NEW</button>
                    </div>
                </div>
                <hr className={'line-header'}/>
            </header>
        </div>
    )
};

export default NavBar;