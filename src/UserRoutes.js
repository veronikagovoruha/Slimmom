import { lazy, Suspense } from 'react';
import { Routes,  Route } from 'react-router-dom';

const MainPage = lazy(() => import('./pages/MainPage/MainPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/notFoundPage'));

const UserRoutes = () => {
    return(
        <Suspense>
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/main-page' element={<MainPage />}/>
                <Route path='*' element={<NotFoundPage />}/>
            </Routes>
        </Suspense>
    )
}

export default UserRoutes;