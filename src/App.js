import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Bookmarks from './page/Bookmarks';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/bookmark' element={<Bookmarks />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
