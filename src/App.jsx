import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Demo from "./pages/demo/Demo.jsx";
import React from "react";
import Home from "./pages/home/Home.jsx";
import sampleUsers from "./data/sampleUsers.js";
import NotFound from "./pages/notFound/NotFound.jsx";
import Profile from "./pages/profile/Profile.jsx";
import {UserProvider} from "./context/UserContext.jsx";


function App() {
  const currentUser = sampleUsers[1];

  const router = createBrowserRouter([
    {
      path: '/',
      element: (currentUser ? <Home /> : <Demo />),
      errorElement: <NotFound />,
    },
    {
      path: '/profile/:profileId',
      element: <Profile />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]);


  return (
    <>
      <UserProvider currentUser={currentUser}>
        <RouterProvider router={router} />
      </UserProvider>
    </>
  )
}

export default App
