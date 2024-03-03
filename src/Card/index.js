import avatar from './img/avatar.png'
import './style.css'

const Card = () => {
    return (
    <div className={'cards'}>
        <img className='avatar' src={avatar} alt='avatar'/>
        <div className='contact-information'>
            <p className={'full-name'}>Full Name</p>
            <p className={'email'}>email@email.com</p>
            <hr/>
            <button className={'button'}>
                X REMOVE
            </button>
        </div>
    </div>
    )
}

export default Card;