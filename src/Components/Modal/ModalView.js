import './style.css';

const Modal = ({isOpen, closeModal}) => {
    if (!isOpen) return null;
    
    return (
        <div className={'form-position'}>
            <div className={'form'}>
                <form>
                    <input className={'input-form'} placeholder='First Name'/>
                    <input className={'input-form'} placeholder='Last Name'/>
                    <input className={'input-form'} placeholder='Email' type='email' required/>
                    <label className={'label-form'} for="check">Enable like favorite:</label>
                    <input className='checked' type='checkbox' id='check'/>
                </form>
                <button className={'saved'} onClick={closeModal}>Save</button>
            </div>
        </div>
    )
};

export default Modal;