import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header'
import Blog from './components/Blog/Blog';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './components/Cart/Cart';
import SingleBlog from './components/SingleBlog/SingleBlog';
import Footer from './components/Footer/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header></Header>
      <Blog></Blog>
      <Cart></Cart>
      <ToastContainer></ToastContainer>
      <Footer></Footer>
    </div>
  )
}

export default App
