import React, { useState } from 'react'
import Modal from 'react-modal';
import Login from './Login';
import Register from './Register';


const Auth = () => {

    const [loginModelOpen, setLoginModelOpen] = useState(false);
    const [registerModelOpen, setRegisterModelOpen] = useState(false);

    const registerModalClose = () => {
        setRegisterModelOpen(false);
    }

    return (
        <div className='flex'>

            <div className='w-1/2 flex justify-center items-center h-screen'>
                <svg height="25em" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg>
            </div>


            <Modal isOpen={loginModelOpen}>
                <Login />
            </Modal>

            <Modal isOpen={registerModelOpen}>
                <Register onClose={registerModalClose} />
            </Modal>

            <div className='ml-20 w-65 flex flex-col justify-center font-bold'>
                <p className='text-6xl mb-20'>Şu anda olup <span className="block">bitenler</span></p>
                <p className='text-3xl mb-6 '>Hemen katıl.</p>
                <button onClick={() => setRegisterModelOpen(!registerModelOpen)} className="w-60 p-2 mb-6 bg-blue-400 rounded-full font-bold text-white border "
                    type="submit" name="correo" >
                    Hesap Oluştur
                </button>
                <p className='text-2xl mb-6'>Zaten bir hesabın var mı?</p>

                <button onClick={() => setLoginModelOpen(!loginModelOpen)} className="w-60 p-2 bg-blue-400 rounded-full font-bold text-white border "
                    type="submit" name="correo" >
                    Giriş Yap
                </button>
            </div>
        </div>
    )
}

export default Auth