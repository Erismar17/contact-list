import { useEffect, useState } from 'react'
import './style.css'

const Card = (props) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://reqres.in/api/users?page=1')
        .then(res => { res.json().then(respuesta => console.log(respuesta));
        }).then( resultado => { setUsers(JSON.parse(resultado)) })
        .catch(err => console.log(err))
    }, [])

    return (
        /* avatar,
           email,
           first_name,
           last_name,
           id
           src={props.info?.image}
        */
           
        <div className={'cards'}>
            <img className='avatar' src={props.avatar} alt='avatar'/>
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