
import './App.css';
import Header from './Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import { Route, Routes } from 'react-router-dom';
import CheckOut from './Pages/CheckOut/CheckOut';
import About from './Pages/About/About';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Shared/Footer/Footer';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Services from './Pages/Home/Services/Services';
import RequiredAuth from './Pages/RequiredAuth/RequiredAuth';
import Blogs from './Pages/Blogs/Blogs';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/checkout' element={
          <RequiredAuth>
            <CheckOut></CheckOut>
          </RequiredAuth>
        }></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
