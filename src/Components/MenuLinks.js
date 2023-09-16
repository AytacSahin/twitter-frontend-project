import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CreatePost from './Post/CreatePost'
import Modal from 'react-modal'

const MenuLinks = () => {

  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);

  const handlePostButton = () => {
    setIsMenuModalOpen(true);
  }

  const handleModalClose = () => {
    setIsMenuModalOpen(false);
  }

  return (
    <div className='bg-white w-[20rem] text-xl'>

      <nav>
        <ul>

          <li className='mb-6'>
            <Link to="/home">
              <svg height="1.8em" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg>
            </Link>
          </li>

          <li className='mb-1 hover:bg-slate-200 rounded-full h-12 flex flex-row items-center'>
            <Link to="/home" className='flex'><svg className='pl-2 p-1 mr-4' height="1.2em" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" /></svg>
              Home
            </Link>
          </li>

          <li className='mb-1 hover:bg-slate-200 rounded-full h-12 flex flex-row items-center'>
            <Link to="/home" className='flex'><svg className='pl-2 ml-[0.1rem] mr-4' height="1.2em" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
              Explore
            </Link>
          </li>

          <li className='mb-1 hover:bg-slate-200 rounded-full h-12 flex flex-row items-center'>
            <Link to="/home" className='flex'><svg className='pl-2 ml-[0.1rem] mr-4' height="1.2em" viewBox="0 0 448 512"><path d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z" /></svg>
              Notifications
            </Link>
          </li>

          <li className='mb-1 hover:bg-slate-200 rounded-full h-12 flex flex-row items-center'>
            <Link to="/home" className='flex'><svg className='pl-2 mr-4' height="1.2em" viewBox="0 0 512 512"><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" /></svg>
              Messages
            </Link>
          </li>

          <li className='mb-1 hover:bg-slate-200 rounded-full h-12 flex flex-row items-center'>
            <Link to="/home" className='flex'><svg className='pl-2 ml-[0.2rem] mr-4' height="1.2em" viewBox="0 0 384 512"><path d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z" /></svg>
              Lists
            </Link>
          </li>

          <li className='mb-1 hover:bg-slate-200 rounded-full h-12 flex flex-row items-center'>
            <Link to="/home" className='flex'><svg className='pl-2 ml-[0.1rem] mr-4' height="1.2em" viewBox="0 0 384 512"><path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z" /></svg>
              Bookmarks
            </Link>
          </li>

          <li className='mb-1 hover:bg-slate-200 rounded-full h-12 flex flex-row items-center'>
            <Link to="/home" className='flex'><svg className='pl-2 mr-4' height="1.1em" viewBox="0 0 640 512"><path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z" /></svg>
              Communities
            </Link>
          </li>

          <li className='mb-1 hover:bg-slate-200 rounded-full h-12 flex flex-row items-center'>
            <Link to="/home" className='flex'><svg className='pl-2 mr-4' height="1.2em" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg>
              Verified
            </Link>
          </li>

          <li className='mb-1 hover:bg-slate-200 rounded-full h-12 flex flex-row items-center'>
            <Link to="/home" className='flex'><svg className='pl-2 mr-4' height="1.2em" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" /></svg>
              Profile
            </Link>
          </li>

          <li className='mb-4 hover:bg-slate-200 rounded-full h-12 flex flex-row items-center'>
            <Link to="/home" className='flex'><svg className='pl-2 mr-3' height="1.6em" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              More
            </Link>
          </li>

        </ul>
      </nav >

      <button onClick={() => handlePostButton()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-72">
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

      <div className="flex-shrink-0 flex hover:bg-blue-00 rounded-full p-4 mt-4 mr-2">
        <a href="#" className="flex-shrink-0 group block">
          <div className="flex items-center">
            <div>
              <img className="inline-block h-10 w-10 rounded-full" src="https://aytac-sahin.vercel.app/static/media/headerImage.4719c4dbc590028a0a9f.png" alt="" />
            </div>
            <div className="ml-3">
              <p className="text-base leading-6 font-medium text-black">
                Aytac Sahin
              </p>
              <p className="text-sm leading-5 font-medium text-black group-hover:text-gray-300 transition ease-in-out duration-150">
                @aytacsah
              </p>
            </div>
          </div>
        </a>
      </div>

    </div>
  )
}

export default MenuLinks