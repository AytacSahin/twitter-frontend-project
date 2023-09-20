import React, { useState } from 'react'
import CreatePost from '../Post/CreatePost'
import Modal from 'react-modal'
import MenuList from './MenuList'
import MenuUserInfo from './MenuUserInfo'

const MenuLinks = () => {

  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);


  const handlePostButton = () => {
    setIsMenuModalOpen(true);
  }

  const handleModalClose = () => {
    setIsMenuModalOpen(false);
  }

  return (
    <div className='bg-white w-[20rem] text-xl pt-6 mr-5'>

      <MenuList />

      <button onClick={() => handlePostButton()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-4 py-2 px-4 rounded-full w-72">
        Post
      </button>

      <Modal
        isOpen={isMenuModalOpen}
        onRequestClose={handleModalClose}
        contentLabel="Tweet'ler resimlerle güzel!"
        className="fixed inset-0 z-50"
      >
        <div className="bg-black bg-opacity-50 h-screen w-screen flex items-center justify-center">
          <div className="bg-white w-1/2 p-4 rounded-lg">
            <CreatePost />
          </div>
        </div>
      </Modal>

      <MenuUserInfo />

    </div>
  )
}

export default MenuLinks