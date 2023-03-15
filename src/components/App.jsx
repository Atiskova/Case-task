import { lazy, Suspense } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';

const CoursesPage = lazy(() => import('../pages/CoursesPage/CoursesPage'));
// const CoursePage = lazy(() => import('../pages/CoursePage/CoursePage'));

const App = () => {
  return (
    <Suspense>
      {/* <Suspense fallback={<Loader />}> */}
      <Routes>
        <Route path="/" element={<CoursesPage />} />
        {/* <Route path="/:courseId" element={<MovieDetail />} /> */}
        <Route path="*" element={<NavLink to="/" />} />
      </Routes>
    </Suspense>
  );
};

export default App;
