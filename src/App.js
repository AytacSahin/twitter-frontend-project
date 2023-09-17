import { Routes, Route } from 'react-router-dom';
import Post from './Components/Post/Post';
import MenuLinks from './Components/MenuLinks';
import Explorer from './Components/Explorer/Explorer'

function App() {
  return (

    <div className='flex flex-row justify-center h-screen ml-32'>
      <MenuLinks />
      <Routes>
        <Route exact path="/home" element={<Post />} />
      </Routes>
      <Explorer />
    </div>
  );
}

export default App;
