import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Mainpage from './main';
import ProductPage from './product';
import UpladPage from './upload';

function App() {
  return (
    <div className="App">
      <Header/>    
      
      <Routes>
        <Route path='/' element={<Mainpage/>} />
        <Route path='/detailView/:p_id' element={<ProductPage/>} />
        <Route path='/upload' element={<UpladPage/>} />
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
