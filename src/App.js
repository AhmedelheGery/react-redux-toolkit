import Counter from './pages/counter/Counter';
import Home from './pages/home';
import Shop from './pages/shop';
import Product from './pages/shop/Product';
import Navbar from './components/navbar/Navbar';
import NotFound from './pages/notFound';
import Todo from './pages/todo/Todo'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home data={[1,2,3]} />} />
        <Route path='/support' element={<Counter />} />
        <Route path='/products' element={<Shop />} />
        <Route path='/products/:id' element={<Product />} />
        <Route path='/todo' element={<Todo />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
