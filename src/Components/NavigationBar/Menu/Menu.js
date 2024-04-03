import { Link } from 'react-router-dom';
import './style.css';

const Menu = ({isOpen}) => {
  if (!isOpen) return null;

  return (
  <div className={'container-menu'}>
    <div className={'menu-open'}>
      <Link to={'/overview'}><button className={'overview-menu'}>Overview</button></Link>
      <Link to={'/contacts'}><button className={'contacts-menu'}>Contacts</button></Link>
      <Link to={'/favorites'}><button className={'favorites-menu'}>Favorites</button></Link>
    </div>
  </div>
  );
};

export default Menu;