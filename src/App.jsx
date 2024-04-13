import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Pages/Main';
import Photo from './Pages/Photo';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/photo' element={<Photo /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
