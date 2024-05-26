import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Blogs from './pages/Blogs';
import Register from './pages/Register';
import Login from './pages/Login';
import UserBlogs from './pages/UserBlogs';
import CreateBlog from './pages/CreateBlog';
import BlogDetails from './pages/BlogDetails';
import Home from './pages/Home';
import Tips from './pages/Tips';
import BlogContent from './pages/BlogContent';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/my-blogs' element={<UserBlogs />} />
        <Route path='/create-blog' element={<CreateBlog />} />
        <Route path='/login' element={<Login />} />
        <Route path='/blog-details/:id' element={<BlogDetails />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<Home />} />
        <Route path='/tips' element={<Tips />} />
        <Route path="/blog-content/:id" element={<BlogContent />} />
        <Route path="/add-comment/:id" element={<BlogContent />} />

      </Routes>
    </>
  );
}
export default App;
