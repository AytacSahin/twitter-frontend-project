import { Routes, Route } from 'react-router-dom';
import Post from './Post/Post';
import MenuLinks from './Components/MenuLinks';
import Explorer from './Components/Explorer';

function App() {
  return (

    <div className='flex flex-row justify-center bg-blue-300 h-screen'>
      <MenuLinks />
      <Routes>
        <Route exact path="/home" element={<Post />} />
      </Routes>
      <Explorer />
    </div>
  );
}

export default App;
