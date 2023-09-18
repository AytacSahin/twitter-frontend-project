import { Routes, Route } from 'react-router-dom';
import Post from './Components/Post/Post';
import MenuLinks from './Components/Pages/MenuLinks';
import Explorer from './Components/Explorer/Explorer'
import PostWithCommUniq from './Components/Pages/PostWithCommUniq';
import UserProfile from './Components/User/UserProfile';

function App() {
  return (

    <div className='flex flex-row justify-center h-screen'>
      <MenuLinks />
      <Routes>
        <Route exact path="/home" element={<Post />} />
        <Route path="/tweet/:id" element={<PostWithCommUniq />} />
        <Route path="/user/:id" element={<UserProfile />} />
      </Routes>
      <Explorer />
    </div>
  );
}

export default App;
