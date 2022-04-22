import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import './App.css';
import Cart from './components/Cart/Cart';
import Home from './components/Home/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Shared/Footer/Footer';
import Navigation from './components/Shared/Navigation/Navigation';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />

        
      </Routes>
      <Footer/>
    </BrowserRouter>
     
      
    </div>
  );
}

export default App;
