import './App.css';
import Index from './components/Index/Index.js';
import Home from './components/Home/Home';
import { UserContextProvider } from './components/context/userContext';
import { BrowserRouter , Routes , Route } from 'react-router-dom';

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/home' element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
