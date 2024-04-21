import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Demo from "./pages/demo/Demo.jsx";
import React from "react";
import Home from "./pages/home/Home.jsx";
import NotFound from "./pages/notFound/NotFound.jsx";
import Profile from "./pages/profile/Profile.jsx";
import {useCurrentUser} from "./context/Context.jsx";


function App() {
  // Retrieve current user from local storage on component mount
  const { currentUser } = useCurrentUser();

  const router = createBrowserRouter([
    {
      path: '/',
      element: ((currentUser === null) ? <Demo /> : <Home />),
      errorElement: <NotFound />,
    },
    {
      path: '/profile/:profileId',
      element: <Profile />,
      errorElement: <NotFound />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]);


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
