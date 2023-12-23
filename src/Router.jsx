import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Posts from './pages/Posts';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
