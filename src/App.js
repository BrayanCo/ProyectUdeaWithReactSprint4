import './App.css';
import { IndexApp } from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LoginApp } from './pages/Login';
import { LogupApp } from './pages/Logup';
import { AdminApp } from './pages/admin';
import { HomeApp } from './pages/home';

function App() {
  return (


    <BrowserRouter>
      <Routes>
        <Route index element={<IndexApp></IndexApp>}></Route>
        <Route path='/login' element={<LoginApp></LoginApp>}></Route>
        <Route path='/logup' element={<LogupApp></LogupApp>}></Route>
        <Route path='/admin' element={<AdminApp></AdminApp>}></Route>
        <Route path='/home' element={<HomeApp></HomeApp>}></Route>
      </Routes>
    </BrowserRouter>
  );
}



export default App;
