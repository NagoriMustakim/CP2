import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signin from "./Pages/SignIn/SignIn";
import Signup from "./Pages/SignUp/SignUp";
import Home from "./Pages/Home/Home";
import Main from "./Pages/Main/Main";
import Fileto from "./Components/File/Fileto";
const router = createBrowserRouter([
  { path: '/', element: <Main /> },
  { path: '/home', element: <Home /> },
  { path: '/signin', element: <Signin /> },
  { path: 'signup', element: <Signup /> },
  { path: '/fileto', element: <Fileto /> },
])


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
