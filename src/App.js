import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedLayout from './pages/sharedLayout';
import Login from './pages/login'
import Dashboard from './pages/dashboard';
import Page404 from './pages/page404'


import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'  element={<SharedLayout />}>
          <Route index path='/' element={<Login />} />
          <Route path='dashboard' element={<Dashboard />}/>
          <Route path='*' element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
