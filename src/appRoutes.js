import React, { useEffect, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from './layout/layout';
import About from './pages/about';
import MyProjects from './pages/myProjects';
import Loader from './ui/loader';
const NotFound = React.lazy(() => import('./ui/notFound'));
const Home = React.lazy(() => import('./pages/home'));

function AppRoutes() {
    return (
        <Suspense fallback={
            <div className='w-full flex justify-center h-screen items-center'>

                <Loader />
            </div>
        }
        >

            <Router>
                <Routes>



                    {/*  Layout */}
                    <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='/MyProjects' element={<MyProjects />} />
                    <Route path='/AboutMe' element={<About />} />

                        {/* Outlet */}
                    </Route>



                    {/*   (*) => Rest of routes!?!?  */}
                    <Route path='*' element={<NotFound />} />

                </Routes>
                
            </Router>
        </Suspense>
    )
}

export default AppRoutes