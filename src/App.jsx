import './App.css';
// importing routes
import {createBrowserRouter , RouterProvider } from "react-router-dom";
// importing header
import Header from './components/header/Header';
//imprt body
import Body from './components/body/Body';
//import footer
import Footer from './components/footer/Footer';
//import signIn
import SignIn from './components/signIn/SignIn'
// import SignUp
import SignUp from './components/signUp/SignUp'

import UserProfile from './components/user/User'

function App() {

  const router = createBrowserRouter([

    {
      path : '/',
      element : <><Header /><Body /><Footer /></>
    },

    {
      path : '/user',
      element : <UserProfile />
    }
    
  ])
  return (

    <RouterProvider router={router} />

    );
}

export default App;




