import React from 'react'
import{
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';
import Issue from './pages/Issue';
import Certificate from './pages/Certificate';

  const App = () => {
    const router=createBrowserRouter(createRoutesFromElements(
      <>
        <Route path="/" element={<Home/>} />
        <Route path="/issue" element={<Issue/>} />
        <Route path="/certificate" element={<Certificate/>} />
      </>
  ))
  return (
    <RouterProvider router={router}/>
  )
}

export default App