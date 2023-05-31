import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import Menu from './Pages/Menu';
import Welcome from './Pages/Welcome';
import Posts from './API/Posts'
import CakeContainer from './redux/CakeContainer'
import AddPosts from './Pages/AddPosts';
import EditPosts from './Pages/EditPosts';
import Latest from './Pages/Latest';
import Oldest from './Pages/Oldest';
import Login from './Pages/Login';
import UseRefDemo from './HOOKS/UseRefDemo';
import UseMemoDemo from './HOOKS/UseMemoDemo';
import UseContextDemo from './HOOKS/UseContextDemo';
import CustomHook from './HOOKS/CustomHook';
import UseReducerDemo from './HOOKS/UseReducerDemo';
import { Provider } from 'react-redux';
import store from './redux/store';
import HookCakeContainer from './redux/HookCakeContainer';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/welcome' element={<Welcome />} />
          <Route path='/about' element={<About />} />
          <Route path='/API/posts/' element={<Posts />}>
            <Route path='latest' element={<Latest />} />
            <Route path='oldest' element={<Oldest />} />
          </Route>
          <Route path='/addposts' element={<AddPosts />} />
          <Route path='/login' element={<Login />} />
          <Route path='/API/posts/:id' element={<EditPosts />} />

        </Routes>

      </BrowserRouter>

      {/* <UseRefDemo /> */}
      {/* <UseMemoDemo /> */}
      {/* <UseContextDemo /> */}
      {/* <CustomHook /> */}
      {/* <UseReducerDemo /> */}

      {/* <Provider store={store}>
        <CakeContainer />
        <hr/>
        <HookCakeContainer />
      </Provider> */}



    </div>
  );
};

export default App;
